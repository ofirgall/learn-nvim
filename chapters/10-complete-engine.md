# Complete and Snippets Engines
If you are using a preconfigured configuration there is a high chance this is already configured and installed, you can skip this chapter.

## Complete Engine
nvim doesn't provide a native completion menu, we need a menu with fuzzy finding, completion, scrolling and more. \
For that a completion engine is for, the one that everybody use is [nvim-cmp](https://github.com/hrsh7th/nvim-cmp). \
I recommend to start with the recommended setup and configure it more further.

### Sources
Part of the configuration you pass `sources` this is where the complete menu get its entries from, you can extend the `sources` of your completions with other plugins.

The default ones are presented at the readme of [nvim-cmp](https://github.com/hrsh7th/nvim-cmp). \
One of the sources you want to have is the complete engine source, I'll elaborate about that later.

Extra cool sources:
* [cmp-git](https://github.com/petertriho/cmp-git) which provides a source for all the commit hashes and integrates to github and gitlab
* [cmp-jira](https://gitlab.com/msvechla/cmp-jira) provides source for tickets
* [copilot-cmp](https://github.com/zbirenbaum/copilot-cmp) integrates github copilot to nvim through nvim-cmp.
* [More can be found here](https://github.com/rockerBOO/awesome-neovim#completion)

### Formatting & Window
You can control how the menu is presented

### Binds
You can go wild on this one, I recommend to stick with the default ones at first and think about that later.

---

## Snippet Engine
Snippet engine has 2 parts, the part that translate snippet formats to actual snippet and the one that let you jump between the part of the snippet you need to complete.

There are multiple snippet engines personally I use [nvim-snippy](https://github.com/dcampos/nvim-snippy) which requires to add [cmp-snippy](https://github.com/dcampos/cmp-snippy) as a [nvim-cmp](https://github.com/hrsh7th/nvim-cmp) source.

The snippet engine requires a snippets source too, I use a personal fork of [vim-snippets](https://github.com/honza/vim-snippets) to remove unwanted snippets.

---

# [My Complete and Snippet Engines Configuration](https://github.com/ofirgall/dotfiles/blob/master/editors/nvim/lua/plugins/autocomplete.lua)

---

[Previous Chapter](./09-code-navigation.md) | [Next Chapter](./11-git.md)
