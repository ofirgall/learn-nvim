# Vim Goodies
This chapter will briefly cover few of many other vim features.

## Quickfix list
The quickfix list is a list that has entries of `file`, `location(row, col)` and `text`. \
There are many ways to populate the quickfix list, personally I populate it with `:help make` and `telescope.nvim` which we will cover later.

It's mainly used to store search results and compilation errors.

### Commands
* `:copen` - open the quickfix list.
* `:cclose` - close the quickfix list.
* `:cnext` - jump to the next entry in the qf list.
* `:cprev` - jump to the prev entry in the qf list.

I recommend to install [vim-unimpaired](https://github.com/tpope/vim-unimpaired) that adds `]q` and `[q` to jump to the next/prev entry.

## Substitute Command
The `s` command is used for search & replace in the current buffer you are editing. \
The syntax resembles the `sed` cli tool.

The command is very powerful, you can learn more about it in `:help :substitute` or just google it.

Few examples:
* `:s/ofir/gal/` - find the first occurrence of `ofir` in the current line and replace it with `gal`
* `:s/ofir/gal/g` - find all occurrences of `ofir` in the current line and replace them with `gal`
* `:%s/ofir/gal/` - find the first occurrence of `ofir` in each line of the current buffer and replace them with `gal`
* `:%s/ofir/gal/g` - same as above but for all occurrences

Recommend keymap to rename the word under the cursor
```lua
-- My <F2> is binded to lsp rename
map('n', '<leader><F2>', '*:%s///g<left><left>') -- Rename current word with <leader>F2
map('x', '<F2>', '"hy:%s/<C-r>h//g<left><left>') -- Rename selected text in visual
```

#### Plugins
With [text-case.nvim](https://github.com/johmsalas/text-case.nvim) you can replace text and preserve the casing of the text.

When executing `:Subs/ofir gal/amit tamari` on this text:
```
OfirGal
ofirGal
```
It results this text:
```
AmitTamari
amitTamari
```

Also it provides lua API to change case, I created these user commands to change casing fast.
```lua
local api = vim.api
local textcase = require('textcase')
textcase.setup {
}

api.nvim_create_user_command('UpperCase', function() textcase.current_word('to_upper_case') end, {})
api.nvim_create_user_command('LowerCase', function() textcase.current_word('to_lower_case') end, {})
api.nvim_create_user_command('SnakeCase', function() textcase.current_word('to_snake_case') end, {})
api.nvim_create_user_command('ConstantCase', function() textcase.current_word('to_dash_case') end, {})
api.nvim_create_user_command('DashCase', function() textcase.current_word('to_constant_case') end, {})
api.nvim_create_user_command('DotCase', function() textcase.current_word('to_dot_case') end, {})
api.nvim_create_user_command('CamelCase', function() textcase.current_word('to_camel_case') end, {})
api.nvim_create_user_command('PascalCase', function() textcase.current_word('to_pascal_case') end, {})
api.nvim_create_user_command('TitleCase', function() textcase.current_word('to_title_case') end, {})
api.nvim_create_user_command('PathCase', function() textcase.current_word('to_path_case') end, {})
api.nvim_create_user_command('PhraseCase', function() textcase.current_word('to_phrase_case') end, {})
```

## Global command
The `g` command is used to apply a "vim" command across the buffer by filtering lines with pattern.

For example:
* `:g/ofir/d` - will delete all the lines with `ofir`

The command is very powerful, you can learn more about it in `:help :global` or just google search it.

## Macros
You can record and replay macros (set of key presses) to apply similar changes fast.

To start recording press `q{a-z}`, you will see in the bottom left `recording @{a-z}` to stop recording press `q` again, this will save the macro to `{a-z}` so you can use it later. \
To replay the macro press `@{a-z}`.

Record the macro once and use it multiple times on multiple lines.

#### Usage Example
I have a list of days of the week that I need to store inside a list, all the days need to be in lowercase. \
I have a code with enum of days but I need to migrate it to python
```c
enum Days {
	Sunday = 0,
	Monday = 1,
	Tuesday = 2,
	Wednesday = 3,
	Thursday = 4,
	Friday = 5,
	Saturday = 6,
};
```
Wanted result:
```python
days = [
	'sunday',
	'monday',
	'tuesday',
	'wednesday',
	'thursday',
	'friday',
	'saturday',
]
```

First I'll grab all days from inside the enum to my python file, but I need to make it a list with only the day names. \
I can record a macro that changes the casing of the first letter, deletes the number and adds `'` to make the day string.

We are going to change the first day manually while recording the macro.

The macro: `qa^guui'<Esc>ea'<Esc>ldt,jq`. \
Breakdown:
1. `qa` - start a macro recording on `a`
1. `^` - go to the start of the line
1. `guu` - change the current char to lowercase
1. `i'<Esc>` - enter insert mode, add `'` and escape from insert mode
1. `e` - go the the end of word
1. `a'<Esc>` - enter insert mode after the word, add `'` and escape from insert mode
1. `l` - move right from the `'` we just added
1. `dt,` - delete the content until `,` (the `= <num>`)
1. j - go down a line so we can repeat the macro
1. q finish recording the macro.

After we recorded the macro on top of the first day we have 6 days left, we can press `6@a` and that will repeat the macro 6 times and will change all the days.

#### Plugins

You can edit macros after recording them with [vim-buffest](https://github.com/rbong/vim-buffest)

## Dot to repeat
You can press `.` to repeat what you just did. \
You can think of it like a macro that holds only the last action you did.

#### Usage Example
```
apple banana orange
```
I want to change all the fruits to `fruit`, but I realized it after I already changed `apple` to `fruit` by using `ciwfruit<Esc>` and I don't want to record a macro again.

After I change it I can just go to the next word (preferably with `w`) and press `.` to change the current word to `fruit`.

You can do cool stuff with when combining `:help gn`

## External Command
You can run external terminal commands from vim, for example: `!ls`

---

[Previous Chapter](./06-splits-and-actual-tabs.md) | [Next Chapter](./08-advanced-config.md)
