React 学习之道

# 简介

## React 特点

* 第一代 SPA：Angular、Ember 以及 Backbone。
* React 并不是一个 SPA 框架，而是一个视图库，但围绕 React 周边的整个生态系统让构建单页面应用成为可能。
* 第一代框架尝试一次性解决很多问题，而 React 仅仅帮助你构建视图层。它更多的是一个库而非框架。其背后的思路是：应用的视图应该是一系列层次分明的可组合的组件。
* 重点关注视图层的两个优点
  * 你可以按部就班地学习 SPA 的每一部分。你不用担心要一次性理解全部。
  * SPA 的各部分都是可替换的。这样就使得 React 的周边生态圈充满新的创意。
* 第一代 SPA 框架更贴近企业级。它们缺乏足够的灵活性。
* React 生态圈组成了一个整体的灵活且可替换的框架，React 拥有简单整洁的 API、神奇的生态圈以及很棒的社区。

## node 和 npm

全局 node 包只需要一次性地安装在全局目录，可以在终端的任何地方使用。

Node 包安装完成后将会保存在 node_modules/ 文件夹里面，并且附加在会在 package.json 的依赖列表之后。

关于 package.json 额外多说一句。通过这个文件你可以在不共享本地包的情况下把项目共享给其他的开发人员。因为这个文件中已经有了所有 node 包的引用，这些包又被叫做依赖（dependency），每个人都可以在不包含所有依赖的情况下拷贝你的项目，因为 package.json 中列出了所有的依赖。只需要通过一个简单的 npm install 命令就可以获取所有依赖然后安装到 node_modules/ 文件夹下面。

基本命令

```
npm install -g <package>
npm install <package>
npm init -y
npm install --save-dev <package> # 标记表示该 node 包只是用作开发环境的一部分，并不会被作为你产品代码的一部分发布。
```

## 安装 React

1. CDN
2. NPM 包管理项目

那么我们需要使用 NPM 安装哪些包呢？

1. react
2. react-dom
3. babel：使项目支持 JSX 语法和 ES6
4. ...

这一步设置包含一堆的配置和工具，对于一个新手来说可能会感觉到不小的压力。由于这个原因，Facebook 引入了`create-react-app`作为零配置的 React 解决方案。

## create-react-app

Facebook 在 2016 年创建了这样一个零配置的 React 初始化套件。使用 create-react-app，各种工具和配置都会在后台集成，而开发人员只需要专注于实现就好。

```
npm install -g create-react-app
create-react-app myapp
```

create-react-app 创建的是一个 npm 项目。你可以通过 npm 来给你的项目安装和卸载 node 包。另外它还附带了下面几个 npm 脚本：

```
npm start
npm test
npm run build
```

这些脚本存在 package.json 中，现在这样一个 React 样板项目就创建完成了。

## JSX 简介

* 这是 React 特有的语法。
* 区分组件、实例和元素
* JSX 允许你在 JavaScript 中混入 HTML 结构。

## ES6 const 和 let

* 被 const 声明的变量不能被重新赋值或重新声明。你必须小心地使用 const 。使用 const 声明的变量不能被改变，但是如果这个变量是数组或者对象的话，它里面持有的内容可以被更新。它里面持有的内容不是不可改变的。
* let 语句声明一个块级作用域的本地变量，被关键字 let 声明的变量可以被改变。
* 不同的声明方式应该在什么时候使用呢？有很多的选择。我的建议是在任何你可以使用 const 的时候使用它。这表示尽管对象和数组的内容是可以被修改的，你仍希望保持该数据结构不可变。而如果你想要改变你的变量，就使用 let 去声明它。
* React 和它的生态是拥抱不可变的。这就是为什么 const 应该是你定义一个变量时的默认选择。

### let 深入

let 特点与 var 区别

* let 声明的变量只在其声明的块或子块中可用，这一点，与 var 相似。二者之间最主要的区别在于 var 声明的变量的作用域是整个封闭函数。
* 简化内部函数代码，当用到内部函数的时候（闭包时），let 会让你的代码更加简洁。
* 在程序或者函数的顶层，let 并不会像 var 一样在全局对象上创造一个属性。
* 在处理构造函数的时候，可以通过 let 绑定来共享一个或多个私有成员，而不使用闭包。
* 在相同的函数或块作用域内重新声明同一个变量会引发 SyntaxError。
* 在 ECMAScript 2015 中，let 绑定不受变量提升的约束，这意味着 let 声明不会被提升到当前执行上下文的顶部。在块中的变量初始化之前，引用它将会导致 ReferenceError。
* 块作用域根据{}区别，switch-case 下如果不使用{}则会引发 SyntaxError，使用{}则不会

