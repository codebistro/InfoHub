

# React



## **J**avaScript **S**yntax e**X**tension === JSX

This extension allows developers to describe and create HTML elements by writing HTML markup code inside of JavaScript files. With React, you write declarative code(声明式编程)， which means you define the target HTML structure component, don't have to handle DOM directly.  Only care what to do, don't have to worry how to do. For example, SQL is also declarative code. But JSX is  a feature that's not supported by browsers. So before it reaches the browser, It's transformed behind the scenes(ReactDOM will be responsible for outputting the those component's content on the screen) to code that does work in browser.

Vite" is a modern build tool used for web development, Vite can transform JSX (JavaScript XML) code. Vite is designed to handle JSX syntax commonly used in React applications. It has built-in support and configurations that allow developers to  write JSX code directly within their Vue.js or React projects. That is why we could write JSX file even without babel in overall project.

## Hoisted Function

Function declarations are hoisted, meaning you can use them before they are defined in the code. This allows you to use the function before it appears in the code.

Function declarations are often used for defining reusable functions that can be called from anywhere within their scope.

```
// Function call before declaration
sayHello(); // This works due to hoisting

// Function declaration 函数声明的创建方式，有一个明确的标识符名称
function sayHello() {
  console.log('Hello!');
}
```

```
// This won't work due to hoisting limitations with function expressions
sayHi(); // Error: sayHi is not a function

// Function expression 函数表达式，函数表达式是将函数赋值给变量，函数本身可以是匿名的
var sayHi = function() {
  console.log('Hi!');
};
匿名函数的特点是没有具体的函数名称，它们通常在需要时直接定义并使用，不会被其他代码引用。这样的函数可以方便地用作临时函数或者简短的逻辑片段，比如作为回调函数传递给其他函数，或在特定场景下使用。
箭头函数也可以是匿名的。它们使用 => 语法，可以更简洁地定义函数。箭头函数通常在回调函数或需要简短函数定义的地方使用。
```

#### 回调函数

<https://chinese.freecodecamp.org/news/javascript-callback-functions/>

一个普通函数，可以传入数据，用相同的方法对不同的数据进行处理；而回调函数相当于在函数中传入一个算法（函数），用不同的算法对相同的数据进行处理。

```
function doSomethingAsync(callback) {
  setTimeout(() => {
    try {
      // 假设在这里发生了一个错误
      throw new Error("Something went wrong!");
    } catch (err) {
      // 捕捉错误并将其传递给回调函数
      callback(err);
    }
  }, 1000);
}

// 定义回调函数（一个算法）
function errorCallback(err) {
  console.error("Error:", err.message);
}

// 定义下一个回调函数（另一个算法）
function logCallback(err) {
  console.log("Error:", err.message);
}

doSomethingAsync(errorCallback);
doSomethingAsync(logCallback);
doSomethingAsync((errs) => {
  console.log("Error:", errs.message);
});
```

经过以上的调用，我们成功地延迟了errorCallback（）和logCallback（）函数的执行，而且是在只有抛出错误的情况下才会运行，因为这两个函数为同步函数，top level的函数，也是hoisted function，如果不放在异步web api中调用，直接调用的话，是不会达到延迟运行的效果的。这种方式**使得回调函数能够在某些特定的条件下被触发执行**，使代码更加灵活，特别是在处理异步操作、事件处理或需要延迟执行的场景中。

## Component

Name starts with uppercase character, Multi-word should be written in CamelCase(e.g."MyHeader"). 

The function must return a actual html that can be rendered('displayed on the screen') by React. Remember you're not calling these component functions yourself in you code, instead you are using them as html elements, and under the hood, React will call the actual functions.

![image-20231101185026195](C:\Users\simon.cheng\AppData\Roaming\Typora\typora-user-images\image-20231101185026195.png)

### Built-in Components

Like header,image,div and so on. Actually are those Native HTML elements 

### Custom Components

Name starts with uppercase, wraps built-in or other components. Would are executed as functions by React, then takes the returned value, the returned JSX code and start analyzing that code until it ends up with only built-in elements, which are then rendered to the screen.  That's how React works.

There should be have something followed after return keyword, can't restart a new line and without any code after return, or it will be unreachable because JavaScript would automatically add semicolon after return keyword, which result in unreachable or unreadable code.

![image-20231101182914328](C:\Users\simon.cheng\AppData\Roaming\Typora\typora-user-images\image-20231101182914328.png)

## Dynamical value

Outputting dynamic value with curly braces, but not wrapped by quotes. we can use that same syntax to load our images.

import image into JavaScript file is not something you can normally do in JavaScript, but here would work, because of that same build process in React, would also transform it. such as import ".css".

## Making components reusable  with Props

React allows you to pass data to components via a concept called "Props", Therefore, React will pass a value for this props parameter to this function when it calls it.

![image-20231101115046617](C:\Users\simon.cheng\AppData\Roaming\Typora\typora-user-images\image-20231101115046617.png)

## The special children Prop

Children is a prop that is not set with help of component attributes like others(title,description above just like a html attribute when rendered) . Instead this children prop here simply refers to the **content** **between your component** tags. so we don't set children like that. 

**非自闭合标签：**

- 当组件需要包含内容或子组件时，需要使用成对的开闭标签，如 `<ComponentName>.如果放置内容，有children元素.</ComponentName>`。

![image-20231101183507457](C:\Users\simon.cheng\AppData\Roaming\Typora\typora-user-images\image-20231101183507457.png)

## React to Events

In react, you could **add event listeners** to elements by adding a special attribute or called props to those **built-in** elements. Those build-in elements (Native HTML elements) support many on-something props, such as 'onClick'. and the value for this on Click prop here or any actually for any event prop, is a function, actually also is a variable. So the value you should provide here should be a function. Then we can define this function. 

```
<input type="text" onChange={(event) => handleChange('initialInvestment', event)} />
```
The onChange event handler should pass the event object to the handleChange function if you want to access the event data and the value of the input element.
```
function handleChange(fieldName, event) {
  const value = event.target.value;
  // Use `fieldName` and `value` as needed in your code
}
```

## Managing State

import  { useState } from 'react'

this is so-called react hook. All these functions that starts with use in React projects are React Hooks. They are technically regular functions, but they must only be called **inside of React component functions** or inside of other React Hooks. and only call them on the top level, not inside of some other inner functions.

useState does accept an argument, which is basically the default value you want React to store and you want react to use when this component is first be rendered, and also could be an object including all the values if there are more values you want to set.

![image-20231101205841703](C:\Users\simon.cheng\AppData\Roaming\Typora\typora-user-images\image-20231101205841703.png)

![image-20231101210359610](C:\Users\simon.cheng\AppData\Roaming\Typora\typora-user-images\image-20231101210359610.png)

Now with this useState Hook, we have a way of telling React that this component function must be executed again. and since the app component uses the others component inside of it. Those component function was also executed again.

Once state is updated, now what happens is that the component function which this state belongs will be executed again.

1. **新的状态值**：`setCount(newValue)`，其中 `newValue` 是你想要将状态更新为的新值。例如：`setCount(10)` 将 `count` 的状态更新为 `10`。
2. **函数作为参数**：`setCount(previousValue => previousValue + 1)`，在这种情况下，`setCount` 接收一个函数作为参数，该函数返回新的状态值。这个函数的参数 `previousValue` 是之前的状态值。React 会将这个函数调用并传递当前的状态值，然后根据返回的结果更新状态。这种方式对于状态更新依赖于之前的状态值很有用，避免了因为异步更新状态时，获取到旧的状态值的问题。

## Rending Content Conditionally

&& the logical AND operator will actually output the value that comes after it, if the condition in front of it is true. but you also see this 

## Outputting List Data Dynamically

use array. Map function to iterate data.

## Working with Fragments

You can't return two values at any time, that is why we need one wrapping element in the component function so that technically we return one value.  So we would have an extra 'div' element in your DOM simply is unnecessary. And that is why React gives you an alternative. It gives you a special fragment component, which you can use as a wrapper if you do need a root component to wrap some sibling components but you don't wanna render an actual element to the screen. you can use this fragment(分段) components here instead of the div.

## Splitting Components

Putting different features into different components is always a good idea. Therefore, we could use state in the specific component, so only reload that component whenever that component updates, no need to update the app component anymore.

## Forwarding props/Proxy props

```
export default function Section({title, children, ...props}) {
	return (
	  <section {...props}>    //here we're using it to spread some data onto element
	    <h2>{title}</h2>
	    {children}
	  </section>
	)
}
```

This JavaScript feature is called 'Rest property'. This syntax groups all remaining object properties into a new object.(named "props" in this case).  This will now basically ensure that all extra props that might be set on our custom section will be forwarded to this built-in section element. This can be a very useful pattern.

## JSX Slots

"slots" allow you to define placeholders in a component's template where you can insert dynamic content between component tags when using that component. just like children

>  In my opinion, It will be easy understood if take it as an attribute instead of slots,need to double confirm

JSX elements are in the end just regular values that can be used like values in your code.

## Setting Component Types Dynamically

We could pass a component identifier as a value for a prop, and then you are using this identifier inside of a component to dynamically render different HTML elements. Actually it simply about receiving a **component identifier** as a value for a prop. And the only two important things to remember here is that prop then must be usable as a custom component in the receiving component.

If you wanna pass the identifier for a custom component as a prop value. You are not calling the function and you are not using it with angle brackets. Instead, you're just using the function name if you wanna pass the identifier for a custom component as a prop value.

## Setting Default Prop Values

...

...

## New Project Tic-Tac-Toe

When updating your state based on the previous value of that state, you should pass **a function to that state updating function** instead of that new state value you wanna have. Because this function which you pass here will be called by react and it **will automatically get the current state value**. That is previous value here as an input. So we could accept a parameter that could be named editing. should then return the new state you wanna set.

![image-20231103084014043](C:\Users\simon.cheng\AppData\Roaming\Typora\typora-user-images\image-20231103084014043.png)

```
import { useState } from 'react';

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  let playerName = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = <input type="text" required value={name} />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
```

## Update object Immutably

In an immutable way, which simply means you create a copy of the old state, so a new object or a new array first. and then you just change that copy instead of that existing object or array. And the reason for that recommendation is that if your state is an object or array, you are dealing with a reference value in JavaScript. And therefore if you update an object or array directly.  You would be updating the old value in-memory immediately. And this can again lead to strange bugs or side  effects if you have multiple places in your application that are using that object or array.

利用展开运算符，创建新的对象，是一种shallow copy, 创建了一个新的对象。对于浅拷贝后的对象来说，在第一层级上，新创建的对象与原始对象是独立的，但对于嵌套对象或数组等引用类型的属性，它们会共享相同的引用地址。

```
const originalObject = {
  a: 1,
  nestedObj: {
    b: 2
  }
};

// 浅拷贝
const shallowCopy = { ...originalObject };

// 修改浅拷贝后的对象中的属性
shallowCopy.a = 5;
shallowCopy.nestedObj.b = 10;

console.log(originalObject.a); // 输出 1，原始对象的属性不受影响
console.log(originalObject.nestedObj.b); // 输出 10，原始对象的嵌套对象属性受到影响


```

```
const array = [1, 2, 3, 4, 5];
const removed = array.splice(1, 2); // 从索引 1 的位置开始删除 2 个元素
console.log(array); // 输出: [1, 4, 5]
console.log(removed); // 输出: [2, 3] 被删除的元素

```



![image-20231103223426480](C:\Users\simon.cheng\AppData\Roaming\Typora\typora-user-images\image-20231103223426480.png)

## Lifting State Up

The app component can pass the information which player is active to both player component and game broad component via props.

Should review this again. Ancestor passes the state value **via props** to the child component.

![image-20231106091415932](C:\Users\simon.cheng\AppData\Roaming\Typora\typora-user-images\image-20231106091415932.png)

## Avoid intersecting state

Adding a new state to store kind of the same information just with a little bit of extra data is something you typically wanna avoid as a React developer. That will not be always easy and will also require some practise and it is not the end of the world you start managing the same data with multiple states. You should manage as little state as needed and try to derive as much information and as many values as possible from that state. **Deriving(获取) state from props.**(84)

## Reducing state management 

Usually we hope get it there without managing some extra state. That's really what you should go for when writing React code. You wanna manage as little state as possible, and derive and compute as many values as needed. 



## Vanilla CSS: Advantages & Disadvantages.

![image-20231111151952833](C:\Users\simon.cheng\AppData\Roaming\Typora\typora-user-images\image-20231111151952833.png)

so what can we do about that if we wanna achieve some scoping, one solution would be to switch to **inline styles**.

![image-20231111160134496](C:\Users\simon.cheng\AppData\Roaming\Typora\typora-user-images\image-20231111160134496.png)

Therefore simply is that as a React developer, you should always look for opportunities like this. where you can either outsource reusable components that have a certain styling applied to them.

## Tailwind CSS

Tailwind css is css framework

## Debugging React APPs

Using the browser debugger & breakpoints

**Sources tab->add debugger on line by the side of menu.**

Use strictMode, which is a component  provided by React

react devtools

## Fragments

JSx has one limitation, you cann't return more than one 'root' JSX element. and you cann't store more than one 'root' JSX element in a variable.

you can just import Fragment from React<React.Fragment> </React.Fragment> or in some projects you can use some the shortcut with <></>

## Refs

If we have some inputs in a form, usually we manage what the user enters by simply keeping track of it with the state. with every keystroke, we update our state. so with every keystroke, we update the value we get by the user and we store it in our state. That is a  perfectly fine way of managing this.

But updating a state with every keystroke(按键)， when we only need it when we submit the form, sounds a bit redundant to me, that is a scenario where refs could help us, though they are not limited to that.

```
import React, { useRef } from 'react';

const MyComponent = () => {
  const inputRef = useRef(null);

  const handleFocusClick = () => {
    // 在按钮点击时将输入框聚焦
    inputRef.current.focus();
  };

  return (
    <div>
      {/* 使用 ref 关联 input 元素 */}
      <input type="text" ref={inputRef} />
      {/* 点击按钮将聚焦在输入框 */}
      <button onClick={handleFocusClick}>Focus Input</button>
    </div>
  );
};

export default MyComponent;

```

使用refs，我们可以在最终呈现的HTML元素和其他的JS代码之间建立连接

Like all React hooks,  useRef is only usable inside of functional components. **what does useRef return and what value does it take**?

It will return an object, which always has a 'current ' prop, and the 'current' prop holds the actual value that ref is connecting with. 

What is the actual value is ? it is really the actual DOM node. which you could now manipulate and do all kinds of things with. 

所以如果console.log(returnRef.current.value), 就可以看到input中输入的值。returnRef.current就是input的element dom元素.



We could connect a ref to HTML element by going to that element,  and add a special 'ref' prop here, just like the 'key' prop,that is a built-in prop which you can add to any HTML element. That is to say, you can connect any HTML element to one of you references. You will very often do that for inputs, because you wanna fetch input data, then a connection will be established. 所以当程序运行到引用的ref的时候，它就会将存储在useRef当中的值设置为native DOM 的input节点元素。简单理解就是将HTML元素关联到一个变量上。这样在其他的JS代码中，就可以对这个关联的变量监测，或者在发生变化的时候有什么动作。



Now, in general, the question is not whether refs or state is better. You can use either of the two

![image-20231127221717445](C:\Users\simon.cheng\AppData\Roaming\Typora\typora-user-images\image-20231127221717445.png)

## Modal

我们通常使用模态框（Modal）来实现类似于对话框（Dialog）的交互界面。模态框是一种覆盖(overlay)在原始页面内容之上的组件，用于显示重要的信息、收集用户输入或进行某些操作。在 React 中，可以使用各种库（如 Material-UI、React-Bootstrap、Ant Design 等）来创建模态框。以下是一个使用 React Hooks 实现简单模态框的示例.

## Portal

Portal will help us write cleaner HTML code. Modal basically is an overlay on your page. It is an overlay to the entire page. which should not be deeply nested in our native html code, and it is better to be a direct child of the body next to that root div. this is something you can achieve with portals.

1. `Modal` 组件使用 `ReactDOM.createPortal()` 将 `children` 渲染到 `modal-root` 节点中。
2. `App` 组件中包含一个 `modal-root` 的空 `div`，用于作为 `Modal` 组件的渲染目标。
3. 无论 `Modal` 组件在组件树的哪个位置，它都会被渲染到 `modal-root` 节点下。

```
import React from 'react';
import ReactDOM from 'react-dom';或者 import { createPortal } from 'react-dom'

// Modal 组件
const Modal = ({ children }) => {
  const modalRoot = document.getElementById('modal-root');

  // 使用 createPortal 将子节点渲染到 modal-root 节点上
  return modalRoot ? ReactDOM.createPortal(
    children,
    modalRoot
  ) : null;
};

// 父组件
const App = () => (
  <div>
    <h1>My App</h1>
    <Modal>
      <div>
        <h2>This is a modal dialog</h2>
        <p>Some content here...</p>
      </div>
    </Modal>
    <div id="modal-root"></div> {/* 此处定义 modal-root 节点 */}
  </div>
);

export default App;

```

## Side Effects

Side effects are tasks that don't impact the current component render cycle but need to be executed in your app in the some time, such as some callback function. So whenever you have a task that must be performed but that does not directly and instantly impact the current component render cycle, that could be called side effects.



if update the state in an async function, once state updated, function component will be re-executed again,  and then async function would be re-executed again after component executed, and then state is updated, and then function component, which result in the infinite loop.

we would use effect to solve infinite loop. use effect needs two arguments, and the first argument is a function(usually is a anonymous function) that should warp your side effect code, and the second argument is an array of dependencies of that effect function.



Because the idea behind useEffect is that this function which you pass as a first argument to useEffect will be executed by React after every component execution. If the second argument is an empty array , the effect function would only execute once. if you define the dependencies array,then React will actually take a look at the dependencies specified there, and it will only execute this effect function again if the dependency values changed. If you omit the array, will cause an infinite loop.

```
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // 模拟异步数据获取
    const fetchData = async () => {
      try {
        // 这里可以使用实际的数据获取方法，比如 fetch、axios 等
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // 调用数据获取函数
    fetchData();

    // 注意：在此处可以返回一个清理函数，用于清理 effect 所产生的副作用
    // 例如，取消订阅、清除定时器等
    return () => {
      // 清理代码
    };
  }, []); // 传递空数组作为第二个参数表示仅在组件挂载和卸载时执行一次

  return (
    <div>
      <h1>My Data:</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
```



## Context Feature

1. Commonly create a  store folder under src for context management, this is just a convention, because we can think it as state store for the entire application, ，and then create a file called a component name under this folder as you like, such as CartContext.jsx.
2. The Context feature offered by React in the end allows us to spread data into all the components that need it in a very easy and reusable way.(我们想一个component当中的数据，也 会在其他的component里面也要使用，可以将其放在app component当中，可是如果将其放在app 总的component当中，这样就会让app component 越来越庞大。所以这个时候就要使用 react context feature). 
3. but it is just about spreading data to components, not about changing any values and triggering any component updates.但如果我们在上下文provider里面，包含着触发状态更新的动作，并且何种动作对应如何更新状态。那么这样我们就可以将状态更新也进行传递，传递到其他的components当中。同时我们也可以利用reducer去更新状态。
4. We typically also want to define contextProvider component which then can be wrapped around our components to make above context defined is available to them. and will do the actual data management and state management.
5. use chindlren prop to wrap our custom component 
6. now we can start adding some logic to this component function here some state logic

```
import { createContext } from 'react';

//create such a new context object, and has a  provider property, which is actually a component
const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
});

//
export function CartContextProvider({ children }){
    return <CartContext.Provider>{children}</CartContext.Provider>
}
//both CartContextProvider and CartContext will be exported by belowing
export default CartContext;
```



```
// in app component
function App() {
  return (
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
  );
}
```

## userReducer 见example

1. useReducer hook, which also provided by react which allows us to manage more complex state. and also make it easier to move that state management logic out.
2. useReducer hook needs a reducer function as an input
3. the goal of this reducer function is to return a updated state object and action object, and this action object that will tell this function how to update this state
4. it is quite common to receive an object as a value for action, the object also has a ' type ' property.
5. and the idea simply is that we can take a look at this type ,which is part of the incoming action and then run different code for different action types
6. In the component function when we call useReducer that define how the state should be look like. because you use useReducer by passing your reducer function as a first parameter, you are not calling it, instead you are just passing a pointer at this function to useReducer, and then we pass the initial state value. so the state that should be assumed when this component renders for the first time.

## Redux and useReducer

`redux` 是一个用于 JavaScript 应用程序状态管理的库，而 `useReducer` 是 React 中的一个 hook，用于管理局部状态。它们之间存在以下区别：

1. **Redux**：
   - Redux 是一个独立的状态管理库，用于管理整个应用程序的状态。
   - 它具有一个全局的状态树（单一的状态存储），包含整个应用的状态。
   - Redux 通过 actions 和 reducers 来修改状态。Actions 是描述状态变化的对象，Reducers 是根据 actions 更新状态的函数。
   - Redux 提供了一种机制来处理复杂的状态更新和数据流，包括中间件、异步 action 等。
2. **useReducer**：
   - `useReducer` 是 React 提供的一个 hook，用于在函数式组件中管理局部状态。
   - 它允许你将状态逻辑封装在组件内部，并提供了一种能够处理复杂状态逻辑的方式。
   - `useReducer` 接受一个 reducer 函数和初始状态作为参数，并返回一个包含当前状态和 dispatch 函数的数组。
   - 当调用 dispatch 函数时，会触发 reducer 的执行，并传入当前状态和 action 对象，从而更新状态。

虽然 `useReducer` 可以用于管理局部状态，但它通常用于处理较为复杂的局部状态逻辑。而 Redux 更适用于管理全局状态和应对大型应用中的复杂状态管理需求。在一些情况下，`useReducer` 可以替代 Redux，但并不意味着它们完全相同或互相替代。选择使用 Redux 还是 `useReducer` 取决于项目的规模、复杂性和个人偏好。

## useCallBack

在 React 中，组件卸载后再次加载，使用 `useCallback` 和不使用 `useCallback` 可能会有一些区别，具体取决于组件卸载后的状态和使用方式。

#### 使用 useCallback：

- **组件卸载后重新加载**：如果在组件卸载后重新加载，使用 `useCallback` 返回的函数引用可能会保持不变，取决于其依赖项。

- **依赖项未发生变化**：如果 `useCallback` 返回的函数的依赖项在重新加载时没有发生变化，那么它会继续返回相同的函数引用。如果依赖项 `dependency1` 或 `dependency2` 在重新渲染时不发生变化，`memoizedCallback` 函数的引用将保持不变，即使组件重新渲染，函数引用也不会改变。

- **依赖项发生变化**：如果依赖项发生了变化，`useCallback` 将返回一个新的函数引用。这样就可以优化代码，减少内存的引用。

  ```
  const memoizedCallback = useCallback(
    () => {
      // ...function logic
    },
    [dependency1, dependency2]
  );
  
  ```

#### 不使用 useCallback：

- **组件卸载后重新加载**：如果组件卸载后重新加载，未使用 `useCallback` 的函数引用会重新创建，即使函数逻辑相同也会创建新的引用。
- **每次重新加载都创建新函数**：在每次重新加载时都会创建新的函数引用，除非函数逻辑或声明发生了变化。

总的来说，`useCallback` 在组件卸载后重新加载时，如果依赖项保持不变，函数引用可能会保持一致。而不使用 `useCallback` 的情况下，函数引用会在每次重新加载时都重新创建。







## Tricks

在 React 中，给列表元素提供一个唯一的标识是为了帮助 React 有效地更新 DOM。这个唯一的标识通常使用 `key` 属性来指定。虽然不是绝对必需，但是在使用列表渲染时，给每个列表项提供一个唯一的 `key` 通常是一个良好的实践。

template literal feature provided by JS by using backticks, which allow us to create a string where parts of that string are dynamic.

strickMode, every component gets rendered twice by react during development to help us catch potential bugs and errors
