import Fraction from '../../src/math/Fraction';

describe('Add fractions tests', function () {
    it('A zero plus zero', function () {
        expect(new Fraction(0).addFraction(new Fraction(0)).getNumerator).toBe(0);
    })

    it('A zero plus non zero', function () {
        expect(new Fraction(0).addFraction(new Fraction(3)).getNumerator).toBe(3);
    })

    it('A non zero plus zero', function () {
        expect(new Fraction(5).addFraction(new Fraction(0)).getNumerator).toBe(5);
    })

    it('A non zero plus non zero', function () {
        expect(new Fraction(3).addFraction(new Fraction(4)).getNumerator).toBe(7);
    })

    it('A negative input with a negative result', function () {
        expect(new Fraction(-3).addFraction(new Fraction(1)).getNumerator).toBe(-2);
    })

    it('A non trivial denominator', function () {
        let firstFraction = new Fraction(1,5);
        let secondFraction = new Fraction(2,5);
        let result = firstFraction.addFraction(secondFraction)
        expect(result.getNumerator).toBe(3);
        expect(result.getDenominator).toBe(5);
    });
})

