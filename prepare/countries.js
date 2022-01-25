const fs = require('fs');
const path = require('path');

const geotargets = require('../lib/data/geotarget_hashes_by_country.json')
const countries = require('./countries.json')

const countriesFiltered = {}

for (const [code, country] of Object.entries(countries)) {
    console.log('code', code)
    if (code.toUpperCase() in geotargets) {
        countriesFiltered[code] = country.languages;
    }
}

fs.writeFileSync('./countriesFiltered.json', JSON.stringify(countriesFiltered, null, 2));
