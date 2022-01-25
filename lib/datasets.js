const shorthash = require('shorthash2');

const hostnames = require('./data/hostnames_by_country.json');
const geotargetsByCountry = require('./data/geotarget_hashes_by_country.json');
const languagesByCountry = require('./data/languages_by_country.json');

const availableCRs = require('./data/available_cr_countries.json');
const availableGLs = require('./data/available_gl_languages.json');
const availableLRs = require('./data/available_lr_languages.json');
const availableHLs = require('./data/available_hl_languages.json');

// eslint-disable-next-line max-len
const findCountry = (canonicalName) => Object.keys(geotargetsByCountry).find((country) => geotargetsByCountry[country].includes(shorthash(canonicalName)));
const findLanguages = (countryCode) => (languagesByCountry[countryCode] || []);

const findLR = (countryCode) => {
    for (const language of findLanguages(countryCode)) {
        const exists = availableLRs.includes(language.toLowerCase());
        if (exists) {
            return `lang_${language}`;
        }
    }
};

const findHL = (countryCode) => {
    for (const language of findLanguages(countryCode)) {
        const exists = availableHLs.includes(language.toLowerCase());
        if (exists) {
            return language;
        }
    }
};

const findGL = (countryCode) => {
    for (const language of findLanguages(countryCode)) {
        const exists = availableGLs.includes(language.toLowerCase());
        if (exists) {
            return language;
        }
    }
};

const findCR = (countryCode) => {
    if (availableCRs.includes(countryCode)) {
        return `country${countryCode}`;
    }
};

const findHostname = (country) => hostnames[(country || '').toUpperCase()];

module.exports = {
    findHostname,
    findCountry,
    findLanguages,
    findLR,
    findHL,
    findGL,
    findCR,
};
