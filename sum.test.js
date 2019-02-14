const random = require('./index')

test('Generate a random int number between 1 and 5, the result have to be between 1 and 5', () => {
    const value = random.randInt(1, 5);
    expect(value).toBeGreaterThanOrEqual(1)
    expect(value).toBeLessThanOrEqual(5)
})

test('Generate a random float number between 1.33 and 5.27, the result have to be between 1.33 and 5.27', () => {
    const value = random.randFloat(1.33, 5.27, 1);
    expect(value).toBeGreaterThan(1.3)
    expect(value).toBeLessThan(5.3)
})

test('Generate a random boolean the result has to be true or false', () => {
    const value = random.randBoolean();
    expect(typeof value).toBe("boolean")
})

test('Generate a random even number the number has to be even', () => {
    const value = random.randEven(1, 10)
    expect(value % 2).toBe(0)
})

test('Generate a random odd number the number has to be odd', () => {
    const value = random.randOdd(1, 10)
    expect(value % 2).toBe(1)
})

test('Get a random element from an array the result has to be in array', () => {
    const value = random.randElement(["JavaScript"])
    expect(value).toBe("JavaScript")
})