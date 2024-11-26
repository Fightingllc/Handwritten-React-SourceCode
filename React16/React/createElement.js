/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Morning
 * @Date: 2024-11-25 22:26:19
 * @LastEditors: Morning
 * @Motto: 要有梦想，即使遥远
 * @LastEditTime: 2024-11-25 22:34:44
 */
// const element = React.createElement('h1',{ title: 'foo' }, 'Hello');

export function createElement(type, props,...children) {
    return {
        type,
        props: {
            ...props,
            children: children.map(child => {
                return typeof child === 'object' ? child : createTextElement(child)
            })
        }
    }
}

function createTextElement(text) {
    return {
        type: 'TEXT_ELEMENT',
        props: {
            nodeValue: text,
            children: []
        }
    }
}
