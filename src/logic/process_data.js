module.exports = (data) => {
    if (!data.dna) {
        return {
            code: 403,
            msg: 'NO DATA'
        }
    }

    const countGen = 0;

    return {
        code: 403,
        msg: 'Not Mutant'
    }
}