const booleanStringToBooleanValue = require("../src/booleanStringToBooleanValue");

test('booleanStringToBooleanValue: true', () => (
    expect(booleanStringToBooleanValue('true')).toBe(true)
));

test('booleanStringToBooleanValue: false', () => (
    expect(booleanStringToBooleanValue('false')).toBe(false)
));

test('booleanStringToBooleanValue: blank', () => (
    expect(booleanStringToBooleanValue('')).toBe(null)
));

test('booleanStringToBooleanValue: null', () => (
    expect(booleanStringToBooleanValue(null)).toBe(null)
));

test('booleanStringToBooleanValue: random', () => (
    expect(booleanStringToBooleanValue('random')).toBe(null)
));

test('booleanStringToBooleanValue: weird', () => (
    expect(booleanStringToBooleanValue('SOme Really (*# WEIRD vLVuae that will never be!!!  ')).toBe(null)
));

// trim is a weird case since GQL restricts the input and should it really trim? but might as well..
test('booleanStringToBooleanValue: trim', () => {
    expect(booleanStringToBooleanValue(' true ')).toBe(true);
    expect(booleanStringToBooleanValue(' false ')).toBe(false);
    expect(booleanStringToBooleanValue(' random ')).toBe(null);
});

// another weird case where actual true/false values are passed instead of strings (jest tests were doing this)
test('booleanStringToBooleanValue: actual boolean values', () => {
    expect(booleanStringToBooleanValue(true)).toBe(true);
    expect(booleanStringToBooleanValue(false)).toBe(false);
    expect(booleanStringToBooleanValue(null)).toBe(null);
});

