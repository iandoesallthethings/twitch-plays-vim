# Twitch Plays Vim

Listens to Twitch. Sends to vim.

## Config

Just needs a few `.env` things

```bash
ALLOW_CONSOLE=1             # The neovim library hijacks stdout, so they use winston
TWITCH_CHANNEL=channelname  # What chat stream to listen to
USE_VPN=false               # Or true. Just populate your nord creds
NORDVPN_TOKEN=
NORDVPN_PRIVATE_KEY=
```

## Running

```bash
# Get set up
bun install

# Build and run
bun restart

# Attach to the vim window to watch
bun attach:vim

# Attach to bash to install stuff and junk (optional)
bun attach:bash

# Then run the server to route commands
bun run watch
```

## TODO

- [x] ~~Look into restricted mode (-z)~~ Looks like it's removed.
- [x] Point neovim at the smaller init.lua rather than my real one?
- [x] Stick it in a docker container
- [x] Readonly filesystem except project dir
- [x] Vpn for docker to protect IP.
- [ ] Stream deck button to pause sending commands to vim
- [ ] Donations to execute bash commands like npm or pip install? 🤔
