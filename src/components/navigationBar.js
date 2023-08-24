const template = document.createElement("template");
template.innerHTML = `<h4>hello I'm bar</h4>`;

class NavigationBar extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }
}

window.customElements.define('navigation-bar', NavigationBar);