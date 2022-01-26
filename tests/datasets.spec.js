const gsearch = require('../index');

it('should properly find a main country', () => {
    const country = gsearch.findMainCountry([
        'Pithiviers,Centre-Val de Loire,France',
        'Aquia Harbour,Virginia,United States',
        'Apple Valley,Minnesota,United States',
    ]);
    expect(country).toEqual('US');
});

it('should properly find a main language', () => {
    const country = gsearch.findMainLanguage([
        'Pithiviers,Centre-Val de Loire,France',
        'Aquia Harbour,Virginia,United States',
        'Apple Valley,Minnesota,United States',
    ]);
    expect(country).toEqual('en');
});
