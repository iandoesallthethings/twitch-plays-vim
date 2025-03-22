# Twitch Plays Vim

Listens to twitch. Sends to vim.

```bash
# Build
docker build -t twitch-vim .
# Run
docker run -it -v $(pwd)/vim-playground:/home/vimuser/playground twitch-vim

# Attach
docker attach container_name
# or
docker exec -it container_name tmux attach

```

## TODO

- [x] Look into restricted mode (-z) Looks like it's removed.
- [ ] Readonly filesystem except project dir
- [ ] Use a porable version of neovim?
- [ ] Figure out the vm thing
- [ ] Point neovim at the smaller init.lua rather than my real one?
