module.exports = (ln) => {
  return /(A{4}|C{4}|G{4}|T{4})/gmi.test(ln);
};
