const assert = require('assert');
const cal = require('./0-calcul');

describe('cal', () => {
  it('correct result', () => {
    assert.strictEqual(cal(4, 1), 5);
    assert.strictEqual(cal(4.7, 100), 105);
    assert.strictEqual(cal(4.5, 1.2), 6);
    assert.strictEqual(cal(4.1, 1.1), 5);
  });

  it('incorrect result', () => {
    assert.notStrictEqual(cal(4, 1), 6);
    assert.notStrictEqual(cal(4.7, 100), 100);
    assert.notStrictEqual(cal(4.5, 1.2), 5);
    assert.notStrictEqual(cal(4.1, 1.1), 6);
  });

  it('incorrect type', () => {
    assert.throws(() => cal('b', 1), {
      name: 'TypeError',
      message: 'param must be both numbers',
    });
    assert.throws(() => cal(1, 'c'), {
      name: 'TypeError',
      message: 'param must be both numbers',
    });
  });

  it('type error', () => {
    assert.throws(() => cal(), {
      name: 'TypeError',
    });
});
});
