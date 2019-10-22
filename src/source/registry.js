const conn = require('./conn');

const insert = async (data, isMutant) => {
  return await new Promise((resolve) =>
    conn.query(
      `insert into registry (dna, is_mutant) values (?,?)`,
      [
        data,
        isMutant
      ],
      function (err, rows) {
        if (err) {
          return resolve({ status: false, err })
        } else {
          return resolve({ status: true, isMutant, data });
        }
      }
    )
  );
};

const findByDNA = async (dna) => {
  return await new Promise((resolve) =>
    conn.query(
      `SELECT * FROM registry WHERE dna=?`,
      [dna],
      function (err, rows) {
        if (err) {
          return resolve({ status: false, err })
        } else {
          return resolve({ status: true, count: rows.length, rows });
        }
      }
    )
  );
};

const getStats = async () => {
  return await new Promise((resolve) =>
    conn.query(
      `SELECT (SELECT COUNT(*) FROM registry) AS total,
        (SELECT COUNT(*) FROM registry WHERE is_mutant = TRUE) AS mutant
      FROM DUAL;`,
      null,
      function (err, rows) {
        if (err) {
          return resolve({ status: false, err })
        } else {
          return resolve({ status: true, row:rows[0] });
        }
      }
    )
  );
}

module.exports = {
  insert,
  findByDNA,
  getStats
}