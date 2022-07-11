# Movements and Operators
vim is actions are mostly built from 2 types, a operator and an movement.

## Basic binds
* `i` - enter **I**nsert mode
* `a` - enter insert mode **A**fter the cursor
* `I` - enter **I**nsert mode in the beginning of the line
* `A` - enter insert mode in the end of the line (same as a but for the whole line)
* `o` - insert new line below
* `O` - insert new line above
* `u` - **U**ndo, check out [undotree](https://github.com/mbbill/undotree)
* `r` - **R**edo


## Basic movements
#### Arrows
* `h` - left
* `j` - down
* `h` - up
* `l` - right

It get some time to get used to it but it worth it, I recommend to disable the arrow keys for movement and try the game `hjkl` in [vim-be-good](https://github.com/ThePrimeagen/vim-be-good).

### Multiply Movement
You can multiply every movement by entering a number before the movement. \
For example: `3j` will jump 3 lines done

#### Words
Capital will change the behavior from `word` to `WORD`, read the `help` page for both of them to understand better.

* `w` - jump word **F**orward
* `b` - jump word **B**ackwards
* `e` - jump forward to the **E**nd of the word
* `ge` - jump backwards to the **E**nd of the word

#### Generic
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
* `]m`/`[m` - Jump to **M**ethod
* `]]`/`[[` - Jump to section
* `}`/`{` - Jump to paragraph
* `]c`/`[c` - Jump to diff (**C**hange)

I suggest to install [vim-unimpaired](https://github.com/tpope/vim-unimpaired) which adds more pair movements.

---

## Searching
### Search across the file
Those are **not** movements!
* `/` - to start a search forwards
* `?` - to start a search backwards
* `n` - go to the **N**ext occurrence
* `N` - go to the previous occurrence
* `*` - search the word under the cursor forwards
* `#` - search the word under the cursor backwards

I recommend to remap `n` and `N` to `nzz` and `Nzz`, `zz` centers the screen by the line you are own, those binds will go to the next/prev occurrence and center the screen.
```lua
local map = vim.keymap.set
map('n', 'n', 'nzz') -- Auto recenter after n
map('n', 'N', 'Nzz') -- Auto recenter after N
```

### Quick search
Those are movements! You will need to enter a `char` after the quick search key.
* `f` - jump to the next `char`, I remember it as **F**ind
* `F` - jump to the previous `char`, I remember it as **F**ind
* `t` - jump to **T**ill the next `char` (1 char before the occurrence)
* `T` - jump to **T**ill the prev `char` (1 char after the occurrence)

Those movements are very useful to manipulate text in the same line. This is the reason I used `wrapped lines` in vim.

---

## Operators
The main ones
* `y` - **Y**ank (copy)
* `d` - **D**elete
* `c` - **C**hange, delete the text and enters insert mode

---

## Action
Action is a `operator + movement` \
For example: 
* `y3k` - yank the 2 lines above the cursor and the line of the cursor.
* `ct,` - change the text until `,`, very useful to change function arguments and more.

This is why you **must** have `relativenumber` on, it will make your life very easy.

### "Special" actions
* Hit the operator twice to activate it on the current line. `yy` will yank the entire line you are on.
* Shift+operator to activate the operator from the cursor the end of the line. `C` will change the line from the cursor to the end.

### One char actions
Actions without movement
* `x` - delete the char you are on.
* `X` - delete the 1 char before the cursor.
* `r` - **R**eplace 1 char

---

## How should I remember all those binds?
Think of a key sequence as a English sentence.

For example: when I'm using `y3j`/`y3<Enter>` ill think of it as `yank 3 down`, in my mind I "speak" with the editor rather then remembering which keys to press.

---

There are many more movements and operators but those are the ones I feel the most important, it takes some time to get used to work with this method but once you understand it, it will stick good.
