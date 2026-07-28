/*----------*----------*----------*/

// Componentes Web para o header
// Será inserido o cabeçalho
class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <h1>
                Seja muito bem-vindo(a) ao meu site!😎
            </h1>
            <h2>
                O espaço onde guardo minhas anotações 🤓☝️
            </h2>

            <nav class="links-header">
                <a href="index.html" target="_self">
                    Página inicial
                </a>
                <a href="src/about.html" target="_self">
                    Sobre mim
                </a>
                <a href="src/my-links.html" target="_self">
                    Meus links
                </a>
            </nav>
        `;
    }
}

customElements.define("app-header", AppHeader);

/*----------*----------*----------*/