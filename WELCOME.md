Welcome to Twitch Plays Vim, where we all get to be a part of the worst 
possible copilot!

<- Use !v to send vim keystrokes to this vim window over here

Like this:
!v jjo"hello"<esc>:w<cr>

vim.rtorr.com is a decent vim cheatsheet

- Keystrokes are fed directly to vim, not the terminal. Shell access is disabled.
- Twitch comments are limited to 255 characters, so I guess that's the command limit too
- You need to notate keystrokes like <esc> and <cr>
- :e . is enabled within the /playground dir, so feel free to change files.
- :q will kill the whole docker container, so don't do that unless you hate fun
- This container has node and python. Ask if you want to switch :)

CHAT:
