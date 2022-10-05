# Advanced Config
You learned the basic of vim (and little bit about of nvim). From this chapter I'll mostly talk about what takes nvim from a good editor to a great editor, its plugins and configuration.

## Personal Config vs Preconfigured Configuration
#### Preconfigured config
Preconfigured configurations are great, they provide a fast way to get a good config which maintained by a community. But it adds a "layer" of abstraction in the config, when installing a new plugins that doesn't interacts everything works good but if the plugin has to interact with an builtin plugin it becomes tricky.
You have to read how your preconfigured configurations expose those options which sometimes confusing and inconvenient.

Its like trying to fix stuff in a rented house, you don't know exactly how everything works but you learn as you try, sometimes you just don't want to mess with that.

#### Personal config
When you build your own config you build your own house, you know exactly how the electricity works, you know how the plumbing works, you know how everything is connected.

Your config = your codebase, configs of nvim are written in Lua, when you write your own config you write a mini project. You know each file, you know the "flow" of the config, you manage your own codebase from scratch rather then "diving" in to an existing codebase of your preconfigured configuration.

#### Conclusion
I think maintaining a personal config is the better option, It takes time and effort sometimes at first but later it worth it. Not everyone should have their own config but I suggest you try.

_**Note**_: If you stick with your preconfigured configuration some parts of the next chapters are irrelevant to you, I will make sure to let you know you can skip them.

---

## Why I need to config my editor within a program language?
At first I didn't understand why I need to learn and use Lua to configure my editor but soon enough I understood its the right way to configure your editor. \
It gives the ability to utilize your coding knowledge to improve your own experience in the editor.

A great basic example for that is my `go to definition` keybind.
```lua
goto_def = function()
	local ft = api.nvim_buf_get_option(0, 'filetype')
	if ft == 'man' then
		api.nvim_command(':Man ' .. vim.fn.expand('<cWORD>'))
	elseif ft == 'help' then
		api.nvim_command(':help ' .. vim.fn.expand('<cword>'))
	else
		require'telescope.builtin'.lsp_definitions()
	end
end
```
Which provides me a goto in `man page`, `help page` or just a regular code, in the same bind! When I'm browsing man I feel like I browse code.

On other editors it would be a `value` in a `.json` which a builtin/plugin function handles, to achieve this behavior in other editor I would have to write a plugin.

---

## Basic Lua
Either you use a preconfigured or a personal config, you need to learn a bit of Lua, fortunately its pretty simple language, I suggest you to learn it the same you as you learn a new simple programming language (e.g python).

You can find [Lua resources and the basic of Lua in nvim here](https://github.com/nanotee/nvim-lua-guide). It's a pretty long guide, I used it as a reference document to start with, later I switched to the `:help nvim_*` method, which I cover later.

#### Lua modules, packages and tables
To understand how `module` and `package` works you have to know what is a `table` in Lua.

##### Lua table
> Tables are the main (in fact, the only) data structuring mechanism in Lua, and a powerful one. We use tables to represent ordinary arrays, symbol tables, sets, records, queues, and other data structures, in a simple, uniform, and efficient way.
As far as I know this is the reason Lua is so fast.

<details><summary>Table usage examples (click to expand)</summary>

```lua
local my_table = {
	ofir = "gal"
}

for key, value in pairs(my_table) do
	print("key: " .. key .. ", value: " .. value)
end
-- Output:
--   key: ofir, value: gal
print(my_table.ofir) -- Output: gal

-------------------------------

local my_array = { 5, 6, 7 }
for _, value in ipairs(my_array) do
	print(value)
end
-- Output:
--  5
--  6
--  7

-------------------------------

for index, value in ipairs(my_array) do
	print(index, value)
end
-- Output:
--  1       5
--  2       6
--  3       7

-------------------------------

local my_dict = {
	["ofir"] = "gal"
}

for key, value in pairs(my_dict) do
	print("key: " .. key .. ", value: " .. value)
end
-- Output:
--   key: ofir, value: gal
print(my_dict.ofir) -- Output: gal
print(my_dict["ofir"]) -- Output: gal
print(my_table["ofir"]) -- Output: gal

```
[More examples here](https://www.lua.org/pil/2.5.html)

---
</details>

###### Lua module
Module is a table of exported functions and vars.

<details><summary>Module example (click to expand)</summary>

`module_example.lua`:
```lua
local M = {} -- Initialize the table of the module

-- Example for private function
local function private_func(input)
	print("Foo: " .. input)
end

-- Example of exported function
M.public_func = function(input)
	private_func(input)
end

return M -- Return the exported functions table
```

Usage example:
```lua
require('module').public_func("ofir")

local mod = require('module')
mod.public_func("ofir")
```

---
</details>

#### Lua package
Lua package is folder which has `init.lua` which is a Lua module.

<details><summary>Package example (click to expand)</summary>

`package_example/init.lua`:
```lua
local M = {}
local submod = require('anothermodule')

M.boo = function()
	submod.goo("ofir gal")
end

M.goo = submod.goo -- Expose submod.goo through the package

return M
```

`package_example/anothermodule.lua`:
```lua
local M = {}

M.goo = function(input)
	print("submod.goo: ".. input)
end

return M
```

Usage example:
```lua
require('package_example').boo()
require('package_example').goo("amit tamari")
require('package_example.anothermodule').goo("direct call to submodule")
require('package_example/anothermodule').goo("another way to direct call to submodule")
```

</details>

---

## How to create a personal config
### Launch nvim in a virtualenv
The first thing you need to do is to start your config in a git repo, you can manage your config in a separate repo and using it as a git submodule in your dotfiles or creating as your part of your dotfiles repo.

nvim loads by default the config from `~/.config/nvim` but we can set it to load the config from other dir.
```bash
XDG_CONFIG_HOME=~/wip_config/ XDG_DATA_HOME=~/.local/share/wip_nvim XDG_STATE_HOME=~/.local/state/wip_nvim nvim
```
This line launch nvim, loads the config from `~/wip_config/nvim`, saves the plugins in `~/.local/share/wip_nvim` and the state at `~/.local/state/wip_nvim`.

It allows you to set a virtualenv for nvim. I recommend to set an alias to launch your `personal nvim` (for example `pnv`) until you stabilize your personal config.
### Folder structure
Your config is your codebase, you have to maintain order, one of the fundamentals of clean config is the folder structure.

Find a structure that allows you to maintain a clean config which doesn't adds an overhead when editing/adding plugins.

#### Example of basic config folder structure
To understand how the nvim loads the config I made a simple folder structure with notes:
```bash
📂 ~/wip_config/nvim
├── 🌑 init.lua # <---- Entry point
├── 📂 lua
│  ├── 🌑 module_example.lua # <---- Interpreted at `require('module_example')`
│  └── 📂 package_example
│     ├── 🌑 init.lua # <---- Interpreted at `require('package_example')`
│     └── 🌑 anothermodule.lua # <---- Interpreted at `require('package_example/anothermodule')`
├── 📂 vim  # <---- vimscript config files
└── 📁 pack # <---- `packer` compile dir, added it to .gitignore
```

#### Recommended folder structure
This is my personal opinion for how to manage nvim config, feel free to scan through other dotfiles/nvim configs for inspiration.
```bash
📂 ~/wip_config/nvim
├── 🌑 init.lua # Entrypoint, requires lua/* modules by desired order
└── 📂 lua
   ├── 🌑 autocmds.lua    # Generic autocmds
   ├── 🌑 keymaps.lua     # Keymaps
   ├── 🌑 plugin_list.lua # Setup `packer`   (plugin list)
   ├── 🌑 settings.lua    # nvim settings    (vim.opt)
   ├── 🌑 ui.lua          # UI plugins setup (loaded before other plugins)
   ├── 🌑 utils.lua       # Utils functions  (can be a package too)
   └── 📂 plugins
      ├── 🌑 init.lua         # Loads all the submodules (plugins setup)
      ├── 🌑 autocomplete.lua # Autocomplete engine setup
      ├── 🌑 debug.lua        # Debug related plugins
      ├── 🌑 git.lua          # Git related plugins
      ├── 🌑 hydra.lua        # Hydras
      ├── 🌑 misc.lua         # Miscellaneous plugins
      ├── 🌑 telescope.lua    # Telescope + extensions setup
      └── 🌑 treesitter.lua   # Treesitter + extensions setup
```

I suggest to re-create this folder structure and fill the files while getting through the guide.

### Config Setup
Lets start with `settings.lua`, transfer your vim options (`vim.opt.*`) to `settings.lua`. \
Now setup `init.lua` to require `settings.lua` as so:
```lua
require('settings')
```

Restart your nvim and check that your vim options are set.

After that I recommend to fill `keymaps.lua` and `autocmds.lua`.

#### Installing the first plugin
Lets start with fill `plugin_list.lua`, in this file you manage your installed plugins. \
There are several package managers, the most famous one is [packer](https://github.com/wbthomason/packer.nvim). \
TL;DR copy paste [this](https://github.com/wbthomason/packer.nvim#bootstrapping) into `plugin_list.lua` and add `use '{github user}/{repo}'` where `-- My plugins here` comment.

If you reset your nvim `:Packer` commands won't exist, you must require it from `init.lua` as so:
```lua
require('plugin_list')
```
Make sure to execute `:PackerInstall` to install the added plugin.

After you installed your first plugin successfully its the time to setup it.

Create `plugins/init.lua` file and copy the code that requires all the submodules from [here](https://github.com/ofirgall/dotfiles/blob/master/editors/nvim/lua/plugins/init.lua) and add `require('plugins')` in `init.lua`.

Now you can add your plugin setup to the corresponding file and restart nvim.

---

### Lua usage in nvim & nvim lua api
nvim has an api for almost everything in lua, each lua function generates a help doc, you can access it by `:help nvim_*`.

For example the docs for `vim.api.nvim_buf_get_name` can be accessed by `:h nvim_buf_get_name`

You can run lua from the command line, `:lua print(vim.api.nvim_buf_get_name(0))`

Important reference links from [nanotee/nvim-lua-guide](https://github.com/nanotee/nvim-lua-guide) and `:help` tags:
* [Manage nvim options (vim.opt)](https://github.com/nanotee/nvim-lua-guide#using-meta-accessors) or `:h vim.opt`
* [Accessing vim variables (e.g - let:g)](https://github.com/nanotee/nvim-lua-guide#using-meta-accessors-1) or `:h lua-vim-variables`
* [Define usercommands from lua](https://github.com/nanotee/nvim-lua-guide#defining-user-commands) or `:h nvim_create_user_command`
* [Execute usercommand from lua](https://github.com/nanotee/nvim-lua-guide#vimapinvim_command) or `:h nvim_command`
* [Execute vim functions from lua](https://github.com/nanotee/nvim-lua-guide#calling-vimscript-functions) or `:h vim.fn`
* [Execute vimscript from lua](https://github.com/nanotee/nvim-lua-guide#vimapinvim_exec) or `:h nvim_exec`

---

[Previous Chapter](./07-vim-goodies.md) | [Next Chapter](./09-ui.md)
