# eslint-plugin-react-project 中文说明

> 一个用于 react 项目的 eslint 插件。

## 安装
您只需要安装本插件，其他相关eslint依赖将会自动安装。  

请在您的项目中执行以下命令：

```sh
npm install eslint-plugin-react-project --save-dev
```

## 使用方法
在您的项目根目录中，添加一个 `.eslintrc.js` 文件。

- 如果您的React项目使用`JavaScript`开发，那`.eslintrc.js`文件内容如下：

  ```js
  module.exports = {
    extends: ['plugin:react-project/base'],
    plugins: ['react-project']
  }

- 如果您的React项目使用`TypeScript`开发，那`.eslintrc.js`文件内容如下：

  ```js
  module.exports = {
    extends: ['plugin:react-project/typescript'],
    plugins: ['react-project']
  }
  ```

## 配合 Visual Studio Code 开发
如果您在使用 VS Code 编辑器开发，按照如下的推荐配置，您将获得一个良好的开发体验。

1、搜索安装 `ESLint` VS Code扩展插件。

2、在您的项目根目录下新建 `.vscode/settings.json` 文件。文件内容如下：

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
  "eslint.validate": [
    "javascript",
    "typescript",
    "javascriptreact",
    "typescriptreact",
  ],
  "prettier.enable": false
}
```

3、重新加载VS Code窗口，即可生效。
