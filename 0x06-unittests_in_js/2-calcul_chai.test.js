const { expect } = require('chai');
const cal = require('./1-calcul');

describe('cal', () => {
  it('correct result for sum', () => {
    expect(cal('SUM', 4, 1)).to.equal(5);
    expect(cal('SUM', 4.7, 100)).to.equal(105);
    expect(cal('SUM', 4.5, 1.2)).to.equal(6);
    expect(cal('SUM', 4.1, 1.1)).to.equal(5);
  });
  it('correct result for subtract', () => {
    expect(cal('SUBTRACT', 4, 1)).to.equal(3);
    expect(cal('SUBTRACT', 4.7, 100)).to.equal(-95);
    expect(cal('SUBTRACT', 4.5, 1.2)).to.equal(4);
    expect(cal('SUBTRACT', 4.1, 1.1)).to.equal(3);
  });
  it('correct result for divide', () => {
    expect(cal('DIVIDE', 4, 1)).to.equal(4);
    expect(cal('DIVIDE', 4.7, 100)).to.equal(0.05);
    expect(cal('DIVIDE', 4.5, 1.2)).to.equal(5);
    expect(cal('DIVIDE', 4.1, 1.1)).to.equal(4);
  });
  it('Error', () => {
    expect(cal('DIVIDE', 4, 0)).to.equal('Error');
  });
  it('type error', () => {
    expect(() => cal('')).to.throw(TypeError);
  });
});
