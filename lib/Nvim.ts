import { attach } from 'neovim'
import type { LeveledLogMethod } from 'winston'

const PREFIX = '!v'

const noop = (..._: any[]) => {}

export const client = attach({
	// @ts-ignore This totally works
	socket: {
		host: '0.0.0.0',
		port: 9999
	},
	options: {
		logger: {
			level: 'info',
			info: console.log as LeveledLogMethod,
			warn: console.warn as LeveledLogMethod,
			error: console.error as LeveledLogMethod,
			debug: noop as LeveledLogMethod // Neovim has a logger.debug call that won't shut up.
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
		name: 'Message must start with !vim',
		enabled: true,
		silent: true, // Don't log when messages don't start with !vim
		run: (msg) => (msg.toLowerCase().startsWith(PREFIX) ? msg : false)
	},
	{
		name: 'No prohibited words',
		enabled: false,
		run: (msg) => {
			const banned = ['badword1', 'badword2']
			return banned.some((word) => msg.toLowerCase().includes(word)) ? false : msg
		}
	},
	{
		name: 'removePrefix',
		enabled: true,
		run: (msg) => msg.replace(PREFIX, '')
	},
	{
		name: 'cleanup',
		enabled: true,
		run: (msg) => msg.trim().replace(/\s+/g, ' ').slice(0, 100)
	}
]

// Testing
if (import.meta.main) {
	console.log('Starting Nvim in test mode')
	for await (const input of console) send(input)
}