### const 深入

* 此声明创建一个常量，其作用域可以是全局或本地声明的块。
* 与 var 变量不同，全局常量不会变为窗口对象的属性。
* 需要一个常数的初始化器，您必须在声明的同一语句中指定它的值。
* const 声明创建一个值的只读引用。但这并不意味着它所持有的值是不可变的，只是变量标识符不能重新分配。
* 一个常量不能和它所在作用域内的其他变量或函数拥有相同的名称。

## ReactDOM

ReactDOM.render() 会使用你的 JSX 来替换你的 HTML 中的一个 DOM 节点。这样你就可以很容易地把 React 集成到每一个其他的应用中。

ReactDOM.render() 总会很好地渲染你的 App 组件。你可以将一个简单的 JSX 直接用 JSX 的方式传入，而不用必须传入一个组件的实例。

## 模块热替换

用 create-react-app 创建的项目有一个优点，那就是可以让你在更改源代码的时候浏览器自动刷新页面。

模块热替换（HMR）是一个帮助你在浏览器中重新加载应用的工具，并且无需再让浏览器刷新页面。你可以在 create-react-app 中很容易地开启这个工具：在你 React 的入口文件 src/index.js 中，添加一些配置代码。

```js
if (module.hot) {
  module.hot.accept();
}
```

优势：

1. 无须刷新，重新加载
2. 保持应用的状态

## ES6 箭头函数

箭头函数和普通函数区别与优势

* 更简介，这些函数表达式最适合用于`非方法函数`，并且它们`不能用作构造函数`。
* this 对象的不同行为
  * 普通的函数表达式总会定义它自己的 this 对象。
  * 箭头函数表达式仍然会使用包含它的语境下的 this 对象。
  * 由于 this 已经在词法层面完成了绑定，通过 call() 或 apply() 方法调用一个函数时，只是传入了参数而已，对 this 并没有什么影响
* 箭头函数如果函数只有一个参数，你就可以移除掉参数的括号，但是如果有多个参数，你就必须保留这个括号。
* 在 ES6 的箭头函数中，你可以用简洁函数体来替换块状函数体，且简洁函数体的返回不用显示声明。
  * 加括号的函数体返回`对象字面表达式`，直接返回例如{ foo: 1 }会是 undefined，这是因为花括号({})里面的代码被解析为一系列语句
* 不绑定 arguments
  * 参数只是在封闭范围内引用相同的名称
  * 在大多数情况下，使用剩余参数是使用 arguments 对象的好选择。
* 其他
  * 支持剩余参数和默认参数
  * 同样支持参数列表解构
  * 箭头函数没有 prototype 属性。
  * yield 关键字通常不能在箭头函数中使用，因此，箭头函数不能用作生成器。
  * 箭头函数在参数和箭头之间不能换行。
  * 箭头函数也可以使用闭包

## ES6 类

ECMAScript 2015 中引入的 JavaScript 类(classes) 实质上是 JavaScript 现有的基于原型的继承的语法糖。JavaScript 类提供了一个更简单和更清晰的语法来创建对象并处理继承。

定义类

* 类语法有两个组成部分：类表达式和类声明。
* 函数声明和类声明之间的一个重要区别是函数声明会声明提升，类声明不会。

类体和方法定义

* 类声明和类表达式的主体都执行在严格模式下，构造函数，静态方法，原型方法，getter 和 setter 都在严格模式下执行。
* 构造函数方法是一个特殊的方法，其用于创建和初始化使用一个类创建的一个对象。一个类只能拥有一个名为 “constructor”的特殊方法。一个构造函数可以使用 super 关键字来调用一个父类的构造函数。
* 原型方法
* 静态方法：static 关键字用来定义一个类的一个静态方法。调用静态方法不需要实例化该类，但不能通过一个类实例调用静态方法。静态方法通常用于为一个应用程序创建工具函数。

继承

* 如果子类中存在构造函数，则需要在使用“this”之前首先调用 super（）。
* 类不能扩展常规（不可构造/非构造的）对象。如果要继承常规对象，可以改用 Object.setPrototypeOf():

JavaScript ES6 引入了类的概念。类通常在面向对象编程语言中被使用。JavaScript 的编程范式在过去和现在都是非常灵活的。你可以根据使用情况一边使用函数式编程一边使用面向对象编程。React 混合使用了两种编程范式中的有益的部分。

* 类都有一个用来实例化自己的构造函数。这个构造函数可以用来传入参数来赋给类的实例。
* 类可以定义函数。因为这个函数被关联给了类，所以它被称为方法。

组件类

