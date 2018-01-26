撸起袖子加油干，一定掌握 React 的基本用法，达到构建项目的要求！

# 开发环境搭建

* eslint
* jest
* flow
* Prettier
* webpack
* babel
* stylelint

# create-react-app

facebook 官方脚手架，帮助我们快速搭建 React 应用。

## 安装

```
npm install -g create-react-app
```

## 使用

使用脚手架创建 myapp 应用

```
create-react-app myapp
```

启动应用

```
npm start
```

## 简单分析

create-react-app 的开发环境也有类似 webpack-dev-server 的--inline --hot 自动刷新的功能。

根据 npm start，找到 package.json 文件，内容是 react-scripts start，可见 react-scripts 一定大有文章。查找 node-modules，它果然依赖 webpack。

## 线上编译命令

create-react-app 的一个大亮点，它能让你的应用骗译出在线上生产环境运行的代码，编译出来的文件很小，且文件名还带 hash 值，方便我们做 cache，而且它还提供一个服务器，让我们在本地也能看到线上生产环境类似的效果，真的超级方便。

运行如下命令进行编译，编译好的文件都会放到 build 目录中。

```
npm run build
```

查看线上运行效果

```
npm install -g pushstate-server
pushstate-server build
```

## yarn

Yarn 是 Facebook, Google, Exponent 和 Tilde 开发的一款新的 JavaScript 包管理工具。它的目的是解决这些团队使用 npm 面临的少数问题，即：

* 安装的时候无法保证速度/一致性
* 安全问题，因为 npm 安装时允许运行代码

Yarn 同样是一个从 npm 注册源获取模块的新的 CLI 客户端。注册的方式不会有任何变化 —— 你同样可以正常获取与发布包。

### npm 区别

* yarn.lock
  * npm 和 Yarn 都使用 package.json 来跟踪项目的依赖，版本号并非一直准确，npm 的这种策略可能导致两台拥有相同 package.json 文件的机子安装了不同版本的包，这可能导致一些错误。
  * 为了避免包版本的错误匹配，一个确定的安装版本被固定在一个锁文件中。每次模块被添加时，Yarn 就会创建（或更新）yarn.lock 文件，这样你就可以保证其它机子也安装相同版本的包，同时包含了 package.json 中定义的一系列允许的版本。
  * 在 npm 中同样可以使用 npm shrinkwrap 命令来生成一个锁文件，这样在使用 npm install 时会在读取 package.json 前先读取这个文件，就像 Yarn 会先读取 yarn.lock 一样。这里的区别是 Yarn 总会自动更新 yarn.lock，而 npm 需要你重新操作。
* 并行安装
  * 每当 npm 或 Yarn 需要安装一个包时，它会进行一系列的任务。在 npm 中这些任务是按包的顺序一个个执行，这意味着必须等待上一个包被完整安装才会进入下一个；Yarn 则并行的执行这些任务，提高了性能。
* 清晰的输出
  * npm 默认情况下非常冗余，例如使用 npm install 时它会递归列出所有安装的信息；而 Yarn 则一点也不冗余，当可以使用其它命令时，它适当的使用 emojis 表情来减少信息
