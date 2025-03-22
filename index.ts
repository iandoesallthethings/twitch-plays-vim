import * as Twitch from './lib/Twitch'
import * as Nvim from './lib/Nvim'

Twitch.init((channel, user, message) => {
	const sanitized = sanitize(message)
	console.log(`[${channel}] ${user}: ${sanitized}`)
	Nvim.send(sanitized)
})

function sanitize(message: string) {
	return message //
		.trim()
	// .slice(0, 100)
}
