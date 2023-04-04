# [Hydra](https://github.com/anuvyklack/hydra.nvim)
Hydra is a framework to create a submode inside nvim, a submode is called `Hydra`.

It allows to enter a `body` with a key bind or a lua command and from there it creates a custom keymapping "ontop" of your exist keys to allow you to do various actions. \
You can create custom ones very easily too.

Hydras for example:
* [Windows and buffers management](https://github.com/anuvyklack/hydra.nvim/wiki/Windows-and-buffers-management), I think its a must, much more convenient from the vanilla method.
* [Git](https://github.com/anuvyklack/hydra.nvim/wiki/Git) another tool for git management from inside nvim
* [You can find all the community hydra's here](https://github.com/anuvyklack/hydra.nvim/wiki)

Example for a "custom" hydra of mine, which let met scroll through the functions in the buffer quickly:
```lua
local ts_move = require'nvim-treesitter.textobjects.move'
-- Move up/down functions
local curr = Hydra({
	hint = [[
 _j_ _J_ : up
 _k_ _K_ : down
  _<Esc>_
	]],
	config = {
		timeout = 4000,
		hint = {
			border = 'rounded'
		}
	},
	mode = {'n', 'x'},
	heads = {
		{ 'j', function ()
			ts_move.goto_next_start('@function.outer')
			center_screen()
		end },
		{ 'J', function ()
			ts_move.goto_next_end('@function.outer')
			center_screen()
		end },
		{ 'k', function ()
			ts_move.goto_previous_start('@function.outer')
			center_screen()
		end },
		{ 'K', function ()
			ts_move.goto_previous_end('@function.outer')
			center_screen()
		end },
		{ '<Esc>', nil,  { exit = true }}
	}
})
map({'n', 'x'}, 'gj', function ()
	ts_move.goto_next_start('@function.outer')
	center_screen()
	curr:activate()
end)
map('o', 'gj', function () ts_move.goto_next_start('@function.outer') end)

map({'n', 'x'}, 'gk', function ()
	ts_move.goto_previous_start('@function.outer')
	center_screen()
	curr:activate()
end)
map('o', 'gk', function () ts_move.goto_previous_start('@function.outer') end)

map({'n', 'x'}, 'gJ', function ()
	ts_move.goto_next_end('@function.outer')
	center_screen()
	curr:activate()
end)
map('o', 'gJ', function () ts_move.goto_next_end('@function.outer') end)

map({'n', 'x'}, 'gK', function ()
	ts_move.goto_previous_end('@function.outer')
	center_screen()
	curr:activate()
end)
map('o', 'gK', function () ts_move.goto_previous_end('@function.outer') end)
```
