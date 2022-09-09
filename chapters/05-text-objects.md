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

---

One of my favorite text object is the `paragraph` one it makes editing code feels so natural.

If you want to change the order of `boo` and `goo` you can you delete the `goo` paragraph with `dap` go back a paragraph with `[p` and paste the deleted paragraph `p`.
```python
def foo():
	result = boo()
	if result is not None:
		return result
	
	result = goo() # <--- cursor here
	if result is not None:
		return result
	
	return None
```

---

## Treesitter Text Objects
[nvim-treesitter-textobjects](https://github.com/nvim-treesitter/nvim-treesitter-textobjects) is an awesome/must plugin that creates text-objects from the treesitter query, which means text-objects for actual part of your code!

For the config I use, `f` is a function, so if I to change the current content of the function I am on, I hit `cif`, `change inner function`, and you can this on other code objects.

It change the way you think about editing code, you think with code object movement rather than think about how to move to cursor to where. \
For example, change the 3rd argument in the next function.
```python
def foo(a: int, b: Any, c: Tuple[int, Optional[str]]):
	pass # <--- cursor here
```
You can use `[m` to move up to the function signature, then `]a` 3 times (unfortunately you can't do `3]a` to do it [yet](https://github.com/nvim-treesitter/nvim-treesitter-textobjects/issues/231)), then you can press `cia` to keep the `,` but change the content of the argument or you can press `cad` to delete the whole argument.

In standard editor you would need to go the signature manually or using reverse search, hold `ctrl` and hit the arrows until you reach `c`, hold `ctrl+shift` and hitting right arrow 9 times (depends on the editor, tested on sublime), that's tedious.


It changed the way I think about editing code, now I can think with elements from the code, `go to next/prev function`, `yank inner function`, `delete a function`, `change inner argument`, rather thinking how to move to cursor that related to the code elements.

---

### Config
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

---

[Previous Chapter](./04-copy-paste-visual.md) | [Next Chapter](./06-splits-and-actual-tabs.md)
