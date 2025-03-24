# Wtf is vim?

Vim is a text editor for programmers who want to move text around fast without taking their hands away from the keyboard. It has a ton of shortcuts to make that super easy (once you run the gauntlet to learn it all). It's hard, but worth it.

## Modes:

UX-wise, we usually don't like modes very much, but vim seems to be one of the big exceptions.

- 2 modes: Normal and Insert (and Visual, but don't sweat that if you're here rn)
- Normal is the default.
- `i` to enter insert mode and type like a normal human
- `<esc>` (the escape key) to go back to normal mode

From here, most of what you'd do in vim is organized into `motions`, `operations`, and `commands`.

## Motions

- Moving the cursor is on home row under your right hand:
- `j` is down, `k` is up
- `h` and `l` are left and right respectively
- You can type a number before a movement command to move that many times, i.e. `3j` is down 3 times

## Operations

Things you can mix with motions to change text. Things like `c`hange, `d`elete, `y`ank (i.e. copy).

If you're really just starting, focus on motions and insert if you need to get stuff done tbh. If you're trying to actively learn, I recommend skipping this panel and going straight to the `Learn Vim Progressively` tutorial in links.

## Commands

Vim commands start with `:`

- `:w` will [w]rite the file, i.e. save
- `:q` will [q]uit the editor, but this is disabled for this stream because it kills the docker container lol

## Note

For vim newbies, keep in mind that typing chains of commands into a chat window is the worst way to use vim, but that's part of what I like about this stream :3
