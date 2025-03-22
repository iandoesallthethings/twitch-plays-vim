-- Set line numbers first, before anything else

-- Basic editor settings
vim.opt.number = true
vim.opt.relativenumber = true
vim.opt.swapfile = false
vim.opt.backup = false
vim.opt.writebackup = false
-- vim.opt.colorcolumn = "80"
vim.opt.wrap = false
vim.opt.tabstop = 2
vim.opt.shiftwidth = 2

-- Disable shell access completely
vim.opt.shell = ""
-- Disable shell filters
vim.opt.shelltemp = false
vim.opt.shellxquote = ""
-- Disable specific built-in commands
vim.g.loaded_shell = 1
vim.g.loaded_term = 1
-- Disable netrw completely
-- vim.g.loaded_netrw = 1
-- vim.g.loaded_netrwPlugin = 1

-- -- Restrict certain functions
-- vim.g.secure = 1  -- Disable autocmd, shell and write commands in .nvimrc/.exrc

-- Disable potentially dangerous commands
-- vim.cmd([[
--   command! -bang Term echoerr 'Terminal access disabled'
--   command! -bang Shell echoerr 'Shell access disabled'
  
--   " Disable shell-related key mappings
--   nnoremap ! <nop>
--   nnoremap :! <nop>
--   nnoremap K <nop>  " Prevents shell lookups

--   command! -bang Python echoerr 'Python execution disabled'
--   command! -bang Ruby echoerr 'Ruby execution disabled'
--   command! -bang Lua echoerr 'Lua execution disabled'
-- ]])

-- -- Disable ex mode
-- vim.keymap.set('n', 'Q', '<nop>', { silent = true })
-- vim.keymap.set('n', 'gQ', '<nop>', { silent = true })

-- -- Disable suspend (Ctrl-Z)
-- vim.keymap.set('n', '<C-z>', '<nop>', { silent = true })
-- vim.keymap.set('i', '<C-z>', '<nop>', { silent = true })