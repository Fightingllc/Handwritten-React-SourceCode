/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Morning
 * @Date: 2024-11-25 20:27:03
 * @LastEditors: Morning
 * @Motto: 要有梦想，即使遥远
 * @LastEditTime: 2024-11-25 21:51:21
 */
import React from 'react'; 
// 使用jsx语法，创建一个React元素（这个jsx语法被Babel编译成React.createElement的形式）
const element = <h1 title="foo">Hello</h1>;
// console.log('element: ',element);

// element.type 对应'h1'(即element的类型) 创建了一个新的Dom元素节点node
const node = document.createElement(element.type); // node --> <h1></h1>
// 设置node元素的title属性为element.props.title -> 'foo'
node['title'] = element.props.title; // node --> <h1 title="foo"></h1>

// 创建一个空的文本节点text
const text = document.createTextNode('');
// 将 element.props.children 设置为 "Hello"
text['nodeValue'] = element.props.children;

// 将刚才创建的文本节点 text 添加到 node 里，即 <h1> 元素中
node.appendChild(text); // node --> <h1 title="foo">Hello</h1>

// 将生成的 DOM 元素插入到页面中
const container = document.getElementById('root');
container.appendChild(node);
// React.render(element, container);