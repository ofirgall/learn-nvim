# Copy, Paste and Visual Mode
The default behavior of vim doesn't copy to your OS clipboard, but instead copies to a `register`, which can also be the OS clipboard.

## Copy and paste with specifying registers
To yank (copy) a text, you can copy the text from `NORMAL` mode with the `y` operator combined with a `movement` ,or you can enter `visual` mode with `v` and yank the text with `y`.

A text is copied to the registers when you `change` and `delete` text too.

To paste the yanked result you can use:
* `p` - paste after the cursor
* `P` - paste before the cursor

## Visual Modes
* `v` - Normal Visual mode
* `V` - Visual Line mode, selects text by lines
* `<C-v>` - Visual Block mode, selects text by block

## Registers
To specify a destination for the copy use `"`. \
For example to copy to register `a` I'll hit these keys: `"ay<movement>"`.

Same for pasting: `"ap`.

Use `_` - as the `black hole` register, when you want to delete a text without transferring it to a register.

There are many things you can do with registers, I suggest to briefly read `:help registers`.

## Using the OS clipboard
`+` is the OS clipboard register, you can yank to it and you can paste from it.

I use these binds to use the OS clipboard without too many key presses:
```lua
map('', '<M-y>', '"+y') -- Start copying to OS clipboard, e.g: `M-yy` will copy current line to OS 
map('', '<M-Y>', '"+y$') -- Copy the rest of the line to OS clipboard like `Y` but for OS clipboard

map('n', '<M-v>', '"+p') -- paste after cursor from OS clipboard
map('n', '<M-V>', '"+P') -- paste before cursor from OS clipboard
```

## Plugins
* [nvim-pasta](https://github.com/hrsh7th/nvim-pasta) to cycle fast in my copy history after pasting instead of using the `registers`.
* [registers.nvim](https://github.com/tversteeg/registers.nvim) to see the registers before yanking from/to them.

---

[Previous Chapter](./03-movements-and-operators.md) | [Next Chapter](./05-text-objects.md)
