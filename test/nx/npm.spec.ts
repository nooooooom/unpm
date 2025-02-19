import { expect, test } from 'vitest'
import { parseNix } from '../../src'

const agent = 'npm'
const _ = (arg: string, expected: string) => () => {
  expect(parseNix(agent, arg.split(' ').filter(Boolean))).toBe(expected)
}

test('single uninstall', _('esbuild', 'npx esbuild'))
test('multiple', _('esbuild --version', 'npx esbuild --version'))
