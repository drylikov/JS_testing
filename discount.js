const func = require('../discount.js')

test('bill is 250', () => {
    expect(func(250)).toBe("250 0 250")
})

test('bill is 0', () => {
    expect(func(0)).toBe("0 0 0")
})

test('bill is 1000', () => {
    expect(func(1000)).toBe("1000 100 900")
})

test('bill is 300', () => {
    expect(func(300)).toBe("300 30 270")
})

test('bill is 1200', () => {
    expect(func(1200)).toBe("1200 100 1100")
})
