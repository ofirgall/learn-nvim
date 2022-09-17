# Text Objects
Text objects are what made vim superior from other editors for me by any means.

Text objects are "movements" that only work after an operator. \
A text object consists of a start and an end. \
The default and the most used ones are `inner`/`a` + `X`.

Modifiers:
* `i` - as **I**nner.
* `a` - as **A**.

For example:
* `yiw` - `yank inner word`, will yank the current word you are at.
* `caw` - `change a word`, will change the current word you are at.
* `ci'` - `change inner '`, will change the inner text inside the next/current pair of `'` aka a string.
* `ca'` - `delete a '`, will delete the text inside and the `'` of the next/current pair of `'`.

You can do these actions for almost every character you can think about, `(`/`{`/`'`/`"`. \
You can read more about this at `:help text-objects`.

---

One of my favorite text objects is the `paragraph`, it makes editing code feel so natural.

If you want to change the order of `boo` and `goo`, you can you delete the `goo` paragraph with `dap`, go back a paragraph with `{` and paste the deleted paragraph with `p`.
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
[nvim-treesitter-textobjects](https://github.com/nvim-treesitter/nvim-treesitter-textobjects) is an awesome/must have plugin that creates text-objects from the treesitter query, which means text-objects for an actual part of your code!

For the config I use, `f` is a function, so if I want to change the current content of the function I am on, I hit `cif`, `change inner function`, and you can do this on other code objects.

It changes the way you think about editing code, with code object movements rather than how to move the cursor and to where. \
For example, change the 3rd argument in the next function.
```python
def foo(a: int, b: Any, c: Tuple[int, Optional[str]]):
	pass # <--- cursor here
```
You can use `[m` to move up to the function signature, then `]a` 3 times (unfortunately you can't do `3]a` to do it [yet](https://github.com/nvim-treesitter/nvim-treesitter-textobjects/issues/231)), then you can press `cia` to keep the `,` but change the content of the argument or you can press `cad` to delete the entire argument.

In a standard editor you would need to go the signature manually or using reverse search, hold `ctrl` and hit the arrows until you reach `c`, hold `ctrl+shift` and hitting right arrow 9 times (depends on the editor, tested on sublime), that's tedious.


It changed the way I think about editing code, it allows me to think with elements from the code, `go to next/prev function`, `yank inner function`, `delete a function`, `change inner argument`, rather thinking how to move the cursor which relates to the code elements.

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
