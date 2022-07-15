# eslint-plugin-react-project

[简体中文说明](./README-ZH.md)

A eslint plugin for react project.

## Installation

You just need to install `eslint-plugin-react-project`.

```sh
npm install eslint-plugin-react-project --save-dev
```

## Usage

Add `.eslintrc.json` configuration file to the project root directory:

- if you use React and JavaScript:

  ```json
  {
    "extends": [
      "plugin:react-project/base"
    ],
    "plugins": [
      "react-project"
    ]
  }
  ```

- if you use React and TypeScript:

  ```json
  {
    "extends": [
      "plugin:react-project/typescript"
    ],
    "plugins": [
      "react-project"
    ]
  }
  ```

## With Visual Studio Code

1、Install VS Code ESLint extension.

2、Add `.vscode/settings.json` file to the project root directory:

```json
{
  "javascript.format.enable": false,
  "typescript.format.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  },
  "editor.formatOnSave": true,
  "eslint.format.enable": true,
  "eslint.alwaysShowStatus": true,
  "eslint.validate": [
    "javascript",
    "typescript",
    "javascriptreact",
    "typescriptreact"
  ],
  "prettier.enable": false
}
```

3、Reload your VS Code window.
