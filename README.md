# eslint-plugin-react-project

A eslint plugin for react project.

## Installation

You just need to install `eslint-plugin-react-project`.

```sh
npm install eslint-plugin-react-project --save-dev
```

## Usage

Add `.eslintrc.js` configuration file to the project root directory:

- if you use React and JavaScript:

  ```js
  module.exports = {
    extends: ["plugin:react-project/base"],
    plugins: ["react-project"],
  }
  ```

- if you use React and TypeScript:

  ```js
  module.exports = {
    extends: ["plugin:react-project/typescript"],
    plugins: ["react-project"],
  }
  ```

## with Visual Studio Code

1、Install VS Code ESLint extension.

2、Add `.vscode/settings.json` file to the project root directory:

```js
{
  "javascript.format.enable": false,
  "typescript.format.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  },
  "editor.formatOnSave": true,
  "eslint.format.enable": true,
  "eslint.validate": [
    "javascript",
    "typescript",
    "javascriptreact",
    "typescriptreact",
  ],
  "prettier.enable": false
}
```

3、Reload your VS Code window.
