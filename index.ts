import * as Twitch from './lib/Twitch'
import * as Nvim from './lib/Nvim'

Twitch.init((_channel, user, message) => {
	const result = Nvim.applyRules(message, user)

	if (!result.valid) return

	console.log(`[${user}] ${result.message}`)
	Nvim.send(result.message)
})
