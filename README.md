# Twitch Plays Vim

Listens to Twitch. Sends to vim.

## Config

Just needs a few `.env` things

```bash
COMPOSE_BAKE=true                   # Makes docker build faster
ALLOW_CONSOLE=1                     # The neovim library hijacks stdout, so they use winston
TWITCH_CHANNEL=yourtwitchchannel    # What chat stream to listen to

# Vpn setup so nobody can write code to leak your ip: (optional)
USE_VPN=true # or false
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
- [x] Readonly filesystem except project dir
- [x] Figure out the vm thing (ended up going with docker)
- [x] Point neovim at the smaller init.lua rather than my real one?
- [x] Vpn for docker to protect IP.
- [ ] Stream deck button to pause sending commands to vim
- [ ] Donations to execute bash commands? 🤔
