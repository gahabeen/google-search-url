const { shuffle } = require('fast-shuffle');

const organizeObject = (obj, options) => {
    const { exclude = [] } = options || {};
    const keys = options.shuffle ? shuffle(Object.keys(obj)) : Object.keys(obj);
    return keys.reduce((acc, key) => {
        if (obj[key] !== undefined && !exclude.includes(key)) {
            acc[key] = obj[key];
        }
        return acc;
    }, {});
};

const shuffleArray = shuffle;

const isNumber = (value) => {
    return typeof value === 'number' && !Number.isNaN(value);
};

const convertValueToNumber = (value) => {
    if (isNumber(value)) return value;
    if (value !== undefined) {
        return value ? 1 : 0;
    }
};

module.exports = { organizeObject, shuffleArray, isNumber, convertValueToNumber };
