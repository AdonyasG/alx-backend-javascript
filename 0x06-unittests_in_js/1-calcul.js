const calculateNumber = (type, a, b) => {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  }
  if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  }
  if (type === 'DIVIDE') {
    if (Math.round(b) === 0) {
      return 'Error';
    }
    return Math.round(a) / Math.round(b);
  }
  if (typeof type !== 'string' || typeof a !== 'number' || typeof b !== 'number') {
    throw TypeError('param 1 must be string and other numbers');
  }
  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw TypeError;
  }
  if (a === undefined || b === undefined) {
    throw TypeError;
  }
};

module.exports = calculateNumber;
