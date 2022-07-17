# Text Objects
Text objects are what made vim superior by any means from other editors for me.

Text objects are "movements" that only works after an operator. \
A text object consist a start and an end. \
The default and the most use ones are `inner`/`a` + `X`.

Modifiers:
* `i` - as **I**nner.
* `a` - as **A** or as I like to pronounce it "**A**outer".

For example:
* `yiw` - `yank inner word`, will yank the current word you are at
* `ci'` - `change inner '`, will change the inner text inside the next/current pair of `'` aka a string.
* `ca'` - `delete a '`, will delete the text inside and the `'` of the next/current pair of `'`.

You can do this actions for almost every character you think about, `(`/`{`/`'`/`"`. \
You can read more about this at `:help text-objects`.

## Treesitter Text Objects
[nvim-treesitter-textobjects](https://github.com/nvim-treesitter/nvim-treesitter-textobjects) is an awesome/must plugin that creates text-objects from the treesitter query, which means text-objects for actual part of your code!

For the config I use, `f` is a function, so if I to change the current content of the function I am on, I hit `cif`, `change inner function`, and you can this on other code objects.

My config (adds pair movement as well):
```lua
textobjects = {
	move = {
		enable = true,
		set_jumps = true, -- whether to set jumps in the jumplist
		goto_next_start = {
			["]m"] = "@function.outer",
			["gj"] = "@function.outer",
			["]]"] = "@class.outer",
			["]b"] = "@block.outer",
			["]a"] = "@parameter.inner",
		},
		goto_next_end = {
			["]M"] = "@function.outer",
			["gJ"] = "@function.outer",
			["]["] = "@class.outer",
			["]B"] = "@block.outer",
			["]A"] = "@parameter.inner",
		},
		goto_previous_start = {
			["[m"] = "@function.outer",
			["gk"] = "@function.outer",
			["[["] = "@class.outer",
			["[b"] = "@block.outer",
			["[a"] = "@parameter.inner",
		},
		goto_previous_end = {
			["[M"] = "@function.outer",
			["gK"] = "@function.outer",
			["[]"] = "@class.outer",
			["[B"] = "@block.outer",
			["[A"] = "@parameter.inner",
		},
	},
	select = {
		enable = true,
		lookahead = true,
		keymaps = {
			["af"] = "@function.outer",
			["if"] = "@function.inner",
			["ac"] = "@class.outer",
			["ic"] = "@class.inner",
			["ab"] = "@block.outer",
			["ib"] = "@block.inner",
			["al"] = "@loop.outer",
			["il"] = "@loop.inner",
			["a/"] = "@comment.outer",
			["i/"] = "@comment.outer", -- no inner for comment
			["aa"] = "@parameter.outer", -- parameter -> argument
			["ia"] = "@parameter.inner",
		},
	},
},
```
