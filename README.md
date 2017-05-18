# Basic template for TypeScript and SCSS in Visual Studio Code

This template will let you edit TypeScript and SASS/SCSS files Visual Studio Code,
and the files will automatically be transpiled to JavaScript and CSS.

Edit the files in the `src` folder, and the transpiled files will be created
in the `dist` folder.

## Requirements

- Visual Studio Code
- TypeScript
- NodeJS
- npm

## Quick install

1. Download the files in this repository
2. Go to the folder
3. Run `npm install`

## Alternative installation

Install these modules globally:

    npm install -g typescript gulp uglify

Install these modules in the project:

    npm install --save-dev gulp
    npm install --save-dev node-sass gulp-sass
    npm install --save-dev typescript gulp-typescript
    npm install --save-dev gulp-uglify

## Tips

To start the "live transpiler" build task, press Ctrl+Shift+B in Visual Studio Code.
After that, the files will be transpiled when saved.

This project was inspired by and made possible by these guides:

* https://code.visualstudio.com/docs/languages/typescript
* https://www.typescriptlang.org/docs/handbook/gulp.html
* https://code.visualstudio.com/docs/languages/css
