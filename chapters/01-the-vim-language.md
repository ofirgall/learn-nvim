# The vim Language

## Buffers, Splits/Windows and Tabs
* **Buffers** - `buffer` is an open file, which can be edited from multiple `splits`
* **Splits/Windows** - `splits` aka `windows` are the panes which you can move through
* **Tabs** - `tab` is a set of `splits`, like a `tab` in a `terminal`, people don't use it very often.

##### Binds
* `:e <file>` - will open a new file (buffer) 
* `:b <buffer>` - will switch to an already opened file (buffer)
* `:vsplit` - will open a vertical split
* `:split` - will open a horizontal split
* use `:help tab-page` to read more about tabs (they're not very necessary)

## Keybinds
Often you'll see a keybind described as something like that: `ggyG` - which copies the entire `buffer`. \
All the signs in the keybind are meant to be pressed as you `type` them. \
To execute this bind you'll need to press:
* `gg` - move to the top of the file
* `y` - start a copy
* `shift+g` - end the copy from the cursor to the end of the file

### Keybinds naming
You don't need to memorize keybinds as the letter stands for its action.
* `y` - yank
* `p` - paste

Each time where I introduce an action in this guide, I'll mark the letter I use to remember the bind.

#### Special Keys
* `<cmd>` - is `:` which starts a cmd
* `<cr>` - is `enter`
* `<Esc>` - is `Escape`
* `<C-x>` - is Ctrl+x
* `<M-x>` - is alt+x
* `<M-X>` - is alt+shift+x
* `<A-x>` - is alt+x
* `<A-X>` - is alt+shift+x
* `<leader>` - is the leader key

You can type `:help <key>` to open a `help` `split` for that key, the key can be anything, it can be `G` and it can be `<cr>`

###### Leader
vim maps most of the keyboard by default, `<leader>` acts as a prefix for custom user binds. \
Leader is remappable, the default mapping is `,` most vim users change it to `<Space>`

## Help
There's a help page for everything, start using it as soon as possible, it's like `man` just better and for `vim`.

## Modes
There are a lot of modes in vim, I'll cover the important ones. \
To exit from each mode back to normal press `Escape`. I recommend remapping it to `capslock`, you're going to press it a lot and it will be much easier to use the pinky without moving your hands.

* Normal - This is where you will be usually, you can move, copy in this mode, and much more
* Insert (`i`) - Insert text to the buffer, you want to be in this mode **only** when you're actually inserting text, you don't want to move in this mode
* Visual (`v`) - Select and copy/replace text
* Visual Line (`V`) - Select and copy/replace text by lines
* Command (`:`,`/`) - Inserting a command

---

[Previous Chapter](00-why-should-i-learn.md) | [Next Chapter](./02-basic-config.md)