* Component 类封装了所有 React 类需要的实现细节。它使得开发者们可以在 React 中使用类来创建组件。
* React Component 类暴露出来的方法都是公共的接口。这些方法中有一个方法必须被重写（render()），其他的则不一定要被重写。

# 基础

## 内部状态

* 使用 ES6 类组件可以在构造函数中初始化组件的状态。 构造函数只会在组件初始化时调用一次。
* 当你使用 ES6 编写的组件有一个构造函数时，它需要强制地调用 super(); 方法
* 你也可以调用 super(props);，它会在你的构造函数中设置 this.props 以供在构造函数中访问它们。 否则当在构造函数中访问 this.props ，会得到 undefined。
* 不要直接修改 state。你必须使用 setState() 方法来修改它，每次你修改组件的内部状态，组件的 render 方法会再次运行。

## ES6 对象初始化

ES6 中对象初始化比 ES5 更加简洁

* 当你的对象中的属性名与变量名相同时，可以省略变量名
* 简写方法名，eg：const obj = {func(){}}
* 使用计算属性名，eg：const user = {[key]: 'Robin',};

## 单项数据流

触发一个动作，再通过函数或类方法修改组件的 state，最后组件的 render() 方法再次运行并更新界面。
![单项数据流](/docs/one-way.png)

## 绑定

当使用 ES6 编写的 React 组件时，了解在 JavaScript 类的绑定会非常重要。

绑定的步骤是非常重要的，因为类方法不会自动绑定 this 到实例上。是使用 React 主要的 bug 来源。其中一种方式就是类方法在构造函数中正确绑定。

```js
this.func = this.func.bind(this); // 此时在函数体中this指向类的实例
```

类方法的绑定也可以写起其他地方，比如写在 render() 函数中。但是你应该避免这么做，因为它会在每次 render 的时候绑定类方法，总结来说组件每次运行更新时都会导致性能消耗。当在构造函数中绑定时，绑定只会在组件实例化时运行一次，这样做是一个更好的方式。

```js
render() {
    return (
      <button
        onClick={this.onClickMe.bind(this)}
        type="button"
      >
        Click Me
      </button>
    );
  }
```

有人提出在构造函数中直接定义业务逻辑类方法，但你同样也应该避免这样，因为随着时间的推移它会让你的构造函数变得混乱。构造函数目的只是实例化你的类以及所有的属性。这就是为什么我们应该把业务逻辑应该定义在构造函数之外。

最后值得一提的是类方法可以通过 ES6 的箭头函数做到自动地绑定。定义方法时候使用箭头函数，如果在构造函数中的重复绑定对你有所困扰，你可以使用这种方式代替。React 的官方文档中坚持在构造函数中绑定类方法，所以这里也会采用同样的方式。

```js
func = () => {
  console.log(this);
};
```

## 事件处理

如果事件处理器需要参数该如何处理呢？通常来说有两种方式

1. 高阶函数
2. 在外部(render 内部)定义一个包装函数，并且只将定义的函数传递给处理程序

在事件处理程序中使用箭头函数的影响会不会有性能影响呢，每次 render() 执行时，事件处理程序就会实例化一个高阶箭头函数，它可能会对你的程序性能产生影响，但在大多数情况下你都不会注意到这个问题。假设你有一个包含 1000 个项目的巨大数据表，每一行或者列在事件处理程序中都有这样一个箭头函数，这个时候就需要考虑性能影响。

## 和表单交互

合成事件：event.target || event.currentTarget

> React 的 this.setState() 是一个浅合并，在更新一个唯一的属性时，他会保留状态对象中的其他属性

> 在 React 中了解高阶函数是有意义的，因为在 React 中有一个高阶组件的概念

React 的生态使用了大量的函数式编程概念。通常情况下，你会使用一个函数返回另一个函数（高阶函数）。在 JavaScript ES6 中，可以使用箭头函数更简洁的表达这些。

## ES6 解构

在 JavaScript ES6 中有一种更方便的方法来访问对象和数组的属性，叫做解构。

在 JavaScript ES5 中每次访问对象的属性或是数组的元素都需要额外添加一行代码，但在 JavaScript ES6 中可以在一行中进行。

在例子中，我们可以对 this.state 使用解构，达到代码的简短

```js
const { searchTerm, Users } = this.state;
```

## 受控组件

表单元素比如 `<input>`, `<textarea>` 和 `<select>` 会以原生 HTML 的形式保存他们自己的状态。一旦有人从外部做了一些修改，它们就会修改内部的值，在 React 中这被称为`不受控组件`，因为它们自己处理状态。在 React 中，你应该确保这些元素变为`受控组件`。

你只需要设置输入框的值属性，这个值已经在 searchTerm 状态属性中保存了。

