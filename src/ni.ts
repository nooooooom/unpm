import { Agent, resolveCommandStatement } from './commands'

export type Runner = (agent: Agent, args: string[], hasLock?: boolean) => string | undefined

export const parseNi = <Runner>(
  ((agent, args, hasLock) => resolveCommandStatement(agent, 'install', args, hasLock))
)

export const parseNr = <Runner>((agent, args) => resolveCommandStatement(agent, 'run', args))

export const parseNu = <Runner>((agent, args) => resolveCommandStatement(agent, 'upgrade', args))

export const parseNun = <Runner>((agent, args) => resolveCommandStatement(agent, 'uninstall', args))

export const parseNix = <Runner>((agent, args) => resolveCommandStatement(agent, 'execute', args))

export const parseNa = <Runner>((agent, args) => resolveCommandStatement(agent, 'agent', args))
