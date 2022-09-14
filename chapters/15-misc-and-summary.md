# Misc
In this chapter I'll mention some misc plugins that I recommend to adapt.

## Basic IDE Functionalities
nvim doesn't provide all the expected functionalities of an IDE, plugins are here to close that gap.

### Session Manager
I use [vim-session](https://github.com/xolox/vim-session), I don't remember why I like this one especially but it works for me.
[Other Session Manager's](https://github.com/rockerBOO/awesome-neovim#session)

### [Comment](https://github.com/numToStr/Comment.nvim)
Adds a comment operation

### [Last Place](https://github.com/ethanholz/nvim-lastplace)
Remembers the last place you edited a buffer.

### [Guess Indent](https://github.com/NMAC427/guess-indent.nvim)
Guess the indent of the file and override the indent settings.

### [Auto Pairs](https://github.com/windwp/nvim-autopairs)
Adds closures for your pairs, for example when you type `(` it make it `()` and put the cursor in the middle.

### [Auto Save](https://github.com/Pocco81/auto-save.nvim)
Auto saves the file when a text has been edited, don't worry about losing your data.

### [Trailing whitespace](https://github.com/ntpeters/vim-better-whitespace)
Be a good programmer and don't leave junk for git.

### [Multi cursor](https://github.com/mg979/vim-visual-multi)
If you are already good with multi cursor, take that skill with you to nvim, if you don't consider to use macros instead.

### [Terminal in nvim](https://github.com/akinsho/toggleterm.nvim)
Enables an integrated terminal inside nvim.

### [pasta](https://github.com/hrsh7th/nvim-pasta)
Fix's the issues with vanilla paste of nvim.

## Extras

### [Surround](https://github.com/kylechui/nvim-surround)
Surround parts of your code with `[]`/`()`/`{}`, quickly

### [Undotree](https://github.com/mbbill/undotree)
Visualize your undo branches, never lose and redo/undo history again!

### [Unimpaired](https://github.com/tpope/vim-unimpaired)
Add pair mappings (`][`) that fills natural.

### [vim-repeat](https://github.com/tpope/vim-repeat)
Extends dot-repeat action.

### [Todo Comments](https://github.com/folke/todo-comments.nvim)
Highlight `TODO` comments, populate quickfix list with all the todo comments in a workspace

### [Debug print](https://github.com/andrewferrier/debugprint.nvim)
Add debug prints for variables quickly.

### [leap.nvim](https://github.com/ggandor/leap.nvim)
Add leap motion to nvim, like vimium, EasyMotion, hop and such. \
If you liked [clever-f](https://github.com/rhysd/clever-f.vim) you will love [flit.nvim](https://github.com/ggandor/flit.nvim)

### [vim-tmux-navigator](https://github.com/christoomey/vim-tmux-navigator)
Make pane switching from/to nvim seamless, if you are using tmux its a must!

### [suda.vim](https://github.com/lambdalisue/suda.vim)
Write/read to/from files that requires sudo without executing nvim as sudo.

### [impatient.nvim](https://github.com/lewis6991/impatient.nvim)
Improves startup time

### Man pager
Consider make nvim your man pager, its so awesome to control man pages as you control your editor. \
Add this to your .shellrc:
```bashrc
# nvim as man viewer
export MANPAGER='nvim +Man! .'
export MANWIDTH=999
```

### More
There are many many more plugins for neovim, you can check out [awesome-neovim](https://github.com/rockerBOO/awesome-neovim), and you can also my list - [packer.lua](https://github.com/ofirgall/dotfiles/blob/master/editors/nvim/lua/plugins/packer.lua)

---

# Summary
Thanks for reading! I hope this guide helped you learn Neovim. \
If you found mistakes make sure to leave feedback at the [issues section](https://github.com/ofirgall/learn-nvim/issues) \
If you liked the guide consider to leave a `star`.

To keep up with new plugins and updates I recommend to:
* Watch [awesome-neovim](https://github.com/rockerBOO/awesome-neovim) to get notified for new PR's (plugins)
* Subscribe to [/r/neovim](https://www.reddit.com/r/neovim/)
* Keep an eye on [This week in Neovim](https://this-week-in-neovim.org/)

---

[Previous Chapter](./14-ui.md)
