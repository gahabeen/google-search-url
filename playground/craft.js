const gsearch = require('../index');

console.log(

    gsearch.craft(
        {
            location: 'Florida,New York,United States',
            query: ['site:linkedin.com', '"CEO"', 'bank'],
            num: 100,
            page: 1,
            shuffle: true,
            sign: true
        }
    )
)
