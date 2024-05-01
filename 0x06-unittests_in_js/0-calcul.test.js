const assert = require('assert');
const calculateNumber = require('./0-calcul')

describe("Testing for the rounded summation", () => {
    it('Round and add two positive numbers correct', () => {
        const Result = calculateNumber(4.3, 5.7);
        assert.equal(Result, 10);
    });
    it('Round and add two positive numbers', () => {
        const Result = calculateNumber(-3.6, -6.6);
        assert.strictEqual(Result, -11);
    });
    it('Round one positive and negative and adds them', () => {
        const Result = calculateNumber(-3.6, 6.6);
        assert.strictEqual(Result, 3);
    })
    it('Round 0 and one positive number', () => {
        const Result = calculateNumber(0, 4);
        assert.strictEqual(Result, 4)
    });
    it('Round 0 and one negative number', () => {
        const Result = calculateNumber(0, -4);
        assert.strictEqual(Result, -4);
    });
})
