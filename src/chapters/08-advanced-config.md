# Advanced Config
You learned the basics of vim (and a little bit about nvim). From this chapter on I'll mostly talk about what takes nvim from being a good editor to a great editor, its plugin-rich ecosystem and configurability.

## Personal Config vs Preconfigured Configuration
#### Preconfigured config
Preconfigured configurations are great, they provide a fast way to get a good config which is maintained by a community. But they add a "layer" of abstraction in the config, when installing new plugins that don't interact with builtin plugins everything works, but if the plugin has to interact with a builtin plugin it can become tricky.
You have to read how your preconfigured configurations expose those options which sometimes confusing and inconvenient.

It's like trying to fix stuff in a rented house, you don't know exactly how everything works but you learn as you try, sometimes you just don't want to mess with that.

#### Personal config
When you build your own config, you build your own house, so you know exactly how the electricity works, how the plumbing works, and how everything is connected.

Your config = your codebase, configs of nvim are written in Lua, when you write your own config you write a mini project. You know each file, you know the "flow" of the config, you manage your own codebase from scratch rather than "diving" into the existing codebase of your preconfigured configuration.

#### Conclusion
I think that maintaining a personal config is the better option, it takes time and effort at first but it's worthwhile. Not everyone should write their own config but I suggest you try it.

_**Note**_: If you stick with a preconfigured configuration, some parts of the next chapters are irrelevant, I'll make sure to let you know you can skip them.

---

## Why do I need to configure my editor using a programming language?
At first I didn't understand why do I need to learn and use Lua to configure my editor but soon enough I understood it's the right way to configure your editor. \
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
Which provides me a goto in `man page`, `help page` or just a regular code block, all in the same bind! When I'm browsing man I feel like I browse code.

In other editors it would be a `value` in a `.json` which a builtin/plugin function handles, so in order to achieve this kind of behavior I would have to write a plugin.

---

## Basic Lua
Regardless of whether you use a preconfigured or a personal config, you need to learn a bit of Lua. Fortunately it's quite a simple language, I suggest you to learn it the same as you would with Python, for instance.

You can find [Lua resources and the basic of Lua in nvim here](https://github.com/nanotee/nvim-lua-guide). It's a long guide, I used it as a reference document to start with, afterwards I switched to the `:help nvim_*` method, which I'll cover later.

#### Lua modules, packages and tables
To understand how `module` and `package` work, you have to understand what's a `table` in Lua.

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
require('module_example').public_func("ofir")

local mod = require('module_example')
mod.public_func("ofir")
```

---
</details>

#### Lua package
Lua package is a folder which has an `init.lua` which is a Lua module.

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
### Launch nvim in separate environments
The first thing you'll want to do is to start your config in a git repo, you can manage your config in a separate repo and use it as a git submodule in your dotfiles or make it a part of your dotfiles repo.

nvim loads its config from `~/.config/nvim` by default, but we can set it to load from a different dir:
```bash
XDG_CONFIG_HOME=~/wip_config/ XDG_DATA_HOME=~/.local/share/wip_nvim XDG_STATE_HOME=~/.local/state/wip_nvim nvim
```
This line launches nvim, loads the config from `~/wip_config/nvim`, saves the plugins in `~/.local/share/wip_nvim` and the state at `~/.local/state/wip_nvim`.

This creates a [virtualenv](https://virtualenv.pypa.io/en/latest/)-esque setup for nvim. I recommend to set an alias to launch your `personal nvim` (for example `pnv`) until your personal config is stable enough.
### Folder structure
Your config is your codebase, so you have to maintain the order. One of the fundamentals for a clean config is the folder structure.

Find a structure which allows you to maintain a clean config that doesn't add overhead when editing/adding plugins.

#### Example of basic config folder structure
To understand how nvim loads the config I made a simple folder structure with notes:
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
   ├── 🌑 usercmds.lua    # Generic usercmds
   ├── 🌑 utils.lua       # Utils functions  (can be a package too)
   └── 📂 plugins
      ├── 🌑 init.lua         # Loads all the submodules (plugins setup)
      ├── 🌑 autocomplete.lua # Autocomplete engine setup
      ├── 🌑 debug.lua        # Debug related plugins
      ├── 🌑 git.lua          # Git related plugins
      ├── 🌑 hydra.lua        # Hydras
      ├── 🌑 lsp.lua          # LSP configuration and related plugins
      ├── 🌑 misc.lua         # Miscellaneous plugins
      ├── 🌑 telescope.lua    # Telescope + extensions setup
      └── 🌑 treesitter.lua   # Treesitter + extensions setup
```

I suggest to recreate this folder structure and write the files while reading the guide.

### Config Setup
Let's start with `settings.lua`, transfer your vim options (`vim.opt.*`) to `settings.lua`. \
Now setup `init.lua` to require `settings.lua` like so:
```lua
require('settings')
```

Restart your nvim and check that your vim options are set. \
Remember you can use `print`

After that I recommend to write `keymaps.lua` and `autocmds.lua`.

#### Installing the first plugin
Let's start with writing `plugin_list.lua`, in this file you manage your installed plugins. \
There are several package managers, one that is well-known is [packer](https://github.com/wbthomason/packer.nvim). \
TL;DR copy paste [this](https://github.com/wbthomason/packer.nvim#bootstrapping) into `plugin_list.lua` and add `use '{github user}/{repo}'` beneath the `-- My plugins here` comment.

If you reset your nvim `:Packer` commands won't exist, you must require it from `init.lua` like so:
```lua
require('plugin_list')
```
Make sure to execute `:PackerInstall` to install the added plugin.

After you installed your first plugin successfully it's time to set it up.

Create `plugins/init.lua` file and copy the code that requires all submodules from [here](https://github.com/ofirgall/dotfiles/blob/master/editors/nvim/lua/plugins/init.lua) and add `require('plugins')` in `init.lua`.

Now you can add each plugin setup to its corresponding file and restart nvim.

---

### Lua usage in nvim & nvim lua api
nvim has an api for almost everything in lua, each lua function generates a help doc, which you can access by `:help nvim_*`.

For example, the docs for `vim.api.nvim_buf_get_name` can be accessed using `:h nvim_buf_get_name`

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
