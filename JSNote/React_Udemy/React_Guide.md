# React



## **J**avaScript **S**yntax e**X**tension === JSX

this extension allows developers to describe and create HTML elements by writing HTML markup code inside of JavaScript files.

With React, you write declarative code(声明式编程)， which means you define the target HTML structure component, don't have to handle DOM directly.  Only care what to do, don't have to worry how to do. For example, SQL is also declarative code. But JSX is  a feature that's not supported by browsers. So before it reaches the browser, It's transformed behind the scenes(ReactDOM will be responsible for outputting the those component's content on the screen) to code that does work in browser.



## Component

Name starts with uppercase character, Multi-word should be written in PascalCase(e.g."MyHeader"). 

The function must return a actual html that can be rendered('displayed on the screen') by React. Remember you're not calling these component functions yourself in you code, instead you are using them as html elements, and under the hood, React will call the actual functions.

![image-20231101185026195](C:\Users\simon.cheng\AppData\Roaming\Typora\typora-user-images\image-20231101185026195.png)

### Built-in Components

Like header,image,div and so on. Actually are those HTML elements 

### Custom Components

Name starts with uppercase, wraps built-in or other components. Would are executed as functions by React, then takes the returned value, the returned JSX code and start analyzing that code until it ends up with only built-in elements, which are then rendered to the screen.  That's how React works.

![image-20231101182914328](C:\Users\simon.cheng\AppData\Roaming\Typora\typora-user-images\image-20231101182914328.png)

## Dynamical value

Outputing dynamic value with curly braces, but not wrapped by quotes. we can use that same syntax to load our images.

import image into JavaScript file is not something you can normally do in JavaScript, but here would work, because of that same build process in React, would also transform it. such as import ".css".

## Making components reusable  with Props

React allows you to pass data to components via a concept called "Props", Therefore, React will pass a value for this props parameter to this function when it calls it.

![image-20231101115046617](C:\Users\simon.cheng\AppData\Roaming\Typora\typora-user-images\image-20231101115046617.png)

## The special children Prop

Children is a prop that is not set with help of attributes like others(title,description above just like a html attribute when rendered) . Instead this children prop here simply refers to the content between your component tags. so we don't set children like that. 

![image-20231101183507457](C:\Users\simon.cheng\AppData\Roaming\Typora\typora-user-images\image-20231101183507457.png)

## React to Events

In react, you could add event listeners to elements by adding a special attribute or called props to those built-in elements. Those build-in elements (Native HTML elements) support many on-something props, such as 'onClick'. and the value for this onClick prop here or any actually for any event prop, is a function. So the value you should provide here should be a function. Then we can define this function. (50-51)

## Managing State

import  { useState } from 'react'

this is so-called react hook. All these functions that starts with use in React projects are React Hooks. They are technically regular functions, but they must only be called inside of React component functions or inside of other React Hooks. and only call them on the top level, not inside of some other inner functions.

useState does accept an argument, which is basically the default value you want React to store and you want react to use when this component is first be rendered.

![image-20231101205841703](C:\Users\simon.cheng\AppData\Roaming\Typora\typora-user-images\image-20231101205841703.png)

![image-20231101210359610](C:\Users\simon.cheng\AppData\Roaming\Typora\typora-user-images\image-20231101210359610.png)

## Rending Content Conditionally

&& the logical AND operator will actually output the value that comes after it, if the condition in front of it is true.

## Outputting List Data Dynamically

use array.map function to iterate data.

## Working with Fragments

You can't return two values at any time, that is why we need one wrapping element in the component function so that technically we return one value.  So we would have an extra 'div' element in your DOM simply is unnecessary. And that is why React gives you an alternative. It gives you a special fragment component, which you can use as a wrapper if you do need a root component to wrap some sibling components but you don't wanna render an actual element to the screen. you can use this fragment components here instead of the div.

