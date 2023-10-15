import "../scss/style.scss";

function Component(text) {
    const element = document.createElement('h1');
    element.textContent = text;
    
    return element;
}

document.body.prepend(Component('Проект собран на Webpack!'))