```js
<input type="text" value={searchTerm} onChange={this.onSearchChange} />
```

现在输入框的单项数据流循环是自包含的，组件内部状态是输入框的唯一数据来源。

## 拆分组件

当你的组件特别大时，它在不停地扩展，最终可能会变得混乱。你可以开始将它拆分成若干个更小的组件。

最直接需要解决的问题就是，组件间如何通信呢？答案就是使用 this.props，他可以传递 JavaScript 的任何对象。当你在 App 组件里面使用它时，它有你传递给这些组件的所有值。这样，组件可以沿着组件树向下传递属性。

从 App 组件中提取这些组件之后，你就可以在别的地方去重用它们了。因为组件是通过 props 对象来获取它们的值，所以当你在别的地方重用它时，你可以每一次都传递不同的 props，这些组件就变得可复用了。

## 可组合组件

在 props 对象中还有一个小小的属性可供使用: children 属性。通过它你可以将元素从上层传递到你的组件中，这些元素对你的组件来说是未知的，但是却为组件相互组合提供了可能性。

它不仅可以把文本作为子元素传递，还可以将一个元素或者元素树（它还可以再次封装成组件）作为子元素传递。children 属性让组件相互组合到一起成为可能。

## 可复用组件

让我们来考虑一下，我们构造一个 Button 组件如下：

```js
class Button extends Component {
  render() {
    const { onClick, className = "", children } = this.props;

    return (
      <button onClick={onClick} className={className} type="button">
        {children}
      </button>
    );
  }
}
```

请问这样的用处是什么呢，难道只是为了省略一个 type 属性的书写吗？答案是否定的！

必须要考虑到长期投资。想象在你的应用中有若干个 button，但是你想改变它们的一个属性、样式或者行为。如果没有这个组件的话，你就必须重构每个 button。相反，Button 组件拥有`单一可信数据源`。一个 Button 组件可以立即重构所有 button。一个 Button 组件统治所有的 button。

默认参数：Button 组件期望在 props 里面有一个 className 属性. className 属性是 React 基于 HTML 属性 class 的另一个衍生物。但是当使用 Button 组件时，我们并没有传递任何 className 属性，所以在 Button 组件的代码中，我们更应该明确地标明 className 是可选的。

## 组件类型

* **函数式无状态组件**：类组件就是函数，它们接收一个输入并返回一个输出。输入是 props，输出就是一个普通的 JSX 组件实例。到这里，它和 ES6 类组件非常的相似。然而，函数式无状态组件是函数（函数式的），并且它们没有本地状态（无状态的）。你不能通过 this.state 或者 this.setState() 来访问或者更新状态，因为这里没有 this 对象。此外，它也没有生命周期方法。虽然你还没有学过生命周期方法，但是你已经用到了其中两个：constructor() and render()。constructor 在一个组件的生命周期中只执行一次，而 render() 方法会在最开始执行一次，并且每次组件更新时都会执行。
* **ES6 类组件**：在类的定义中，它们继承自 React 组件。extend 会注册所有的生命周期方法，只要在 React component API 中，都可以在你的组件中使用。通过这种方式你可以使用 render() 类方法。此外，通过使用 this.state 和 this.setState()，你可以在 ES6 类组件中储存和操控 state。
* **React.createClass**：这类组件声明曾经在老版本的 React 中使用，仍然存在于很多 ES5 React 应用中。但是为了支持 JavaScript ES6，Facebook 声明它已经不推荐使用了。他们还在 React 15.5 中加入了不推荐使用的警告。

> 什么时候更适合使用函数式无状态组件而非 ES6 类组件？一个经验法则就是当你不需要本地状态或者组件生命周期方法时，你就应该使用函数式无状态组件。最开始一般使用函数式无状态组件来实现你的组件，一旦你需要访问 state 或者生命周期方法时，你就必须要将它重构成一个 ES6 类组件。

例子：重构 Search 组件

```js
function Search(props) {
  const { value, onChange, children } = props;
  return (
    <form>
      {children} <input type="text" value={value} onChange={onChange} />
    </form>
  );
}
```

如果优化上面的代码呢？

1. 入参解构
2. 箭头函数

```js
const Search = ({ value, onChange, children }) => (
  <form>
    {children} <input type="text" value={value} onChange={onChange} />
  </form>
);
```

## 给组件声明样式

使用 React 的 className 即可，JSX 混合了 HTML 和 JavaScript，其实在 JSX 中还可以直接使用 CSS，直接实用元素的 style 属性即可。

```js
// way1
<div style={{width:200px}}></div>
// way2
const smallColumn = {
  width: '10%',
};
<div style={smallColumn}></div>
```

# 数据交互

## 生命周期方法

