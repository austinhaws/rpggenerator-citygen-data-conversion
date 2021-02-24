const moduleExports = require('../index.js');
const booleanStringToBooleanValue = require("../src/booleanStringToBooleanValue");
const roundDecimalResult = require("../src/roundDecimalResult");

test('exports', () => {
    const knownExports = {
        booleanStringToBooleanValue,
        roundDecimalResult,
    };

    expect(Object.keys(moduleExports)).toStrictEqual(Object.keys(knownExports));
    Object.entries(knownExports)
        .forEach(([key, value]) => expect(moduleExports[key]).toBe(value));
});
