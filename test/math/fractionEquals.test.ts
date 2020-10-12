import Fraction from "../../src/math/Fraction";

describe('Fractions equals tests', function () {
    it('Same numerator and denominator', function () {
        expect(new Fraction(3,5).equals(new Fraction(3,5))).toBe(true);
    })

})