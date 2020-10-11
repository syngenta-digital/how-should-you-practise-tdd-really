const addFraction = require("../../src/math/addFraction");


describe('Add fractions tests', function () {
    it('A zero plus zero test', function () {
        expect(addFraction(0, 0)).toBe(0);
    })

    it('A zero plus non zero', function () {
        expect(addFraction(0, 3)).toBe(3);
    })

    it('A non zero plus zero', function () {
        expect(addFraction(5, 0)).toBe(5);
    })

    it('A non zero plus non zero', function () {
        expect(addFraction(3, 4)).toBe(7);
    })
})

