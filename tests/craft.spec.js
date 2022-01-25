const gsearch = require('../index');
const craftTestValues = require('./craft-tests-values.json');

it('should properly craft a search url', () => {
    for (const [input, output] of craftTestValues) {
        expect(gsearch.craft(input)).toEqual(output);
    }
});