这些方法是嵌入 React 组件生命周期中的一组挂钩。它们可以在 ES6 类组件中使用，但是不能在无状态组件中使用。

constructor（构造函数）只有在组件实例化并插入到 DOM 中的时候才会被调用。组件实例化的过程称作组件的挂载（mount）。

render() 方法也会在组件挂载的过程中被调用，同时当组件更新的时候也会被调用。每当组件的状态（state）或者属性（props）改变时，组件的 render() 方法都会被调用。

在组件挂载的过程中还有另外两个生命周期方法：componentWillMount() 和 componentDidMount()。

在挂载过程中有四个生命周期方法，它们的调用顺序是这样的：

* constructor()
* componentWillMount()
* render()
* componentDidMount()

但是当组件的状态或者属性改变的时候用来更新组件的生命周期是什么样的呢？总的来说，它一共有 5 个生命周期方法用于组件更新，调用顺序如下：

* componentWillReceiveProps()
* shouldComponentUpdate()
* componentWillUpdate()
* render()
* componentDidUpdate()

最后但同样重要的，组件卸载也有生命周期。它只有一个生命周期方法：componentWillUnmount()。

> 即使在一个很大的 React 应用当中，除了 constructor() 和 render() 比较常用外，你只会用到一小部分生命周期函数。

即使这样，了解每个生命周期方法的适用场景还是对你有帮助的：

* **constructor(props)** - 它在组件初始化时被调用。在这个方法中，你可以设置初始化状态以及绑定类方法。
* **componentWillMount()** - 它在 render() 方法之前被调用。这就是为什么它可以用作去设置组件内部的状态，因为它`不会触发组件的再次渲染`。但一般来说，还是`推荐在 constructor() 中去初始化状态`。
* **componentWillReceiveProps(nextProps)** - 这个方法在一个`更新生命周期`（update lifecycle）中被调用。`新的属性会作为它的输入`。因此你可以利用 this.props 来对比之后的属性和之前的属性，`基于对比的结果去实现不同的行为`。此外，你可以基于新的属性来设置组件的状态。
* **shouldComponentUpdate(nextProps, nextState)** - `每次组件因为状态或者属性更改而更新时，它都会被调用`。你将在成熟的 React 应用中使用它来进行`性能优化`。在一个更新生命周期中，组件及其子组件将`根据该方法返回的布尔值来决定是否重新渲染`。这样你可以阻止组件的`渲染生命周期`（render lifecycle）方法，避免`不必要的渲染`。
* **componentWillUpdate(nextProps, nextState)** - 这个方法是 render() 执行之前的`最后一个方法`。你已经拥有下一个属性和状态，它们可以在这个方法中任由你处置。你可以利用这个方法在渲染之前进行最后的准备。注意在这个生命周期方法中你`不能再触发 setState()`。如果你想基于新的属性计算状态，你必须利用 componentWillReceiveProps()。
* **render()** - 这个生命周期方法是必须有的，它返回作为组件输出的元素。这个方法应该是一个`纯函数`，因此不应该在这个方法中修改组件的状态。它把属性和状态作为输入并且返回（需要渲染的）元素
* **componentDidUpdate(prevProps, prevState)** - 这个方法在 render() 之后立即调用。你可以用它当成`操作 DOM 或者执行更多异步请求`的机会。
* **componentDidMount()** - 它仅在组件挂载后执行一次。这是发起`异步请求去 API 获取数据的绝佳时期`。获取到的数据将被保存在内部组件的状态中然后在 render() 生命周期方法中展示出来。
* **componentWillUnmount()** - 它会在组件销毁之前被调用。你可以利用这个生命周期方法去执行任何`清理任务`。

还有另一个生命周期方法：componentDidCatch(error, info)。它在 React 16 中引入，用来捕获组件的错误。举例来说，在你的应用中展示样本数据本来是没问题的。但是可能会有列表的本地状态被意外设置成 null 的情况发生（例如从外部 API 获取列表失败时，你把本地状态设置为空了）。然后它就不能像之前一样去过滤（filter）和映射（map）这个列表，因为它不是一个空列表（[]）而是 null。这时组件就会崩溃，然后整个应用就会挂掉。现在你可以用 componentDidCatch() 来捕获错误，将它存在本地的状态中，然后像用户展示一条信息，说明应用发生了错误。

## 获取数据

ES6 模板字符串

fetch API：返回的响应需要被转化成 JSON 格式的数据结构。这是在处理 JSON 数据结构时，原生的 fetch API 中的`强制步骤`。最后将处理后的响应赋值给组件内部状态中的结果。此外，我们用一段 catch 代码来处理出错的情况。如果在发起请求时出现错误，这个函数会进入到 catch 中而不是 then 中。此时我们需要进行错误处理。