* CLI 的差异
* [Yarn vs npm](http://web.jobbole.com/88459/)

# 入门

## JSX

1. 大小写敏感

* 组件：首字母大写表示 react 自定义组件，小写表示 DOM 组件，因此自己开发的必须大写。
* 属性&方法命名：骆驼命名法

2. 组件可以嵌套，但是只能返回一个根节点，组件必须闭合
3. 特殊属性名：

* htmlFor：label for 属性
* className：class 属性
* style：React 组件样式是一个对象

4. 求值表达式：{}
5. 语法规则

* 允许 HTML 与 JavaScript 的混写
* 遇到 HTML 标签（以 < 开头），就用 HTML 规则解析，遇到代码块（以 { 开头），就用 JavaScript 规则解析。
* 允许直接在模板插入 JavaScript 变量。如果这个变量是一个数组，则会展开这个数组的所有成员

6. 非标准 DOM 属性

* dangerousSetInnerHTML：在 jsx 中直接插入 html 代码
* ref：方便父组件调用子组件
* key：提高页面渲染性能，体现在节点的比较，给每个节点添加一个唯一标识。在组件内部中，key 必须不一样。Diff 算法基于一个假设，如果节点不同，那么内容很大可能不同，因此在节点不同时，直接生成新的节点。

7. 性能保证
1. 内容类似的组件合并成同一个组件
1. 列表类型元素一定要加上一个唯一的 key

## 基本语法

* ReactDOM.render(template,element)
* React.createClass(props)
  * 组件类的 render 属性是必须的，用来输出组件
* this.props 读取属性
  * 属性不可以由组件自身修改，由父组件传递进来
* this.props.children 可以读取所有子组件
  * 值有三种可能，没有子节点为 undefined，一个子节点 object，多个子节点为 array
* React.Children.map
  * 常用来遍历 this.props.children，为什么不用普通数组的 map 方法呢，看上述特性便知
* this.state
  * 组件免不了要与用户互动，React 的一大创新，就是将组件看成是一个状态机，一开始有一个初始状态，然后用户互动，导致状态变化，从而触发重新渲染 UI。
  * ES6 中，this.state 必须在构造函数中进行声明

## 组件配置对象属性和方法

* PropTypes 属性：用来验证组件实例的属性是否符合要求
* getDefaultProps 方法：用来设置组件属性的默认值
* handleEventName 方法：eg：handleClick：点击事件处理器
  * 可以接受一个 event 参数
* getInitialState 方法：初始状态
* ……

## 组件方法

* this.setState(state)：更新状态

## 虚拟 DOM

组件并不是真实的 DOM 节点，而是存在于内存之中的一种数据结构，叫做虚拟 DOM （virtual DOM）。只有当它插入文档以后，才会变成真实的 DOM 。根据 React 的设计，所有的 DOM 变动，都先在虚拟 DOM 上发生，然后再将实际发生变动的部分，反映在真实 DOM 上，这种算法叫做 DOM diff ，它可以极大提高网页的性能表现。

有时需要从组件获取真实 DOM 的节点，这时就要用到 refs 属性。 例如组件 MyComponent 的子节点有一个文本输入框，用于获取用户的输入。这时就必须获取真实的 DOM 节点，虚拟 DOM 是拿不到用户输入的。为了做到这一点，文本输入框必须有一个 ref 属性，然后 this.refs.[refName] 就会返回这个真实的 DOM 节点。

需要注意的是，由于 this.refs.[refName] 属性获取的是真实 DOM ，所以必须等到虚拟 DOM 插入文档以后，才能使用这个属性，否则会报错。

## 组件生命周期

组件的生命周期分成三个状态：

1. Mounting：已插入真实 DOM
2. Updating：正在被重新渲染
3. Unmounting：已移出真实 DOM

React 为每个状态都提供了两种处理函数，will 函数在进入状态之前调用，did 函数在进入状态之后调用，三种状态共计五种处理函数：

1. componentWillMount()
2. componentDidMount()
3. componentWillUpdate(object nextProps, object nextState)
4. componentDidUpdate(object prevProps, object prevState)
5. componentWillUnmount()

React 还提供两种特殊状态的处理函数：

1. componentWillReceiveProps(object nextProps)
2. shouldComponentUpdate(object nextProps, object nextState)

组件本质是状态机，输入确定，输出一定确定。状态转换会触发不同的钩子函数。

| 阶段   | 钩子函数，运行顺序由上至下 |                                                                                                     说明 |
| ------ | :------------------------: | -------------------------------------------------------------------------------------------------------: |
| 初始化 |      getDefaultProps       |                        仅调用一次，实例之间共享引用，且在 createClass 的时候就已经调用，即使没有使用组件 |
| 初始化 |      getInitialState       |                                                        初始化每个实例特有的状态，必须返回一个对象或 null |
| 初始化 |     componentWillMount     |                                                                     Render 之前最后一次修改状态的机会 12 |
| 初始化 |           render           | 1.只能访问 this.props 和 this.state 2.只有一个顶层组件 3.不允许修改状态和 dom 输出，保证在服务端也能运行 |
| 初始化 |     componentDidMount      |                                                                         成功 render 并渲染，可以修改 dom |
| 运行中 | ComponentWillReceiveProps  |                                                                 父组件修改属性触发，修改新属性、修改状态 |
| 运行中 |   ShouldComponentUpdate    |                                               返回 false，不会调用 render 方法和 diff 算法更新，提升性能 |
| 运行中 |    componentWillUpdate     |                                                                                       不能修改属性和状态 |
| 运行中 |           Render           |                                                                                                 同初始化 |
| 运行中 |     componentDidUpdate     |                                                                                                 同初始化 |
| 销毁   |    componentWillUnmount    |                                                       在删除组件之前进行清理操作，比如计时器和事件监听器 |

## 组件协同使用

### 组件嵌套

组件按照父子关系嵌套。

优缺点：逻辑清晰，代码模块化，封装细节，编写难度高，无法掌握所有细节。

父子通信：父元素与子元素通信通过属性，子属性与父元素通信通过委托的方式。父元素通过属性传递函数，子组件在自身函数调用传递过来的函数。

### Mixin 混入

本质：是 JS 对象，一组方法，在 ES6 中，使用高阶组件代替

目的：横向抽离出组件的相似代码

相似概念：面向切面编程，插件

使用：React.createClass({})传入 mixins 属性，一个数组，可以有多个 mixin，混入之后，我们的 class 也就有了 mixin 定义的方法。

优点：代码复用，即插即用，适应性强（改动一次，影响了多个组件），编写难度大，降低了代码的可读性。

## Ajax

Axios 库是最广泛使用的 HTTP 客户端。它能同时在用户端（在用户端发起 Ajax 请求）与服务器端（在 Node.js 环境中）使用。

# react-starter-kit

## Getting Started

项目下载与环境安装

1. git clone
2. yarn install
3. yarn start || yarn start -- --release

* 仅编译，不开启服务 yarn run build || yarn run build -- --release

4. 检查语法错误和潜在问题：yarn run lint
5. 单元测试

* yarn run test
* yarn run test:watch

6. 发布(Git)：yarn run deploy

## React 风格向导

1. 单独的 UI 组件文件夹

* 更容易找到特定组件的相关资源(CSS、image，unit test、files etc.)，且更利于重构
* 避免多组件之间共享 css、image 和其他资源文件，将使你代码更利于维护和重构
* 每个组件文件夹中添加 package.json 文件，将使你更容易在别的地方引入组件

2. 偏向于使用函数式组件

* 任何时候偏向于使用无状态函数式组件

3. 使用 CSS 模块

* 允许你使用短的 CSS 名称，且同时可以避免冲突
* 保持 CSS 简单和可说明的
* 在 CSS 中随意使用变量，通过 PostCSS 插件
* 偏向于使用 class 类，而不是元素和 id 选择器
* 避免嵌套的 CSS 选择器
* 当有疑问时，使用.root 类代表根元素的组件

4. 使用高阶组件

* 继承已有组件

## render 中被调函数 this 问题

在写 React 代码的时候，Render 函数中，往往需要调用当前组件实例中定义的函数，这个时候我们需要解决被调函数中 this 的指向问题，一般我们都会采取三个方案，更多请看[这里](https://zhuanlan.zhihu.com/p/32831853)：

* 用类属性

```js
handler = () => {
  this.setState(({ clicks }) => ({ clicks: clicks + 1 }));
};
```

* 用 bind

```js
constructor() {
  super();
  this.state = { clicks: 0 };
  this.handler = this.handler.bind(this);
}
```

* 用 inline function

```js
onClick={() => this.props.onAlert(msg)}
```

## 数据获取

* HTML5 Fetch API
* whatwg-fetch polyfill for browser
* node-fetch for server-side

当使用 fetch 函数时，为了避免大量的样本代码，需要一个对 URL，凭证，CORS 等进行简单的封装。

# 参考

* [开发 react 应用最好用的脚手架 create-react-app](https://www.rails365.net/articles/kai-fa-react-ying-yong-zui-hao-jiao-shou-jia-create-react-app)
* [create-react-app](https://github.com/facebookincubator/create-react-app)
* [react-starter-kit](https://github.com/kriasoft/react-starter-kit)
