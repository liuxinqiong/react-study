/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

// ESLint configuration
// http://eslint.org/docs/user-guide/configuring
module.exports = {
  parser: "babel-eslint", // 解析引擎使用babel-eslint

  extends: [
    "airbnb",
    "plugin:flowtype/recommended",
    "plugin:css-modules/recommended",
    "prettier",
    "prettier/flowtype",
    "prettier/react"
  ], // 这里配置继承规则

  plugins: ["flowtype", "css-modules", "prettier"], // 这里配置了eslint 插件，在package.json 中可以查看到eslint-plugin-xxx 等等插件

  globals: {
    __DEV__: true
  }, // __DEV__ 全局变量开启

  env: {
    browser: true
  }, // 配置当前规则环境为浏览器环境

  rules: {
    // Forbid the use of extraneous packages
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    "import/no-extraneous-dependencies": ["error", { packageDir: "." }], // 本条规则为了防止使用import xxx from 'xxx' 然而并没有使用会报错

    // Recommend not to leave any console.log in your code
    // Use console.error, console.warn and console.info instead
    // https://eslint.org/docs/rules/no-console
    "no-console": [
      "error",
      {
        allow: ["warn", "error", "info"]
      }
    ], // 禁止使用console.log，否则报错，但是可以使用console.info console.warn console.error

    // Prefer destructuring from arrays and objects
    // http://eslint.org/docs/rules/prefer-destructuring
    "prefer-destructuring": [
      "error",
      {
        VariableDeclarator: {
          array: false,
          object: true
        }, // 开启了变量解构赋值
        AssignmentExpression: {
          array: false,
          object: false
        } // 开启了参数的结构赋值
      },
      {
        enforceForRenamedProperties: false // 可以赋值更改变量 e.g: const {bar: foo} = { bar: 1, food: 3} 将变量的值修改变量名为foo
      }
    ],

    // Ensure <a> tags are valid
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to"],
        aspects: ["noHref", "invalidHref", "preferButton"]
      }
    ], // 这条规则主要是让锚点有效, 组件为Link

    // Allow .js files to use JSX syntax
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }], // 可以使用js/jsx 写react的jsx语法

    // Functional and class components are equivalent from React’s point of view
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    "react/prefer-stateless-function": "off", // 可以使用 class xxx extend React.Component{} 或者 function xxx => <div></div> 这种方式

    // ESLint plugin for prettier formatting
    // https://github.com/prettier/eslint-plugin-prettier
    "prettier/prettier": "error" // 定义使用单引号,并且保留,
  },

  settings: {
    // Allow absolute paths in imports, e.g. import Button from 'components/Button'
    // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
    "import/resolver": {
      node: {
        moduleDirectory: ["node_modules", "src"]
      }
    } // 允许绝对路径导入
  }
};
