# Copy, Paste and Visual Mode
The default behavior of vim doesn't copy to your OS clipboard, but instead copies to a `register`, which can also be the OS clipboard.

## Copy and paste with specifying registers
To yank (copy) a text, you can copy the text from `NORMAL` mode with the `y` operator combined with a `movement` ,or you can enter `visual` mode with `v` and yank the text with `y`.

A text is copied to the registers when you `change` and `delete` text too.

To paste the yanked result you can use:
* `p` - paste after the cursor
* `P` - paste before the cursor
* `<M-p> (Alt+p)` - paste in insert mode

## Visual Modes
* `v` - Normal Visual mode
* `V` - Visual Line mode, selects text by lines
* `<C-v>` - Visual Block mode, selects text by block

You can replace text by pasting new text after selecting the text to replace with visual, this action copies the replaced text to a register too.

## Registers
To specify a destination for the copy use `"`. \
For example to copy to register `a` I'll hit these keys: `"ay<movement>"`.

Same for pasting: `"ap`.

Use `_` - as the `black hole` register, when you want to delete a text without transferring it to a register.

There are many things you can do with registers, I suggest to briefly read `:help registers`.

### Binds to delete/change/replace without yanking.
```lua
map('x', '<leader>p', '"_dP') -- replace text without changing the copy register

map('n', '<leader>d', '"_d') -- delete without yanking, e.g <leader>dd deletes the current line without yanking it
map('n', '<leader>D', '"_D') -- delete without yanking

map('n', '<leader>c', '"_c') -- change without yanking
map('n', '<leader>C', '"_C') -- change without yanking
```

## Using the OS clipboard
`+` is the OS clipboard register, you can yank to it and you can paste from it.

I use these binds to use the OS clipboard without too many key presses:
```lua
map('', '<leader>y', '"+y') -- Start copy to os clipboard E.g: <leader>yy will copy current line to os
map('', '<leader>Y', '"+y$') -- Copy rest of the line to os clipboard like "Y" but for os clipboard

map('n', '<leader>p', '"+p') -- paste after cursor from os clipboard
map('n', '<leader>P', '"+P') -- paste before cursor from os clipboard
```

## Plugins
### Put/Yank Improvements
* [yanky.nvim](https://github.com/gbprod/yanky.nvim) to cycle fast in my copy history after pasting instead of using the `registers`.
* [peekup](https://github.com/gennaro-tedesco/nvim-peekup) - dynamically interact with vim registers.
* [registers.nvim](https://github.com/tversteeg/registers.nvim) to see the registers before yanking from/to them.

---

[Previous Chapter](./03-movements-and-operators.md) | [Next Chapter](./05-text-objects.md)
