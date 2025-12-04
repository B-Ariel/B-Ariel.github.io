// Rodapé
const CurrentYear = new Date().getFullYear();
const MyFooter =
`
<div id="main-footer">
    <p>
        Licença MIT
        <br>
        Direitos autorais (©)
        <br>
        2025 - ${CurrentYear}
        <br>
        Breno Ariel
    </p>
</div>

<div id="secondary-footer" class="links-normal">
    <p>
        Outras informações:
        <br>
        <a href="assets/components/web-component/web-component.html" target="_self">
            componente web
        </a>
        <br>
        sitemap
    </p>
</div>
`;

document.getElementById("MyFooter").innerHTML = MyFooter;