你使用了大多数浏览器支持的原生 fetch API 来执行对 API 的异步请求。create-react-app 中的配置保证了`它被所有浏览器支持`。你也可以使用第三方库来代替原生 fetch API，例如：`superagent` 和 `axios`。

## 扩展操作符

通过 API 获取数据后，你会发现上述的 Dismiss 按钮不能正常工作了，是因为 onDismiss() 方法不能处理复杂的 result 对象。它现在还只能处理一个本地状态中的简单列表。但是现在这个列表已经不再是简单的平铺列表了。现在，让我们去操作这个 result 对象而不是去操作列表。

我们可以直接修改对象的 hits 列表，但是 React 并不推荐这样做，因为`React拥护不可变数据结构`。因此你不应该改变一个对象，更好的做法是基于现在拥有的资源来创建一个新的对象。这样就没有任何对象被改变了。这样做的好处是数据结构将保持不变，因为你总是返回一个新对象，而之前的对象保持不变。

因此你可以用 JavaScript ES6 中的 Object.assign() 函数来到达这样的目的。它把接收的第一个参数作为目标对象，后面的所有参数作为源对象。然后把所有的源对象合并到目标对象中。只要把目标对象设置成一个空对象，我们就得到了一个新的对象。这种做法是拥抱不变性的，因为没有任何源对象被改变。

```js
const updatedHits = { hits: updatedHits };
const updatedResult = Object.assign({}, this.state.result, updatedHits);
```

> Object.assign 是浅拷贝，属性被后续参数中具有相同属性的其他对象覆盖，继承属性和不可枚举属性是不能拷贝的

上述已经是一个解决方案了。但是在 JavaScript ES6 以及之后的 JavaScript 版本中还有一个更简单的方法。那就是使用扩展符...，当使用它时，数组或对象中的每一个值都会被拷贝到一个新的数组或对象。

使用扩展运算符如下：

```js
const updatedHits = this.state.result.hits.filter(isNotId);
this.setState({
  result: { ...this.state.result, hits: updatedHits }
});
```

## 条件渲染

其实就是在 render 中使用逻辑判断代码而已。

1. 三目运算符 true ? JSX : null
2. 逻辑运算符 true && JSX

## 客户端缓存

其实思路比较简单，简单描述如下：

1. 状态存储结果值，为 K-V 键值对的格式
2. 如果结果中 K 存在，则直接返回上次的结果，否则发送请求

## 错误处理

在 React 中处理错误的基础知识，也就是本地状态和条件渲染。本质上来讲，错误只是 React 的另一种状态。当一个错误发生时，你先将它存在本地状态中，而后利用条件渲染在组件中显示错误信息。

# 代码组织和测试

如何保证在一个规模增长的应用中代码的可维护性，我们需要去了解如何去组织代码，以便在构建你的工程目录和文件时时遵循最佳实践。了解如何通过测试提高代码的健壮性。

## ES6 模块：Import 和 Export

在 JavaScript ES6 中你可以从模块中导入和导出某些功能。这些功能可以是函数、类、组件、常量等等。基本上你可以将所有东西都赋值到一个变量上。模块可以是单个文件，或者一个带有入口文件的文件夹。

import 和 export 语句可以帮助你在多个不同的文件间共享代码。在此之前，JavaScript 生态中已经有好几种方案了。从 JavaScript ES6 后，现在是一种原生的方式了。

此外这些语言还有利于代码分割。代码风格就是将代码分配到多个文件中去，以保持代码的重用性和可维护性。前者得以成立是因为你可以在不同的文件中导入相同的代码片段。而后者得以成立是因为你维护的代码是唯一的代码源。

最后但也很重要的是，它能帮助你思考代码封装。不是所有的功能都需要从一个文件导出。其中一些功能应该只在定义它的文件中使用。一个文件导出的功能是这个文件公共 API。只有导出的功能才能被其他地方重用。这遵循了封装的最佳实践。

* 命名的导出：你可以导出一个或者多个变量，可以用对象的方式导入另外文件的全部变量`import * as object`。
* 导入可以有一个别名`as`
* default 语句
  * 为了导出和导入单一功能
  * 为了强调一个模块输出 API 中的主要功能
  * 这样可以向后兼容 ES5 只有一个导出物的功能
  * 在导入 default 输出时省略花括号。
  * 只能有一个默认的导出

### import 深入

基础语法

```js
import defaultExport from "module-name";
import * as name from "module-name";
import { export1 , export2 as alias2 , [...] } from "module-name";
import defaultExport, { export [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
```

