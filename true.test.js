const trueThe = require('./index.js');

test("Input '' will return false", () => {
    expect(trueThe('')).toBe(false);
});
test("Input {} will return false", () => {
    expect(trueThe({})).toBe(false);
});
test("Input false will return false", () => {
    expect(trueThe(false)).toBe(false);
});
test("Input [] will return false", () => {
    expect(trueThe([])).toBe(false);
});
test("Input null will return false", () => {
    expect(trueThe(null)).toBe(false);
});
test("Input 0 will return false", () => {
    expect(trueThe(0)).toBe(false);
});
test("Input undefined will return false", () => {
    expect(trueThe(undefined)).toBe(false);
});
test("Input NaN will return false", () => {
    expect(trueThe(NaN)).toBe(false);
});

test("Input 1 will return true", () => {
    expect(trueThe(1)).toBe(true);
});
test("Input {a:1} will return true", () => {
    expect(trueThe({
        a: 1
    })).toBe(true);
});
test("Input [1] will return true", () => {
    expect(trueThe([1])).toBe(true);
});
test("Input '1' will return true", () => {
    expect(trueThe('1')).toBe(true);
});
test("Input true will return true", () => {
    expect(trueThe(true)).toBe(true);
});