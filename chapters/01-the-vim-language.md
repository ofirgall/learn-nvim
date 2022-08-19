# The vim Language

## Buffers Splits/Windows and Tabs
* **Buffers** - `buffer` is an open file, which can be edited from multiple `splits`
* **Splits/Windows** - `splits` aka `windows` is the panes which you can move through
* **Tabs** - `tab` is a set of `splits`, like a `tab` in a `terminal`, people don't use it very often.

##### Binds
* `:e <file>` - will open new file (buffer) 
* `:b <buffer>` - will switch to an already opened file (buffer)
* `:vsplit` - will open vertical split
* `:split` - will open horizontal split
* use `:help tab-page` to understand tabs more they aren't very necessary

## Keybinds
Often you will see a keybind described as something like that `ggyG` which copy the all `buffer`. \
All the signs in the keybind are meant to be pressed as you `type` them. \
To execute this bind you need to press:
* `gg` - move to the top of the file
* `y` - start a copy
* `shift+g` - end the copy from the cursor to the end of the file

### Keybinds naming
You don't need to remember keybinds the key is standfor the action.
* `y` - yank
* `p` - paste

Each time I'll introduce an action in this guide I'll mark the letter I use to remember the bind.

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

You can type `:help <key>` to open `help` `split` for that key, the key can be anything, can be `G` and can be `<cr>`

###### Leader
Leader is remapable, the default map for it is `,` usually people change it to `<Space>` \
Because vim maps almost all the keyboard by defualt, it used to bind plugins and don't override default keys.

## Help
There is an help page for everything start use it as a beginner its like `man` just better and for `vim`.

## Modes
There are alot of modes in vim I'll cover the important ones. \
To exit from each mode back to normal press `Escape` I recommend to remap it to capslock, you gonna press it alot and it will be much easier to use the pinky without moving your hands

* Normal - This is where you will be usually, you can move in the code in this mode, you can copy in this mode, and much more
* Insert (i) - Insert text to the buffer, you want to be in this mode **only** when you actually inserting text, you don't want to move in this mode
* Visual (v) - Select and copy/replace text
* Visual Line (V) - Select and copy/replace text by lines
* Command (:,/) - Inserting a command

---

[Previous Chapter](00-why-should-i-learn.md) | [Next Chapter](./02-basic-config.md)
