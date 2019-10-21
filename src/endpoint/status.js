const response = require('../response');
const conn = require('../source/conn');

module.exports = async (fastify, opts, done) => {
    fastify.get('/status', async (request, reply) => {
        let res = {
            ADN:
            {
                "count_mutant_dna": 0,
                "count_human_dna": 0,
                "ratio": 0
            }
        };

        let sql = `SELECT 
                        (SELECT COUNT(*) FROM registry) AS total,
                        (SELECT COUNT(*) FROM registry WHERE is_mutant = TRUE) AS mutant
                    FROM DUAL;`;

        let query = await new Promise((resolve) =>
            conn.query(
                sql,
                [],
                function (err, rows) {
                    if (err) {
                        return response.badRequest('error db', err, reply);
                    } else {
                        if (rows.length > 0){
                            return resolve({ total: rows[0].total, mutant: rows[0].mutant });
                        }
                        return resolve({ total: 0, mutant: 0 });
                    }
                }
            )
        );

        if (query.total > 0) {
            res.ADN.count_mutant_dna = query.mutant;
            res.ADN.count_human_dna = query.total - query.mutant;
            res.ADN.ratio = (((query.mutant * 100) / query.total )/100).toFixed(2)
        }
        return response.ok(res, 'Done', reply);
    });

    done();
};

/**
 * SELECT
	(SELECT COUNT(*) FROM registry) AS total,
	(SELECT COUNT(*) FROM registry WHERE is_mutant = TRUE) AS mutant
FROM DUAL;
 */