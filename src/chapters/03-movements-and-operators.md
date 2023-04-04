# Movements and Operators
vim is built on actions that are mostly built on 2 types, an operator and a movement.

## Basic binds
* `i` - enter **I**nsert mode
* `a` - enter insert mode **A**fter the cursor
* `I` - enter **I**nsert mode at the beginning of the line
* `A` - enter insert mode at the end of the line (same as `a` but for the entire line)
* `o` - insert new line below
* `O` - insert new line above
* `u` - **U**ndo, check out [undotree](https://github.com/mbbill/undotree)
* `Ctrl-r` - **R**edo
* `zz` - Recenter the screen, there are more binds for screen actions but this is the most important one

## Basic movements
#### Arrows
* `h` - left
* `j` - down
* `k` - up
* `l` - right

It takes some time getting used to it but it's worth it, I recommend disabling the arrow keys for movement and try the game `hjkl` in [vim-be-good](https://github.com/ThePrimeagen/vim-be-good).

```lua
-- Disable arrows movement
map('', '<Up>', '<Nop>')
map('', '<Down>', '<Nop>')
map('', '<Left>', '<Nop>')
map('', '<Right>', '<Nop>')
```

### Multiply Movement
You can multiply every movement by entering a number before the movement. \
For example: `3j` will jump 3 lines down

#### Words
* `w` - jump **W**ord forward
* `b` - jump word **B**ackwards
* `e` - jump forward to the **E**nd of the word
* `ge` - jump to the **E**nd of the previous word

Capital will change the behavior from `word` to `WORD`, read `:help word` and `:help WORD` to understand the differences

#### Generics
* `0` - go to the beginning of the line
* `$` - go to the end of the line
* `<C-u>` - go **U**p half a page
* `<C-d>` - go **D**own half a page
* `%` - jump to the pair of the bracket/quote/ifdef your cursor on
* `<C-o>` - jump to the previous position you jumped from (you can do it multiple times)
* `<C-i>` - jump to the next position you jumped to (you can do it multiple times)

#### Pair Movments
The standard way to jump forward to something is `]` and backward is `[`.

Some examples
* `]m` / `[m` - Jump to **M**ethod
* `]]` / `[[` - Jump to section
* `}` / `{` - Jump to paragraph
* `]c` / `[c` - Jump to diff (**C**hange)

I suggest to install [vim-unimpaired](https://github.com/tpope/vim-unimpaired) which adds more pair movements.

---

## Searching
### Search across the file
These are **not** movements!
* `/` - to start a forward search
* `?` - to start a backward search
* `n` - go to the **N**ext occurrence
* `N` - go to the previous occurrence
* `*` - forward search the current word under cursor
* `#` - backward search the current word under cursor

I recommend to remap `n` and `N` to `nzz` and `Nzz`, `zz` centers the screen by the line you are on, these binds will go to the next/prev occurrence and center the screen.
```lua
map('n', 'n', 'nzz') -- Auto recenter after n
map('n', 'N', 'Nzz') -- Auto recenter after N
```

If you enabled `opt.ignorecase` you can add `\C` at the end of your search to re-enable case.

### Quick search
These are movements! You will need to enter a `char` after the quick search key.
* `f` - jump to the next `char`, I remember it as **F**ind
* `F` - jump to the previous `char`, I remember it as **F**ind
* `t` - jump **T**ill the next `char` (1 char before the occurrence)
* `T` - jump **T**ill the prev `char` (1 char after the occurrence)

These movements are very useful to manipulate text in the same line. This is the reason I enable `opt.wrap` in vim.

I highly recommend installing [clever-f.vim](https://github.com/rhysd/clever-f.vim) it will help you get used to these awesome movements fast.

---

## Operators
The main ones
* `y` - **Y**ank (copy)
* `d` - **D**elete
* `c` - **C**hange, delete the text and enters insert mode
* `<` - remove indentation (left)
* `>` - add indentation (right)
* `=` - auto indent
* `gc` - Comment/Uncomment, done with [Comment.nvim](https://github.com/numToStr/Comment.nvim)

Capital (shift) will apply the operation starting from the cursor to the end of the line, e.g: `D` deletes the line from the cursor to the end of the line. \
Repeating the operator key will apply the operation for the entire line, e.g: `yy` yanks the entire current line.

---

## Action
Action is an `operator + movement` \
For example: 
* `y3k` - yank 2 lines above the cursor, including the current line.
* `ct,` - change the text until `,`, very useful to change function arguments and more.

This is why you **must** have `relativenumber` on, it will make your life much easier.

### "Special" actions
* Hit the operator twice to activate it on the current line. `yy` will yank the entire line you are on.
* `Shift+operator` to activate the operator from the cursor the end of the line. `C` will change the line from the cursor to the end.

### One char actions
Actions without movement
* `x` - delete the char you are on.
* `X` - delete 1 char before the cursor.
* `r` - **R**eplace 1 char

---

## How should I remember all those binds?
Think of a key sequence as an English sentence.

For example: when I'm using `y3j`/`y3<Enter>` I'll think of it as `yank 3 down`, in my mind I "speak" with the editor rather than remembering which keys to press.

---

There are many more movements and operators but these are the ones I feel is the most important, it takes some time getting used to work with this method, but once you understand it, it'll stick well.
