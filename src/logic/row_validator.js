const isMutant = require('./is_mutant');

/**
 * row_validator
 * @param data <Array>
 * @return Integer
 */
module.exports = (data) => {
    let count = 0;
    for(var x = 0; x <= data.length -1; x++){
        count += (isMutant(data[x]))?1:0;
    }

    return count
}