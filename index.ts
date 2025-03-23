import * as Twitch from './lib/Twitch'
import * as Nvim from './lib/Nvim'

Twitch.init((_channel, user, message) => {
	const result = Nvim.applyRules(message, user)

	if (!result.valid) return

	console.log(`[${user}] ${result.message}`)
	Nvim.send(result.message)
})

for await (const input of console) {
	switch (input.trim()) {
		case 'rules':
			Nvim.printRules()
			break
		default:
			console.log('Unknown command')
	}
}
