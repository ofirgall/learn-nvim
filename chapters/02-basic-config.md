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

#### Options as Alt in macOS
To be able to use Alt binds in your terminal you need to configure your terminal emulator to do so.
* [For Kitty](https://sw.kovidgoyal.net/kitty/conf/#opt-kitty.macos_option_as_alt)
* [For Alacritty](https://github.com/alacritty/alacritty/issues/62)

--- 

## How to Install nvim
I recommend to install the [latest release](https://github.com/neovim/neovim/releases), `Nvim development` is the nightly. \
You can install [nightly](https://github.com/neovim/neovim/releases/tag/nightly) which is pretty stable and doesn't break often but you don't want to bother yourself with bugs as a beginner.

---

## [Preconfigured Configurations](https://github.com/rockerBOO/awesome-neovim#preconfigured-configuration)
There are several preconfigured configurations, these are the popular ones:
* [LunarVim](https://github.com/LunarVim/LunarVim)
* [AstroNvim](https://github.com/AstroNvim/AstroNvim)
* [NvChad](https://github.com/NvChad/NvChad)

#### LunarVim
Personally I skipped using a preconfigured configuration, but I highly suggest to use it as a starting point. [LunarVim](https://github.com/LunarVim/LunarVim) is the easiest to start with, [Installation link](https://www.lunarvim.org/01-installing.html).

Make sure you read and edit the default configuration to your taste.

---

## How to Install Plugins
I'll recommend several plugins along the way, make sure you are not lazy to install them.

#### How to download a plugin
nvim plugins are git repositories, a package manager downloads and updates them, [packer](https://github.com/wbthomason/packer.nvim) is the standard one and it's already installed in LunarVim.

In LunarVim you will find:
```lua
Additional Plugins
lvim.plugins = {
    {"folke/tokyonight.nvim"},
    {
      "folke/trouble.nvim",
      cmd = "TroubleToggle",
    },
}
```

`lvim.plugins` is passed to [packer](https://github.com/wbthomason/packer.nvim), `folke/tokyonight.nvim` is a short for [github.com/folke/tokyonight.nvim](https://github.com/folke/tokyonight.nvim).

Useful Packer Commands:
* `:PackerInstall`
* `:PackerStatus`
* `:PackerUpdate`

_**Note**_: LunarVim runs packer commands for you.

#### How to configure a plugin
Usually a plugin will provide a `setup` function which configures the plugin's behavior, most plugins won't activate if the setup function isn't called.

Usually the `setup` function receives a `table`, most plugins use the override standard - the keys in the table you pass will override the default, other keys keep their default value. \
The defaults are usually in the plugin `README` and in the `:help <plugin>`

_**Note**_: I recommend to start backing up your config with some kind of dotfiles, I use [dotbot](https://github.com/anishathalye/dotbot).

#### Recommended Plugins to Start With
* Make sure you pick a [colorscheme](https://github.com/rockerBOO/awesome-neovim#colorscheme) you like or create your own like I [did](https://github.com/ofirgall/ofirkai.nvim).
* [auto-session](https://github.com/rmagatti/auto-session) - Auto save your session, so you can jump back to your session after exiting/restarting nvim.
* [vim-tmux-navigator](https://github.com/christoomey/vim-tmux-navigator) - great plugin for tmux users.
* [Comment.nvim](https://github.com/numToStr/Comment.nvim) - Adds comment operation (included in LunarVim's [core plugins](https://www.lunarvim.org/plugins/01-core-plugins-list.html)).
* [lsp_signature.nvim](https://github.com/ray-x/lsp_signature.nvim) - Show function signature when you type.

##### [auto-save.nvim](https://github.com/Pocco81/auto-save.nvim) 
I hated using autosave in other text editors, but because vim has modes it knows exactly when a text was changed. \
On `InsertLeave` which is triggered when you leave Insert mode, and on `TextChanged` which is triggered when text was changed in normal mode.

Autosave + autoformat = annoying behavior. Make sure you disable auto format, I wrote a [simple plugin](https://github.com/ofirgall/format-on-leave.nvim) to format when I switch buffers.

 How to disable autoformat in LunarVim:
```lua
lvim.format_on_save = false
```

Autosave + live config refresh = annoying behavior. Make sure you disable autosave in your config if you like live config refresh.\
An example for how to do it in LunarVim:

```lua
local user_config_file = require("lvim.config"):get_user_config_path()
require("auto-save").setup {
  enabled = true,

  condition = function(buf)
    local fn = vim.fn
    local utils = require("auto-save.utils.data")

    if vim.api.nvim_buf_get_name(buf) == user_config_file then
      return false
    end

    if fn.getbufvar(buf, "&modifiable") == 1 and
        utils.not_in(fn.getbufvar(buf, "&filetype"), {}) then
      return true -- met condition(s), can save
    end
    return false -- can't save
  end,
}
```

---

## Options
Options control the behavior of nvim, they can be set to `boolean`, `number` or `string`. \
To set an option type `:set <option>`, to see the current value of an option use `:set <option>?`. \
boolean options are enabled by `:set <option>` and disabled by `:set no<option>`. \
E.g: `:set relativenumber` enables `relativenumber` and `:set norelativenumber` disables it.

Every option has a help tag for it, for example `:h relativenumber` \
The options are listed in `:h option-list`.

In nvim you can access the options by `vim.opt`

### Sensible Options
```lua
local opt = vim.opt

opt.number = true -- Enables line numbers
opt.relativenumber = true -- Enables relative line numbers
opt.autoindent = true -- Indent automatically
opt.cursorline = true -- Enables cursor line
opt.ignorecase = true -- Ignore case when searching
opt.splitright = true -- Split to the right on vertical
opt.splitbelow = true -- Split below when horizontal
opt.swapfile = false -- Don't use swap files (I use auto-save.nvim instead)
opt.updatetime = 100 -- mainly for trld.nvim which utilize CursorHold autocmd
opt.formatoptions:append('cro') -- continue comments when going down a line, hit C-u to remove the added comment prefix
```

---

## Key mapping
Key map can be set to specific modes. \
The important ones:
* `n` - Normal mode
* `i` - Insert mode
* `x` - Visual & Select mode
* `v` - Visual mode
* `:h map-commands` for the full mode list

To set a keymap you should use `vim.keymap.set` or even better a `map` function with default value for `opts`.
```lua
local function map(mode, lhs, rhs, opts)
	opts = opts or { silent = true }
	vim.keymap.set(mode, lhs, rhs, opts)
end
```
* `mode` - mode for which the keymap is added to, can be a single mode `'n'`, table of modes `{'n', 'x'}`, or empty `''` for all modes.
* `lhs` - The key you need to press to activate the key map
* `rhs` - Can be a lua function to call or a string to let vim "type", for example `nzz` executes `n` and then `zz` which are binded to `next` and `recenter`.
* `opts` - Table of options for the keymap, read more at `:h map-arguments`

---

## Autocommands
> An autocommand is a command that is executed automatically in response to some
event, such as a file being read or written or a buffer change.

For example a good autocommand to highlight the text that was yanked.
```lua
-- Highlight on yank
vim.api.nvim_create_autocmd('TextYankPost', {
	pattern = '*',
	callback = function() vim.highlight.on_yank({timeout=350, higroup='Visual'}) end
})
```

Plugins can add custom autocommands too! \
For all the builtin autocmds see `:h autocmd-list`.

Read `:h nvim_create_autocmd` for full explanation.

---

## Shell Setup
Don't forget to set nvim as your default terminal editor like so:
```
export EDITOR='nvim'
```

---

## Plugin Tools
The preconfigured configuration handles the installation of LSP and Treesitter, so you don't need to worry about handling it, but it's recommended to familiarize yourself with both of these tools to understand how other plugins utilize them.

### [LSP](https://microsoft.github.io/language-server-protocol/)
> The idea behind the Language Server Protocol (LSP) is to standardize the protocol for how such servers and development tools communicate. This way, a single Language Server can be re-used in multiple development tools, which in turn can support multiple languages with minimal effort.

Which means nvim/sublime/vscode get the same Intellisense. \
The servers run locally on your PC and are optimized to run fast. \
nvim implements the fastest lsp client.

[Server list by language](https://microsoft.github.io/language-server-protocol/implementors/servers/)

### [Treesitter](https://github.com/nvim-treesitter/nvim-treesitter)
> Tree-sitter is a parser generator tool and an incremental parsing library. It can build a concrete syntax tree for a source file and efficiently update the syntax tree as the source file is edited. Tree-sitter aims to be:
> * **General** enough to parse any programming language
> * **Fast** enough to parse on every keystroke in a text editor
> * **Robust** enough to provide useful results even in the presence of syntax errors
> * **Dependency-free** so that the runtime library (which is written in pure C) can be embedded in any application

Basically it provides a fast unified syntax query for different languages, this allows to build plugins that utilize the unified syntax query.

E.g: [nvim-treesitter-textobjects](https://github.com/nvim-treesitter/nvim-treesitter-textobjects) which allows to do an action on a code context such as `copy` the `function/class/argument/loop` and more, we will elaborate on that later.

---

[Previous Chapter](./01-the-vim-language.md) | [Next Chapter](./03-movements-and-operators.md)
