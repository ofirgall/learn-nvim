# Advanced Config
In this chapter we will talk about how to make a basic personal config for nvim. \
You can decide to stay with the preconfigured configuration and skip this chapter.

_**Note**_: Some parts of the next chapters will be irrelevant to a preconfigured configuration I will make sure to let you know you can skip them.

---

## How to create a config
Fortunately for me there is already a really good [guide for lua configuration](https://github.com/nanotee/nvim-lua-guide) you don't have to read the guide fully, just know it exists and use it as a reference.
I recommend to take a look at [kickstart.nvim](https://github.com/nvim-lua/kickstart.nvim) which is a basic config you can start from.

## How to utilize a program language in your config file
At first I didn't understand why I need to learn and use lua to configure my editor but soon enough I understood its the right way to configure your editor, especially nvim.

It lets you create small creative things that would require to develop a plugin in other IDE's. \
For example my `go to definition` bind is that function:
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
Which provides me a goto in `man page`, `help page` or just a regular code, in the same bind! when I'm browsing man I feel like I browse code.

I can re use it too, like I would in a real program that I write:
```lua
map('n', 'gd', goto_def) -- Go to Definition
map('n', '<C-LeftMouse>', function()
	vim.api.nvim_input('<LeftMouse>')
	vim.api.nvim_input('<cmd>vsplit<cr>')
	goto_def()
end) -- Go to Definition in split

map('n', '<MiddleMouse>', function()
	vim.api.nvim_input('<LeftMouse>')
	goto_def()
end) -- Go to Definition
```

---

[Previous Chapter](./07-vim-goodies.md) | [Next Chapter](./09-ui.md)
