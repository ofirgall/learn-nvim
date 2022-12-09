# Completion and Snippets Engines
If you are using a preconfigured configuration there is a high chance this is already configured and installed, you can skip this chapter.

## Completion Engine
nvim doesn't provide a native completion menu, we need a menu with fuzzy finding, completion, scrolling and more. \
That's what a completion engine is for, the most popular one is [nvim-cmp](https://github.com/hrsh7th/nvim-cmp). \
I advise starting with the recommended setup and dive into more configuration later.

### Sources
Part of the configuration you pass `sources` this is where the completion menu get its entries from, you can extend the `sources` of your completions with other plugins.

The default ones are presented at the readme of [nvim-cmp](https://github.com/hrsh7th/nvim-cmp). \
One of the sources you want to have is the completion engine source, I'll elaborate about that later.

Extra cool sources:
* [cmp-git](https://github.com/petertriho/cmp-git) which provides a source for all the commit hashes and integrates to GitHub and GitLab
* [cmp-jira](https://gitlab.com/msvechla/cmp-jira) provides source for tickets
* [copilot-cmp](https://github.com/zbirenbaum/copilot-cmp) integrates github copilot to nvim through nvim-cmp.
* [More can be found here](https://github.com/hrsh7th/nvim-cmp/wiki/List-of-sources)

### Formatting & Window
You can control how the menu is presented

### Binds
You can go wild on this one, I recommend sticking with the default at first and dive deeper at later stage.

---

## Snippet Engine
A snippet engine has 2 main functions, one that expands snippet formats to actual snippets and another that enables you to jump between parts of the snippet you can fill out.

There are multiple snippet engines, personally I use [nvim-snippy](https://github.com/dcampos/nvim-snippy) which requires to add [cmp-snippy](https://github.com/dcampos/cmp-snippy) as a [nvim-cmp](https://github.com/hrsh7th/nvim-cmp) source.

The snippet engine requires a snippets source too, I use a personal fork of [vim-snippets](https://github.com/honza/vim-snippets) to remove unwanted snippets.

---

# [My Completion and Snippet Engines Configuration](https://github.com/ofirgall/dotfiles/blob/master/editors/nvim/lua/plugins/autocomplete.lua)

---

[Previous Chapter](./09-ui.md) | [Next Chapter](./12-git.md)
