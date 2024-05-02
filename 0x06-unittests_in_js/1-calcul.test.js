const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('Testing when type === SUM with two positive integer', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
  });
  it('Testing when type === SUM with two negative integer', () => {
    assert.strictEqual(calculateNumber('SUM', -1, -3), -4);
  });
  it('Testing when type === SUBTRACT with two positive integer', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 50, 20), 30);
  });
  it('Testing when type === SUBTRACT with two negative integer', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', -1, -3), 2);
  });
  it('Testing when type === DIVIDE with two positive integer', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 3), 0.3333333333333333);
  });
  it('Testing when type === DIVIDE with two negative integer', () => {
    assert.strictEqual(calculateNumber('DIVIDE', -1, -3), 0.3333333333333333);
  });
  it('Testing when type === DIVIDE and b is 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
  });
})
