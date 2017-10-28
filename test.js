const test = require('ava')
const index = require('./index')

const arr = index([1,2,3])

test('last index of array should be accessible through [-1]', t => {
    t.is(3, arr[-1])
})

test('native array methods should work as expected', t => {
    arr.push(4)
    t.is(4, arr[-1])
    t.is(1, arr[0])
})

test('invalid indices should return undefined', t => {
    t.is(undefined, arr[100])
    t.is(undefined, arr[-100])
})

test('properties containing numbers should work as expected', t => {
    arr['-3gonometry'] = "foo"
    t.is("foo", arr['-3gonometry'])
})