# Code Navigation

## LSP
To make nvim "smart" you need to install a LSP server and connect it to nvim's LSP client.

There are two options to do that:
1. Using [mason.nvim](https://github.com/williamboman/mason.nvim) with [mason-lspconfig.nvim](https://github.com/williamboman/mason-lspconfig.nvim) and [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig), these 3 plugins will manage and install LSP servers, make sure you integrate it with your [preconfigured configuration](https://nvchad.github.io/config/Lsp%20stuff).
1. Using [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig) and manually maintain the LSP servers binaries (personally I do it with dotfiles), make sure you integrate it with your [preconfigured configuration](https://nvchad.github.io/config/Lsp%20stuff).

## [Telescope](https://github.com/nvim-telescope/telescope.nvim)
Now we need a tool which can utilize the great capabilities that are provided with LSP.

One of them is telescope which is a framework for search, preview and pick.

Some of the features:
* You can live-grep across the project with it, equivalent to CTRL+SHIFT+F in a "modern" IDE.
* You can find a file, equivalent to CTRL+p in a "modern" IDE.
* You can find all the definitions of a function with it (using LSP), equivalent to F12 in a "modern" IDE.
* You can find all the references/implementations/type definitions with it (using LSP).
* You can live grep a local/workspace symbols (functions), using LSP ofc.

Your preconfigured configuration probably has it installed and binded to keys already, make sure you know how to use it and configure it to your taste, it is very useful.

## LSP Goodies
* [LSP Saga](https://github.com/glepnir/lspsaga.nvim) UI for LSP "hover" and rename and code actions (hints).
* [vim-illuminate](https://github.com/RRethy/vim-illuminate) highlight the symbol your cursor is on and let you jump to next/previous reference, very useful to know what "happened" to a variable.
* [LSP Signature](https://github.com/ray-x/lsp_signature.nvim) shows the function signature automatically on function calls.
* [fidget.nvim](https://github.com/j-hui/fidget.nvim) shows the LSP server progress in the bottom right corner.
* [lsp_lines.nvim](https://git.sr.ht/~whynothugo/lsp_lines.nvim) shows the diagnostics in an intuitive way.
* [trld.nvim](https://github.com/Mofiqul/trld.nvim) shows the current line diagnostic in the top right corner of the buffer.
* [nvim-navic](https://github.com/SmiteshP/nvim-navic) shows the current context in the status/winbar line.
* [More plugins that integrate with LSP](https://github.com/rockerBOO/awesome-neovim#lsp)

---

[Previous Chapter](./08-advanced-config.md) | [Next Chapter](./10-complete-engine.md)
