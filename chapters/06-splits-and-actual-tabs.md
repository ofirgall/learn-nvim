# Splits and Actual Tabs

## Splits aka Windows
We already covered what splits are at [Chapter 1](01-the-vim-language.md), but we didn't cover how to control them.

* `:vsplit`/`:vs` - Creates a vertical split.
* `:split` - Creates a horizontal split.
* `:q` - Close split.
* `<C-w>` + `h`/`j`/`k`/`l` - Move split to the direction of the arrow.
* `<C-w>=` - Equally resize all the splits.
* `<C-w>>` - Increase width.
* `<C-w><` - Decrease width.
* `<C-w>+` - Increase height.
* `<C-w>-` - Decrease height.

### Configure
I recommend to map a quick way to move, create and close splits. (If you are using preconfigured configuration some binds might be set already)

My mappings:
```lua
map({'n', 't'}, '<C-h>', '<C-w>h')
map({'n', 't'}, '<C-j>', '<C-w>j')
map({'n', 't'}, '<C-k>', '<C-w>k')
map({'n', 't'}, '<C-l>', '<C-w>l')

map('n', '<M-e>', '<cmd>vsplit<cr>')
map('n', '<M-o>', '<cmd>split<cr>')

map('n', '<M-q>', '<cmd>q<cr>')
```

The default direction of splits in vim are out of today's standards, to fix it add this to your config:
```lua
vim.opt.splitright = true
vim.opt.splitbelow = true
```

#### Plugins
If you are using tmux I highly recommend to use [Navigator.nvim](https://github.com/numToStr/Navigator.nvim) to move in/out of vim to/from tmux panes seamlessly.

---

## Actual Tabs
To achieve actual tabs (like in any other IDE) you need to use a `bufferline`/`tabline` plugin.

Your preconfigured configuration probably has one already but you can see the list [here](https://github.com/rockerBOO/awesome-neovim#tabline), I use [bufferline.nvim](https://github.com/akinsho/bufferline.nvim).

Make sure to map keys to quickly switch, cycle and close tabs.

My config:
```lua
-- Tabline binds
map('n', '<C-q>', function() require('bufdelete').bufdelete(0, true) end) -- shift+Quit to close current tab
map('n', 'g1', function() require('bufferline').go_to_buffer(1, true) end)
map('n', 'g2', function() require('bufferline').go_to_buffer(2, true) end)
map('n', 'g3', function() require('bufferline').go_to_buffer(3, true) end)
map('n', 'g4', function() require('bufferline').go_to_buffer(4, true) end)
map('n', 'g5', function() require('bufferline').go_to_buffer(5, true) end)
map('n', 'g6', function() require('bufferline').go_to_buffer(6, true) end)
map('n', 'g7', function() require('bufferline').go_to_buffer(7, true) end)
map('n', 'g8', function() require('bufferline').go_to_buffer(8, true) end)
map('n', 'g9', function() require('bufferline').go_to_buffer(9, true) end)
map('n', 'g0', function() require('bufferline').go_to_buffer(10, true) end)
map('n', '<M-j>', '<cmd>BufferLineCyclePrev<CR>') -- Alt+j to move to left
map('n', '<M-k>', '<cmd>BufferLineCycleNext<CR>') -- Alt+k to move to right
map('n', '<M-J>', '<cmd>BufferLineMovePrev<CR>') -- Alt+Shift+j grab to with you to left
map('n', '<M-K>', '<cmd>BufferLineMoveNext<CR>') -- Alt+Shift+k grab to with you to right
```

---

[Previous Chapter](./05-text-objects.md) | [Next Chapter](./07-vim-goodies.md)
