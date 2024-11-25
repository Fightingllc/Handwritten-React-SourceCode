/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Morning
 * @Date: 2024-11-25 20:27:03
 * @LastEditors: Morning
 * @Motto: 要有梦想，即使遥远
 * @LastEditTime: 2024-11-25 23:15:53
 */
import { MyReact } from "../MyReact";

const element = (
  <h1 title="foo">
    Hello
    <a>测试</a>
  </h1>
);

console.log("element: ", element);

const container = document.getElementById("root");
// container.appendChild(node);
MyReact.render(element, container);
