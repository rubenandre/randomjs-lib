const random = require('./index')

test('Generate a random int number between 1 and 5, the result have to be between 1 and 5', () => {
    const value = random.randInt(1, 5);
    expect(value).toBeGreaterThanOrEqual(1)
    expect(value).toBeLessThanOrEqual(5)
})

test('Generate a random float number between 1.33 and 5.27, the result have to be between 1.33 and 5.27', () => {
    const value = random.randFloat(1.33, 5.27, 1);
    expect(value).toBeGreaterThanOrEqual(1.3)
    expect(value).toBeLessThanOrEqual(5.3)
})

test('Generate a random boolean the result has to be true or false', () => {
    const value = random.randBoolean();
    expect(typeof value).toBe("boolean")
})