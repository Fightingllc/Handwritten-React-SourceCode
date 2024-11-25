export function render(element,container) {
    if (typeof element === 'string') {
        container.appendChild(document.createTextNode(element));
        return;
    }

    const domElement = document.createElement(element.type);
    for (const child of element.children) {
        render(child, domElement);
    }

    for (const prop in element.props) {
        domElement[prop] = element.props[prop];
    }

    container.appendChild(domElement);
}