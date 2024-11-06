const func = require('../ageCheck.js')

test('age is 19', () => {
    expect(func(19)).toBe("You can drive in India!")
})
test('age is 10', () => {
    expect(func(10)).toBe("You can't drive in India!")
})
test('age is 18', () => {
    expect(func(18)).toBe("You are just old enough to drive in India!")
})

