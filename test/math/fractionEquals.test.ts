import Fraction from "../../src/math/Fraction";

describe('Fractions equals tests', function () {
    it('Same numerator and denominator', function () {
        expect(new Fraction(3,5)).toEqual((new Fraction(3,5)));
    })

    it('Diferent denominators', function () {
        expect(new Fraction(3,4)).not.toEqual((new Fraction(3,7)));
    })

    it('Whole number not equals to different whole number', function () {
        expect(new Fraction(6)).not.toEqual((new Fraction(5)));
    })

})