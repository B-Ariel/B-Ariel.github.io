/*----------*----------*----------*/

// Componentes Web para o footer
// Será inserido o rodapé
class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="footer-main">
                <h4>
                    Direitos autorais &copy;
                </h4>

                <p>
                    Licença MIT
                </p>
                <p>
                    <time datetime="2025">2025</time>
                </p>
                <p>
                    Breno Ariel
                </p>
            </section>

            <section id="footer-secondary">

            <h4>
                Links interessantes:
            </h4>

                <nav class="links-footer">
                    <ul>
                        <li>
                            <a href="assets/components/web-component/sketch.html" target="_self">
                                Esboço web
                            </a>
                        </li>
                        <li>
                            <a aria-disabled="true">
                                em breve... sitemap
                            </a>
                        </li>
                        <li>
                            <a aria-disabled="true">
                                em breve... projetos
                            </a>
                        </li>
                        <li>
                            <a aria-disabled="true">
                                em breve... tutoriais
                            </a>
                        </li>
                        <li>
                            <a aria-disabled="true">
                                em breve... jogos
                            </a>
                        </li>
                    </ul>
                </nav>

            </section>
        `;

    }
}

customElements.define("app-footer", AppFooter);

/*----------*----------*----------*/