# Basic template for TypeScript and SCSS in Visual Studio Code

This template will let you edit TypeScript and SASS/SCSS files Visual Studio Code,
and the files will automatically be transpiled to JavaScript and CSS.

Edit the files in the `src` folder, and the transpiled files will be created
in the `dist` folder.

## Requirements

- [Visual Studio Code](https://code.visualstudio.com/)
- [NodeJS and npm](http://blog.teamtreehouse.com/install-node-js-npm-windows)

## Quick install

1. Download the files in this repository
2. Go to the folder
3. Run `npm install`
4. Run `npm install -g typescript gulp uglify node-sass clean-css`

On Windows, you probably have to restart the computer to load the new PATH variables,
to be able to run gulp and npm from within VS Code.

## Tips

To start the "live transpiler" build task, press `Ctrl+Shift+B` in Visual Studio Code.
After that, the files will be transpiled when saved.

This project was inspired by and made possible by these guides:

* https://code.visualstudio.com/docs/languages/typescript
* https://www.typescriptlang.org/docs/handbook/gulp.html
* https://code.visualstudio.com/docs/languages/css

You can also "compile" the project by running `gulp` from the command line, in the directory.
