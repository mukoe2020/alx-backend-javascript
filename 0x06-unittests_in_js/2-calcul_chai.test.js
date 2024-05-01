const assert = require('assert');
const calculateNumber = require('./1-calcul')

describe("Testing for the rounded arithmetic", () => {
    it("Test for when type === SUM with two positive numbers", () => {
        const Result = calculateNumber('SUM', 4.6, 11.1);
        assert.strictEqual(Result, 16)
    });
    it("Test for when type === SUBTRACT with two numbers", () => {
        const Result = calculateNumber('SUBTRACT', 50.3, 25.2);
        assert.strictEqual(Result, 25);
    });
    it("Test for when type === DIVIDE with two numbers", () => {
        const Result = calculateNumber('DIVIDE', 15, 3);
        assert.strictEqual(Result, 5);
    });
    it("Test for when type === DIVIDE and b is rounded to 0", () => {
        const Result = calculateNumber('DIVIDE', 15, 0.3);
        assert.strictEqual(Result, 'Error');
    })
});