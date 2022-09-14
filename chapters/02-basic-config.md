# Basic Configuration
One of nvim's strengths is that it's highly configurable, you can customize everything. \
Setup your editor in a way that'll be nice for you to look at and it won't be filled with useless buttons/stuff.

I recommend to create your own configuration but it takes time and effort. \
We will talk about the advantages at the [advanced configuration chapter](https://github.com/ofirgall/learn-nvim/blob/master/chapters/08-advanced-config.md) but I recommend to use preconfigured configuration for now, unless you are a config nerd like me.

---

## Terminal Emulator Setup
nvim can be run with a GUI frontend or how it was intended to, in a terminal emulator. \
I recommend to use one of the modern cross-platform terminal emulators:

* [Alacritty](https://github.com/alacritty/alacritty) - recommended with [tmux](https://github.com/tmux/tmux)/[i3](https://github.com/i3/i3) for splits and sessions (I use Alacritty + tmux)
* [Kitty](https://github.com/kovidgoyal/kitty) - I never used it but people say it's nice
* [Wezterm](https://github.com/wez/wezterm) - Lua configured terminal, I don't like the design, especially the way cursor behaves in it, but it seems the community love it.

### Nerdfont
It's highly recommended to install a [nerdfont](https://www.nerdfonts.com/) to support icons in your terminal, many plugins utilize it. \
I use [CascadiaCode](https://www.programmingfonts.org/#cascadia-code), [JetBrainsMono](https://www.programmingfonts.org/#jetbrainsmono) is nice too.

### Keybinds limitations
Because of `ascii` terminals don't support `Ctrl+Shift+X` keybindings, [here's a great comment that explains why](https://github.com/tmux/tmux/issues/674#issuecomment-263157843). \
Some terminals allow to use a workaround, but it's not a must (I don't use Ctrl+Shift+X binds).

--- 

## How to Install nvim
I recommend to install the [latest release](https://github.com/neovim/neovim/releases), `Nvim development` is the nightly. \
You can install [nightly](https://github.com/neovim/neovim/releases/tag/nightly) which is pretty stable and doesn't break often but you don't want to bother yourself with bugs as a beginner.

---

## Plugin Tools

### [LSP](https://microsoft.github.io/language-server-protocol/)
> The idea behind the Language Server Protocol (LSP) is to standardize the protocol for how such servers and development tools communicate. This way, a single Language Server can be re-used in multiple development tools, which in turn can support multiple languages with minimal effort.

Which means nvim/sublime/vscode get the same Intellisense. \
The servers run locally on your PC and are optimized to run fast. \
nvim implements the fastest lsp client.

[Server list by language](https://microsoft.github.io/language-server-protocol/implementors/servers/) \

### [Treesitter](https://github.com/nvim-treesitter/nvim-treesitter)
> Tree-sitter is a parser generator tool and an incremental parsing library. It can build a concrete syntax tree for a source file and efficiently update the syntax tree as the source file is edited. Tree-sitter aims to be:
> * **General** enough to parse any programming language
> * **Fast** enough to parse on every keystroke in a text editor
> * **Robust** enough to provide useful results even in the presence of syntax errors
> * **Dependency-free** so that the runtime library (which is written in pure C) can be embedded in any application

Basically it provides a fast unified syntax query for different languages, this allows to build plugins that utilize the unified syntax query.

E.g: [nvim-treesitter-textobjects](https://github.com/nvim-treesitter/nvim-treesitter-textobjects) which allows to do an action on a code context such as `copy` the `function/class/argument/loop` and more, we will elaborate on that later.

---

## [Preconfigured Configurations](https://github.com/rockerBOO/awesome-neovim#preconfigured-configuration)
There are several preconfigured configurations, these are the popular ones:
* [NvChad](https://github.com/NvChad/NvChad)
* [AstroNvim](https://github.com/AstroNvim/AstroNvim)
* [LunarVim](https://github.com/LunarVim/LunarVim)

#### NvChad
Personally I skipped using a preconfigured configuration, but I highly sugggest to use it as a starting point. I didn't really try any of them but by briefly looking at the docs I strongly recommend [NvChad](https://github.com/NvChad/NvChad).

These are the basic links to get you going:
1. [Install](https://nvchad.github.io/quickstart/install)
1. [Key Mappings](https://nvchad.github.io/config/Mappings), [core/mappings.lua](https://github.com/NvChad/NvChad/blob/main/lua/core/mappings.lua)
1. [Setup LSP with Mason](https://nvchad.github.io/config/Lsp%20stuff)
1. [Setup Treesitter](https://nvchad.github.io/quickstart/post-install#install-treesitter-parsers)
1. [Custom Config Folder structure](https://nvchad.github.io/config/Walkthrough#structure)
1. [Custom Plugins](https://nvchad.github.io/config/plugins)

I recommend to learn more about NvChad later if you decide to stick with preconfigured config.

_**Learn**_ how to install plugins, I'll recommend several plugins along the way, make sure you are not lazy to install them.

I recommend to start backing up your config with some kind of dotfiles, I use [dotbot](https://github.com/anishathalye/dotbot).

---

## Recommended Plugins to Start With
* [vim-tmux-navigator](https://github.com/christoomey/vim-tmux-navigator) great plugin for tmux users.
* [auto-save.nvim](https://github.com/Pocco81/auto-save.nvim) auto save your changes.

---

## Sensible Settings
```lua
local opt = vim.opt

opt.number = true -- Enables line numbers
opt.relativenumber = true -- Enables relative line numbers
opt.autoindent = true -- Indent automatically
opt.tabstop = 4 -- Tab equals 4 spaces
opt.shiftwidth = 4 -- Tab equals 4 spaces
opt.smarttab = true -- Tab equals 4 spaces
opt.softtabstop = 4 -- Tab equals 4 spaces
opt.cursorline = true -- Enables cursor line
opt.ignorecase = true -- Ignore case when searching
opt.splitright = true -- Split to the right on vertical
opt.splitbelow = true -- Split below when horizontal
opt.swapfile = false -- Don't use swap files (I use AutoSave.nvim instead)
opt.updatetime = 100 -- mainly for trld.nvim which utilize CursorHold autocmd
opt.formatoptions:append('cro') -- continue comments when going down a line, hit C-u to remove the added comment prefix

-- Highlight on yank
vim.api.nvim_create_autocmd('TextYankPost', {
	pattern = '*',
	callback = function() vim.highlight.on_yank({timeout=350, higroup='Visual'}) end
})
```

---

[Previous Chapter](./01-the-vim-language.md) | [Next Chapter](./03-movements-and-operators.md)
