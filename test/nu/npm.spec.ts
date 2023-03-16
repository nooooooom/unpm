import { expect, test } from 'vitest'
import { parseNu } from '../../src'

const agent = 'npm'
const _ = (arg: string, expected: string) => () => {
  expect(
    parseNu(agent, arg.split(' ').filter(Boolean)),
  ).toBe(
    expected,
  )
}

test('empty', _('', 'npm update'))
