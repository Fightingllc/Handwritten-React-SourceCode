
/**
 * 创建 DOM 元素：从虚拟 DOM 映射到真实 DOM。
 * 设置属性：将虚拟 DOM 的属性设置到真实 DOM 上。
 * 递归子节点：将所有子节点递归渲染并插入到当前节点。
 * 挂载到父节点：最终将当前节点插入到指定的 container 中。
 * @param {*} element 
 * @param {*} container 
 */
export function render(element,container) {
    //  判断节点类型
    const dom = 
    element.type == 'TEXT_ELEMENT'
    ? document.createTextNode(element.props.nodeValue || '')
    : document.createElement(element.type);

    // 筛除element.props为children的属性
    const isProperty = (key) => key !== 'children';

    // 只要DOM的属性 id classname 等，使用Object.keys获取所有属性名
    Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => {
        // 设置到Dom节点上
        dom[name] = element.props[name];
    });

    // 递归渲染子节点 同步的，不能被中断的
    // 将子虚拟 DOM 转换为子 DOM，并插入到当前 DOM 节点中。
    element.props.children.forEach((child) => render(child, dom));
    // 将已经生成的 DOM 节点插入到父节点（container）中
    container.appendChild(dom);
}

