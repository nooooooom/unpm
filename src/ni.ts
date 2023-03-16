import { Agent, resolveCommandStatement } from './commands'

export const NiCommands = ['ni', 'nr', 'nix', 'nu', 'nun', 'nci', 'na'] as const
export type NiCommands = typeof NiCommands[number]

export type Runner = (agent: Agent, args?: string[], hasLock?: boolean) => string | undefined

export const parseNi = <Runner>(
  ((agent, args, hasLock) => resolveCommandStatement(agent, 'install', args, hasLock))
)

export const parseNr = <Runner>((agent, args) => resolveCommandStatement(agent, 'run', args))

export const parseNu = <Runner>((agent, args) => resolveCommandStatement(agent, 'upgrade', args))

export const parseNun = <Runner>((agent, args) => resolveCommandStatement(agent, 'uninstall', args))

export const parseNix = <Runner>((agent, args) => resolveCommandStatement(agent, 'execute', args))

export const parseNa = <Runner>((agent, args) => resolveCommandStatement(agent, 'agent', args))

export function resolveNiCommandStatement(command: NiCommands, ...args: Parameters<Runner>) {
  switch (command) {
    case 'ni':
      return parseNi(...args)
    case 'nr':
      return parseNr(...args)
    case 'nu':
      return parseNu(...args)
    case 'nun':
      return parseNun(...args)
    case 'nix':
      return parseNix(...args)
    case 'na':
      return parseNa(...args)
  }
}