> 同时使用默认语法与命名空间导入或命名导入，在这种情况下，默认导入将必须首先声明

### export 深入

基础语法

```js
export { name1, name2, …, nameN };
export { variable1 as name1, variable2 as name2, …, nameN };
export let name1 = …, name2 = …, …, nameN; // also var, const
export default expression;
export { name1 as default, … };
export * from …; // 不会导出已导入模块中的默认导出
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
```

如果需要导出默认值，请使用下列代码：

```js
import mod from "mod";
export default mod;
```

## 代码组织与 ES6 模块

一旦你的应用增长，你应该考虑将这些组件放到多个模块中去，只有这种方式你的应用才能扩展。在这里推荐一种模块。

* 抽象组件资源到特定文件夹
  * 文件名中的 index 名称表示他是这个文件夹的入口文件。这是一个命名共识，你也可以使用你习惯的命名。在这个模块结构中，一个组件被 JavaScript 文件中组件声明，样式文件，测试共同定义。
* 抽象 components 文件夹存放文件
* 抽象 constants 文件夹存放常量

当你使用 index.js 这个命名共识的时候，你可以在相对路径中省略文件名。

但是 index.js 文件名称后面发生了什么？这个约定是在 node.js 世界里面被引入的。index 文件是一个模块的入口。它描述了一个模块的公共 API。外部模块只允许通过 index.js 文件导入模块中的共享代码。

考虑用下面虚构的模块结构进行演示，假设你有 Buttons 文件夹，下面有文件 index.js，SubmitButton.js，SaveButton.js，CancelButton.js，这个 Buttons/ 文件夹有多个按钮组件定义在了不同的文件中。每个文件都 export default 特定的组件，使组件能够被 Buttons/index.js 导入。Buttons/index.js 文件导入所有不同的表现的按钮，并将他们导出作为模块的公共 API。

```js
// index.js
import SubmitButton from "./SubmitButton";
import SaveButton from "./SaveButton";
import CancelButton from "./CancelButton";

export { SubmitButton, SaveButton, CancelButton };

// 导入Button
import { SubmitButton, SaveButton, CancelButton } from "../Buttons";

// 在这些约束下，通过其他文件导入而不是通过 index.js 模块的话会是糟糕的实践。这会破坏封装的原则。

import SubmitButton from "../Buttons/SubmitButton"; // 糟糕的实践，不要这样做
```

## 快照测试和 Jest

在编程中测试代码是基本，并应该被视为必不可少的。你应该想去保持高质量的代码并确保一切如预期般工作。

测试金字塔。其中有端到端测试，集成测试和单元测试。

* 单元测试用来测试一块独立的小块代码。它可以是被一个单元测试覆盖的一个函数。
* 集成测试可以覆盖验证是否这些单元组如预期般工作。
* 端到端测试是一个真实用户场景的模拟。可能是自动地启动一个浏览器，模拟一个用户在 Web 应用中的登录流程。单元测试相对来说快速而且易于书写和维护，端到端测试反之。

> 你需要很多的单元测试去覆盖代码中不同的函数。然后，你需要一些基础测试，去覆盖最重要的函数功能的联动，是否如预期一样工作。最后但也很重要的是，你可能需要一点点端到端测试去模拟你 Web 应用程序中的关键情境。

React 中测试的基础是组件测试，基本可以视作单元测试，还有部分的快照测试。在后面的章节中管理组件相关的测试需要用到一个叫 `Enzyme` 的库。本章中，你会主要关注另外一种测试：快照测试。这里正好引入 `Jest`。

> Jest 是一个在 Facebook 使用的测试框架。在 React 社区，它被用来做 React 的组件测试。幸好 create-react-app 已经包含了 Jest，所以你不需要担心启动配置的问题。

### Jest

Jest 赋予你写快照测试的能力。这些测试会生成一份渲染好的组件的快照，并在作和未来的快照的比对。当一个未来的测试改变了，测试会给出提示。你可以接受这个快照改变，因为你有意改变了组件实现，或者拒绝这个改变并要去调查错误的原因。快照测试可以非常好地和单元测试互补，因为这仅会比对渲染输出的差异。这并不会增加巨额的维护成本，因为只有在你有意改变组件中渲染输出的时候，才需要接受快照改变。

> it、describe、test

Jest 将快照保存在一个文件夹中。只有这样它才可以和未来的快照比对。此外这些快照也可以通过一个文件夹共享。

当你写快照之前，可能需要安装一个工具库。

```
npm install --save-dev react-test-renderer
```

一旦你改变了 App 组件中的 render 块的输出，这个测试应该会失败。然后你可以决定是否需要更新快照，或去调查 App 组件。

