const isMutant = require('./is_mutant');

module.exports = (data) => {
  let count = 0;
  for (let x = 0; x <= data.length - 1; x++) {
    var tmp = '';
    for (let i = 0; i <= data[x].length - 1; i++) {
      tmp += data[i][x];
    }
    count += (isMutant(tmp)) ? 1 : 0;
  }

  return count;
};
