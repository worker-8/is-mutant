const isMutant = require('./is_mutant');

module.exports = (data) => {
  let lr = '';
  let rl = '';
  for (let x = 0; x <= data.length - 1; x++) {
    lr += data[x][x];
    rl += data[x][data.length - x - 1];
  }
  return isMutant(lr) + isMutant(rl);
};
