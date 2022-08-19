# Vim Goodies
This chapter will briefly cover few of many other vim features.

## Quickfix list
The quickfix list is a list that has entries of `file`, `location(row, col)` and `text`. \
There are many ways to populate the quickfix list, personally I populate it with `:help make` and `telescope.nvim` which we will cover later.

It used mainly to store search results and compilation errors.

### Commands
* `:copen` - open the quickfix list.
* `:cclose` - close the quickfix list.
* `:cnext` - jump to the next entry in the qf list.
* `:cprev` - jump to the prev entry in the qf list.

I recommend to install [vim-unimpaired](https://github.com/tpope/vim-unimpaired) that adds `]q` and `[q` to jump to the next/prev entry.

## Substitute Command
The `s` command is used for search & replace in current buffer you are editing. \
The syntax resembles the `sed` cli tool.

The command is very powerful, you can learn more about it in `:help :substitute` or just google search it.

Few examples:
* `:s/ofir/gal/` - will the first occurrence the current line of `ofir` and will replace them with `gal`
* `:s/ofir/gal/g` - will the occurrences in current line of `ofir` and will replace them with `gal`
* `:%s/ofir/gal/` - will find the first occurrences in each line in in the buffer of `ofir` and will replace them with `gal`
* `:%s/ofir/gal/g` - The same as above but for all occurrences

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
I have a list of days of the week that I need to store inside a list, all the days need to lowercase. \
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

First I'll all the days from inside the enum to my python file, but I need to make it a list with only the day names. \
I can record a macro that changing the case of the first letter, deletes the number and add `'` to make the day string.

We going to change the first day manually while recording the macro.

The macro: `qa^guui'<Esc>ea'<Esc>ldt,jq`. \
Breakdown:
1. `qa` - start a macro recording on `a`
1. `^` - go to the start of the line
1. `guu` - change the current char to lowercase
1. `i'<Esc>` - enter insert mode, add `'` and escape from insert mode
1. `e` - go the the end of word
1. `a'<Esc>` - enter insert mode after the word, add `'` and escape from insert mode
1. `l` - move right from the `'` we just added
1. `dt,` - delete the content untill `,` (the `= <num>`)
1. j - go down a line so we can repeat the macro
1. q finish record the macro.

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
