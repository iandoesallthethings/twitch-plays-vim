import { ChatClient } from '@twurple/chat'

type OnMessageHandler = Parameters<ChatClient['onMessage']>[0]

export function init(onMessage: OnMessageHandler) {
	const chatClient = new ChatClient({
		channels: [Bun.env.TWITCH_CHANNEL!]
	})

	chatClient.onConnect(() => {
		console.log(`Connected to ${Bun.env.TWITCH_CHANNEL}'s Twitch chat`)
	})

	chatClient.onMessage(onMessage)

	chatClient.connect()

	return chatClient
}