基本上 renderer.create() 函数会创建一份你的 App 组件的快照。它会模拟渲染，并将 DOM 存储在快照中。之后，会期望这个快照和上传测试运行的快照匹配。使用这种方式，可以确保你的 DOM 保持稳定而不会意外被改变。

> 快照测试常常就保持这样。只需要确保组件输出不会改变。一旦输出改变了，你必须决定是否接受这个改变。否则当输出和期望输出不符合时，你需要去修复组件。

### 单元测试和 Enzyme

Enzyme 是一个由 Airbnb 维护的测试工具，可以用来断言、操作、遍历 React 组件。你可以用它来管理单元测试，在 React 测试中与快照测试互补。

安装(create-react-app 不默认包含)

```
npm install --save-dev enzyme react-addons-test-utils enzyme-adapter-react-16
```

Enzyme API 中总共有三种渲染机制。你已经知道了 shallow()，这里还有 mount() 和 render() 方法。这两种方式都会初始化父组件和所有的子组件。此外 mount() 还给予你调用组件生命周期的方法。但是什时候该使用哪种渲染机制呢？这里有一些建议：

* 不论怎样都优先尝试使用浅渲染（shallow()）
* 如果需要测试 componentDidMount() 或 componentDidUpdate()， 使用 mount()
* 如果你想测试组件的生命周期和子组件的行为，使用 mount()
* 如果你想测试一个组件的子组件的渲染，并且不关心生命周期方法和减少些渲染的花销的话，使用 render()

## 组件接口和 PropTypes

你可能知道 TypeScript 或者 Flow 在 JavaScript 中引入了类型接口。一个类型语言更不容易出错，因为代码会根据它的程序文本进行验证。编辑器或者其他工具可以在程序运行之前就捕获这些错误，可以让你的应用更健壮。

本书中不会为你介绍 Flow 或者 Typescript，但是有另外一种简洁的方式可以在组件中检查类型。React 有一种内建的类型检查器来防止出现 Bug。你可以使用 PropTypes 来描述你的组件接口。所有从父组件传递给子组件的 props 都会基于子组件的 PropTypes 接口得到验证。

安装和导入 PropTypes

```
npm install prop-types
import PropTypes from 'prop-types';
```

使用

```js
Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node
};
```

基础的基本类型和复杂对象 PropTypes 有：

* PropTypes.array
* PropTypes.bool
* PropTypes.func
* PropTypes.number
* PropTypes.object
* PropTypes.string

有另外两个 PropTypes 用来定义一个可渲染的片段（节点）。比如一段字符串，或者一个 React 元素。

* PropTypes.node
* PropTypes.element

现在为 Button 定义的所有 PropTypes 都是可选的。参数可以为 null 或者 undefined。但是对于那么几个需要强制定义的 props，你可以标记这些 props 是必须传递给组件的。直接添加.isRequired 即可。

我们可以给元素定义的更加明确

```js
Table.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      objectID: PropTypes.string.isRequired,
      author: PropTypes.string,
      url: PropTypes.string,
      num_comments: PropTypes.number,
      points: PropTypes.number
    })
  ).isRequired,
  onDismiss: PropTypes.func.isRequired
};
```

### 默认值

组件中定义默认 props 有两种方式

1. 通过 ES6 默认参数值
2. react 组件 defaultProps 属性

PropTypes 类型检查会在默认 props 生效后执行校验。

# 高级 React 组件

## 引用 DOM 元素

有时我们需要在 React 中与 DOM 节点进行交互。ref 属性可以让我们访问元素中的一个节点。通常，访问 DOM 节点是 React 中的一种反模式，因为我们应该遵循它的声明式编程和单向数据流。但是在某些情况下，我们仍然需要访问 DOM 节点。官方文档提到了三种情况：

* 使用 DOM API（focus 事件，媒体播放等）
* 调用命令式 DOM 节点动画
* 与需要 DOM 节点的第三方库集成

通常，无状态组件和 ES6 类组件中都可以使用 ref 属性。简单例子如下

```js
<input
  type="text"
  value={value}
  onChange={onChange}
  ref={node => {
    this.input = node;
  }}
/>
```

## 高阶组件

高阶组件（HOC）是 React 中的一个高级概念。HOC 与高阶函数是等价的。它接受任何输入 - 多数时候是一个组件，也可以是可选参数 - 并返回一个组件作为输出。返回的组件是输入组件的增强版本，并且可以在 JSX 中使用。

HOC 可用于不同的情况，比如：准备属性，管理状态或更改组件的表示形式。其中一种情况是将 HOC 用于帮助实现条件渲染。

有一个惯例是用 “with” 前缀来命名 HOC。条件渲染是 HOC 的一种绝佳用例。
