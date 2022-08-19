# Basic Configuration
One of the strengths of nvim is that its highly configurable, you can customize everything. \
Setup your editor that it will be nice for you to look at and it won't be filled with useless buttons/stuff.

I recommend to create your own configuration but it takes time and effort. \
We will talk about the advantages at the [advanced configuration chapter](TODO) but I recommend to use preconfigured configuration for now, unless you are a config nerd like me.

--- 

## How to Install nvim
I recommend to install the [latest release](https://github.com/neovim/neovim/releases), `Nvim development` is the nightly. \
You can install [nightly](https://github.com/neovim/neovim/releases/tag/nightly) which is pretty stable and doesn't brake often but you don't want to bother yourself with bugs as a beginner.

---

## Plugin Tools

### [LSP](https://microsoft.github.io/language-server-protocol/)
> The idea behind the Language Server Protocol (LSP) is to standardize the protocol for how such servers and development tools communicate. This way, a single Language Server can be re-used in multiple development tools, which in turn can support multiple languages with minimal effort.

Which means nvim/sublime/vscode gets the same intellisense. \
The servers runs locally on your pc and optimized to run fast. \
nvim implements the fastest lsp client.

[Server list by language](https://microsoft.github.io/language-server-protocol/implementors/servers/) \
Make sure you install the LSP server for your language.

### [Treesitter](https://github.com/nvim-treesitter/nvim-treesitter)
> Tree-sitter is a parser generator tool and an incremental parsing library. It can build a concrete syntax tree for a source file and efficiently update the syntax tree as the source file is edited. Tree-sitter aims to be:
> * **General** enough to parse any programming language
> * **Fast** enough to parse on every keystroke in a text editor
> * **Robust** enough to provide useful results even in the presence of syntax errors
> * **Dependency-free** so that the runtime library (which is written in pure C) can be embedded in any application

Basically it provides a fast unified syntax query for different languages, this allow to build plugins that utilize the unified syntax query.

E.g: [nvim-treesitter-textobjects](https://github.com/nvim-treesitter/nvim-treesitter-textobjects) which allows to do an action on a code context such as `copy` the `function/class/argument/loop` and more.

Make sure you install the tree-sitter parser for your language.

---


## [Preconfigured Configurations](https://github.com/rockerBOO/awesome-neovim#preconfigured-configuration)
There are several preconfigured configurations those are the popular ones:
* [NvChad](https://github.com/NvChad/NvChad)
* [AstroNvim](https://github.com/AstroNvim/AstroNvim)
* [LunarVim](https://github.com/LunarVim/LunarVim)

#### NvChad
In part of my learning I skipped the preconfigured stage, I didn't really try any of them but by looking briefly in the docs I strongly recommend [NvChad](https://github.com/NvChad/NvChad).

This is the basic links for you get start going:
1. [Install](https://nvchad.github.io/quickstart/install)
1. [Key Mappings](https://nvchad.github.io/config/Mappings) [core/mappings.lua](https://github.com/NvChad/NvChad/blob/main/lua/core/mappings.lua)
1. [Custom Config](https://nvchad.github.io/config/Custom%20config)
1. [Setup LSP](https://nvchad.github.io/config/Lsp%20stuff)
1. [Setup Treesitter](https://nvchad.github.io/quickstart/post-install#install-treesitter-parsers)

I recommend to learn more about NvChad later if you decide to stick with preconfigured config.

_**Learn**_ how to install plugins, I will recommend few plugins along the way, make sure you are not lazy to install them.

I recommend to start backup your config with some kind of dotfiles, I use [dotbot](https://github.com/anishathalye/dotbot).

---

## Sensibile Settings
TODO
