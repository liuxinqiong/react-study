React 进阶

# 高阶组件

在高阶组件的实践中，犯了一个绝大多数初学者都会犯的问题，直接在传入的组件上绑定事件，事件处理函数位于高阶组件中，却发现事件始终无法响应。

高阶组件是 react 应用中很重要的一部分，最大的特点就是重用组件逻辑。它并不是由 React API 定义出来的功能，而是由 React 的组合特性衍生出来的一种设计模式。

最基础的用法

```js
render(){
    return <ComposeComponent {...this.props}/>
}
```

第一件事情，组件虽被你高阶组件加强过，但是基础的用法还是得维持不变，不然就徒增复杂度，所以{...this.props}的数据可以说是必不可少的。

常用场景

* 属性代理
  * 操作 props
  * refs 获取组件实例
  * 抽离 state
* 反向继承
  * 渲染劫持

约束点

* 注意高阶组件不会修改子组件，也不拷贝子组件的行为。高阶组件只是通过组合的方式将子组件包装在容器组件中，是一个无副作用的纯函数
* 要给 hoc 添加 class 名，便于 debugger。
* 静态方法要复制
* refs 不会传递。 意思就是 HOC 里指定的 ref，并不会传递到子组件，如果你要使用最好写回调函数通过 props 传下去。
* 不要在 render 方法内部使用高阶组件。
* 使用 compose 组合 HOC

```js
const compose = (...funcs) => component => {
  if (funcs.lenght === 0) {
    return component;
  }
  const last = funcs[funcs.length - 1];
  return funcs.reduceRight((res, cur) => cur(res), last(component));
};

const WrappedComponent = compose(addFuncHOC, addStyleHOC)(Usual);
```

回到一开始的事件不会响应的问题，高阶组件应该是一个无副作用的纯函数。如果事件响应了的话，因为子组件中本身就定义了此事件和响应的 handle 处理器，是不是就代表我们引入了副作用呢？高阶组件的作用应该是增强了某种能力（一些通用的逻辑），最终是否使用这种能力取决于组件本身，通常通过 props 进行通信。

# Render Props

高阶组件的抽象方式是增强特定组件，在 JSX 中使用被装饰过的组件名称，有没有这样一种方式，创建一个可在 JSX 中使用的组件，达到此组件内部的组件进行增强呢？答案是可以的，这里演示一下，例如我们有 mouse 组件：

```js
class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: "100%" }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}
```

使用时如下，我们便增强了 Cats 组件，

```js
<Mouse render={mouse => <Cat mouse={mouse} />} />
// 当你使用Render Props时, 每次传入的render都是一个新的函数, 所以每次浅比较都会导致重新渲染。为了避免这个问题, 你可以将prop定义为一个实例方法
// <Mouse render={this.renderTheCat} />
```

此时 Cat 组件可以实现 Mouse 实现的功能啦

```js
class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img
        src="/cat.jpg"
        style={{ position: "absolute", left: mouse.x, top: mouse.y }}
      />
    );
  }
}
```

> 虽然这个技巧或者说模式(Pattern)叫 Render Props, 但是并不一定要使用 render 来传递渲染函数, 你甚至可以使用 children

# 重新渲染

React 怎么判断什么时候该重新渲染组件？

只有在组件的 state 变化时才会出发组件的重新渲染。状态的改变可以因为 props 的改变，或者直接通过 setState 方法改变。组件获得新的状态然后 React 决定是否应该重新渲染组件。不幸的是，React 难以置信简单地将默认行为设计为每次都重新渲染。

但实际开发中，有时候状态改变并不会导致视图改变，这时候我们就需要告诉可以跳过重新渲染，这样可以节省性能。这里我们需要重写 shouldComponentUpdate 方法。

shouldComponentUpdate 方法默认返回 true，这就是导致每次更新都重新渲染的原因。但是你可以在需要优化性能时重写这个方法来让 React 更智能。比起让 React 每次都重新渲染，你可以告诉 React 你什么时候不想触发重新渲染。

当你使用 shouldComponentUpdate 方法你需要考虑哪些数据对与重新渲染重要。

假设我们只关心 title 和 done 属性的改变，我们可以这么做

```js
shouldComponentUpdate(nextProps) {
    const differentTitle = this.props.title !== nextProps.title;
    const differentDone = this.props.done !== nextProps.done
    return differentTitle || differentDone;
}
```

> 当子组件的的 state 变化时, 返回 false 并不能阻止它们重渲染。
