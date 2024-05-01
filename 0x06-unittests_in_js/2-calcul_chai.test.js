const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai')

describe("Simple calculator but using chai instead of assert", () => {
    it("When test argument === SUM", () => {
        expect(calculateNumber('SUM', 9.1, 2.3)).equal(11);
    });
    it("When test argument === SUBTRACT", () => {
        expect(calculateNumber('SUBTRACT', 15.0, 4.5)).equal(10);
    });
    it("When test argument === DIVIDE", () => {
        expect(calculateNumber('DIVIDE', 25.0, 5.1)).equal(5);
    });
    it("When test argument === DIVIDE, but b is 0", () => {
        expect(calculateNumber('DIVIDE', 3.3, 0.2)).equal("Error");
    });
});