import Fraction from '../../src/math/Fraction';

describe('Add fractions tests', function () {
    it('A zero plus zero', function () {
        expect(new Fraction(0).addFraction(new Fraction(0))).toEqual(new Fraction(0));
    })

    it('A zero plus non zero', function () {
        expect(new Fraction(0).addFraction(new Fraction(3))).toEqual(new Fraction(3));
    })

    it('A non zero plus zero', function () {
        expect(new Fraction(5).addFraction(new Fraction(0))).toEqual(new Fraction(5));
    })

    it('A non zero plus non zero', function () {
        expect(new Fraction(3).addFraction(new Fraction(4))).toEqual(new Fraction(7));
    })

    it('A negative input with a negative result', function () {
        expect(new Fraction(-3).addFraction(new Fraction(1))).toEqual(new Fraction(-2));
    })

    it('A non trivial denominator', function () {
        expect(new Fraction(1,5).addFraction(new Fraction(2,5))).toEqual(new Fraction(3,5))
    });
})

