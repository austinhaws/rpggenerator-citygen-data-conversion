const roundDecimalResult = require("../src/roundDecimalResult");

test('roundDecimalResult', () => {
    expect(roundDecimalResult(3.134)).toBe(3.13);
    expect(roundDecimalResult(12345.1343191298729387)).toBe(12345.13);
    expect(roundDecimalResult(1.20)).toBe(1.2);
    expect(roundDecimalResult()).toBe(0);
    expect(roundDecimalResult(null)).toBe(0);
    expect(roundDecimalResult(false)).toBe(0);
    expect(roundDecimalResult(undefined)).toBe(0);
    expect(roundDecimalResult(NaN)).toBe(0);
    expect(roundDecimalResult('   12345.1245  ')).toBe(12345.12);
    expect(roundDecimalResult('   -12345.1245  ')).toBe(-12345.12);
    expect(roundDecimalResult(1.225)).toBe(1.23);
});
