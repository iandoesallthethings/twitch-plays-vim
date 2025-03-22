import { attach } from 'neovim'

export const client = attach({
	// @ts-ignore This totally works
	socket: {
		host: '0.0.0.0',
		port: 9999
	}
})

console.log('Nvim attached')

export async function send(input: string) {
	await client.input(input)
}

// Testing
if (import.meta.main) {
	console.log('Starting Nvim in test mode')
	for await (const input of console) send(input)
}
