import { hello } from '../jest exercise.js'

test('test hello function', () => {
  expect(hello()).toBe('hello world')
}) 