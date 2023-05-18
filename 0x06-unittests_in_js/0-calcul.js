const calculateNumber = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw TypeError('param must be both numbers');
  }
  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw TypeError;
  }
  if (a === undefined || b === undefined) {
    throw TypeError;
  }
  return Math.round(a) + Math.round(b);
};

module.exports = calculateNumber;
