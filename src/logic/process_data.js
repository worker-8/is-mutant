const rowValidator = require('./row_validator');
const colValidator = require('./col_validator');
const obliqueValidator = require('./oblique_validator');

const fnArr = [rowValidator, colValidator, obliqueValidator];

module.exports = (data) => {
  if (data === null) {
    return {
      code: 403,
      msg: 'NO DATA'
    };
  }

  let countGen = 0;

  for (let i = 0; i <= fnArr.length - 1; i++) {
    countGen += fnArr[i](data.dna);
    if (countGen >= 2) {
      break;
    }
  }

  if (countGen >= 2) {
    return {
      'code': 200,
      'msg': 'Is Mutant'
    };
  }
  return {
    'code': 403,
    'msg': 'Not Mutant'
  };
};
