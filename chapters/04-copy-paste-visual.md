# Copy, Paste and Visual Mode
The default behavior of vim isn't to copy to your OS clipboard, instead it copies to a `register`, which can be the OS clipboard.

## Copy and paste with specifying registers
To yank (copy) a text you can copy the text from `NORMAL` mode with the `y` operator combined with a `movement` or you can enter `visual` mode with `v` and yank the text with `y`.

A text is being copied to the registers when you `change` and `delete` text too.

To paste the yanked result you can use:
* `p` - paste after the cursor
* `P` - paste before the cursor

## Visual Modes
* `v` - Normal Visual mode
* `V` - Visual Line mode, selects text by lines
* `<C-v>` - Visual Block mode, selects text by block

## Registers
To specify a destination for the copy use `"`. \
For example to copy to register `a` I'll hit those keys: `"ay<movement>"`.

To paste its the same: `"ap`.

Use `_` - The `black hole` register, when you want to delete a text without being transfer to a register.

There are many things you can do with registers I suggest to briefly read `:help registers`.

## Using the OS clipboard
`+` is the OS clipboard register, you can paste from it, you can yank to it.

I use those binds to use the OS clipboard without too many key presses:
```lua
map('', '<M-y>', '"+y') -- Start copy to os clipboard E.g: M-yy will copy current line to os
map('', '<M-Y>', '"+y$') -- Copy rest of the line to os clipboard like "Y" but for os clipboard

map('n', '<M-v>', '"+p') -- paste from os clipboard
map('n', '<M-V>', '"+P') -- paste from os clipboard
```

## Plugins
* [nvim-pasta](https://github.com/hrsh7th/nvim-pasta) to cycle fast in my copy history after pasting instead of using the `registers`.
* [registers.nvim](https://github.com/tversteeg/registers.nvim) to see the registers before yanking from/to them.
