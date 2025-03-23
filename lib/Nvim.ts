import { attach } from 'neovim'
import dedent from 'ts-dedent'
import type { LeveledLogMethod } from 'winston'

const PREFIX = '!v'
const BANNED = [':q', ':qa', ':wq', ':wq!', ':ZZ', ':ZQ']
const MAX_LENGTH = 100

const noop = (..._: any[]) => {}

export const client = attach({
	// @ts-ignore This totally works
	socket: { host: '0.0.0.0', port: 9999 },
	options: {
		logger: {
			level: 'info',
			info: console.log as LeveledLogMethod,
			warn: console.warn as LeveledLogMethod,
			error: console.error as LeveledLogMethod,
			debug: noop as LeveledLogMethod // Neovim has a random logger.debug call that won't shut up.
		}
	}
})

console.log('Nvim attached')

export async function send(input: string) {
	await client.input(input)
}

type Rule = {
	name: string
	enabled: boolean
	silent?: boolean // Whether to silently reject without logging
	run: (message: string) => string | false
}

export function applyRules(message: string, user: string) {
	let result = message

	for (const rule of rules.filter((r) => r.enabled)) {
		const output = rule.run(result)
		if (output === false) {
			if (!rule.silent) {
				console.log(`${user}'s message rejected: ${rule.name}`)
			}
			return { valid: false, message: result }
		}
		result = output
	}

	return { valid: true, message: result }
}

const rules: Rule[] = [
	{
		name: `Command prefix: ${PREFIX}`,
		enabled: true,
		silent: true, // Don't log when messages don't start with !vim
		run: (msg) => (msg.toLowerCase().startsWith(PREFIX) ? msg.replace(PREFIX, '') : false)
	},
	{
		name: `Banned words: ${BANNED.join(', ')}`,
		enabled: true,
		run: (msg) => (BANNED.some((word) => msg.toLowerCase().includes(word)) ? false : msg)
	},
	{
		name: `Max length: ${MAX_LENGTH}`,
		enabled: false,
		run: (msg) => msg.trim().slice(0, MAX_LENGTH)
	},
	{
		name: 'cleanup',
		enabled: true,
		run: (msg) => msg.trim()
	}
]

export function printRules() {
	const enabled = rules
		.filter((r) => r.enabled)
		.map((r) => r.name)
		.join(`\n  - `)

	console.log(dedent`
		Enabled rules:
		  - ${enabled}
	`)
}

// Testing
if (import.meta.main) {
	console.log('Starting Nvim in test mode')
	for await (const input of console) send(input)
}
