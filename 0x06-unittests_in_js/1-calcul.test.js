const assert = require('assert');
const cal = require('./1-calcul');

describe('cal', () => {
  it('correct result for sum', () => {
    assert.strictEqual(cal('SUM', 4, 1), 5);
    assert.strictEqual(cal('SUM', 4.7, 100), 105);
    assert.strictEqual(cal('SUM', 4.5, 1.2), 6);
    assert.strictEqual(cal('SUM', 4.1, 1.1), 5);
  });
  it('correct result for subtract', () => {
    assert.strictEqual(cal('SUBTRACT', 4, 1), 3);
    assert.strictEqual(cal('SUBTRACT', 4.7, 100), -95);
    assert.strictEqual(cal('SUBTRACT', 4.5, 1.2), 4);
    assert.strictEqual(cal('SUBTRACT', 4.1, 1.1), 3);
  });
  it('correct result for divide', () => {
    assert.strictEqual(cal('DIVIDE', 4, 1), 4);
    assert.strictEqual(cal('DIVIDE', 4.7, 100), 0.05);
    assert.strictEqual(cal('DIVIDE', 4.5, 1.2), 5);
    assert.strictEqual(cal('DIVIDE', 4.1, 1.1), 4);
  });
  it('Error', () => {
    assert.strictEqual(cal('DIVIDE', 4, 0), 'Error');
  });
  it('incorrect type', () => {
    assert.throws(() => cal('b', 'b', 1), {
      name: 'TypeError',
      message: 'param 1 must be string and other numbers',
    });
    assert.throws(() => cal(1, 'c', 2), {
      name: 'TypeError',
      message: 'param 1 must be string and other numbers',
    });
    assert.throws(() => cal('a', 2, 'b'), {
      name: 'TypeError',
      message: 'param 1 must be string and other numbers',
    });
  });

  it('type error', () => {
    assert.throws(() => cal(), {
      name: 'TypeError',
    });
  });
});
