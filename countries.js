const func = require('../countries.js')

test('India', () => {
    expect(func('India')).toBe('Asia')
})

test('United States of America', () => {
    expect(func('United States of America')).toBe('North America')
})

test('China', () => {
    expect(func('China')).toBe('Asia')
})

test('Nepal', () => {
    expect(func('Nepal')).toBe('Asia')
})

test('Australia', () => {
    expect(func('Australia')).toBe('Australia')
})

test('France', () => {
    expect(func('France')).toBe('Europe')
})

test('Germany', () => {
    expect(func('Germany')).toBe('Europe')
})

test('South Africa', () => {
    expect(func('South Africa')).toBe('Africa')
})

test('Nigeria', () => {
    expect(func('Nigeria')).toBe('Africa')
})

test('Mexico', () => {
    expect(func('Mexico')).toBe('North America')
})

test('Argentina', () => {
    expect(func('Argentina')).toBe('South America')
})

test('Brazil', () => {
    expect(func('Brazil')).toBe('South America')
})

test('Canada', () => {
    expect(func('Canada')).toBe('North America')
})

test('Singapore', () => {
    expect(func('Singapore')).toBe('Asia')
})

test('Sweden', () => {
    expect(func('Sweden')).toBe('Europe')
})
