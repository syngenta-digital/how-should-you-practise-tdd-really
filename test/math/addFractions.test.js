const addFraction = require("../../src/math/addFraction");


describe('Add fractions tests', function () {
    it('A zero plus zero test', function () {
        expect(addFraction(0, 0)).toBe(0);
    })

    it('A non zero plus zero test', function () {
        expect(addFraction(0, 3)).toBe(3);
    })
})

