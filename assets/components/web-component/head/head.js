/*----------*----------*----------*/

// Ponto de partida para endereçamentos
const base = document.createElement("base");
base.href = "https://b-ariel.github.io/";
document.head.appendChild(base);

/*----------*----------*----------*/

// Componentes Web para o head
// Serão inseridos os metadados, títulos e links para as página
class AppHead extends HTMLElement {

    static loaded = false;
    connectedCallback() {
        if (AppHead.loaded) return;
        AppHead.loaded = true;

    const page = this.getAttribute("page");

    const pages = {
      
      // Utilitários
      bugigangas: {
        title: "Breno - Bugigangas",
        type: "website",
        url: "https://b-ariel.github.io/pages/bugigangas/bugigangas.html",
        description: "Área principal destinada ao armazenamento e organização de meus guias, anotações e quaisquer registros"
      },

      sketch: {
        title: "Breno - Esboço",
        type: "website",
        url: "https://b-ariel.github.io/assets/components/web-component/sketch.html",
        description: "Repositório de esboços e componentes da interface."
      },
      
      // Artigos
      database: {
        title: "Breno - Banco de dados",
        type: "article",
        url: "https://b-ariel.github.io/pages/database/database-page-1.html",
        description: "Introdução a banco de dados, abordando seus conceitos fundamentais, importância, vantagens e desvantagens, além do seu papel no desenvolvimento de aplicações e no gerenciamento eficiente de informações."
      },

      markdownPageOne: {
        title: "Breno - Guia de MARKDOWN: - parte 01",
        type: "article",
        url: "https://b-ariel.github.io/pages/markdown/markdown-page-1.html",
        description: "Guia sobre Markdown GFM, abordando seus conceitos fundamentais, sintaxe e aplicações práticas."
      },

      markdownPageTwo: {
        title: "Breno - Guia de MARKDOWN: - parte 02",
        type: "article",
        url: "https://b-ariel.github.io/pages/markdown/markdown-page-2.html",
        description: "Guia sobre Markdown GFM, abordando seus conceitos fundamentais, sintaxe e aplicações práticas."
      }
    };

    const data = pages[page] || {
      title: "Breno - Artigo",
      type: "website",
      description: "Website para armazenar minhas ideias, guias, anotações e quaisquer registros sobre tecnologia que considero interessante.",
      url: "https://b-ariel.github.io/",
      image: "https://b-ariel.github.io/assets/img/icones/my-logo/my-mark-black.png"

    };

    document.title = data.title;

    const headContent = `
      <!--
        Metadados
      -->
      <meta name="author" content="Breno Ariel">
      <meta name="description" content="${data.description}">

      <link rel="stylesheet" href="/assets/css/main-styles.css">

      <link rel="icon" type="image/png" href="/assets/img/icones/my-logo/my-mark-black.png">

      <link rel="stylesheet" href="/assets/css/prismjs/prism-development-version.css">

      <!--
        Open graph
      -->
      <meta property="og:title" content="${data.title}" />
      <meta property="og:type" content="${data.type}" />
      <meta property="og:url" content="${data.url}" />
      <meta property="og:description" content="${data.description}" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="b-ariel" />
      <!--
        Open graph - og:image
      -->
      <meta property="og:image" content="${data.image}" />
      <meta property="og:image:secure_url" content="${data.image}" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1024" />
      <meta property="og:image:height" content="1024" />
      <meta property="og:image:alt" content="Ícone </> em quadrado preto." />

      <!--
        X cards - Twitter cards
      -->
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="${data.title}" />
      <meta name="twitter:description" content="${data.description}" />
      <!--
        X cards - Twitter cards - twitter:image
      -->
      <meta name="twitter:image" content="${data.image}" />
    `;

    if (!document.querySelector('meta[name="author"]')) {
    document.head.insertAdjacentHTML("beforeend", headContent);
}

  }
}

customElements.define("app-head", AppHead);

/*----------*----------*----------*/

/*
  Endereço local:
  http://127.0.0.1:5500/
*/

/*
  Endereço hospedado:
  https://b-ariel.github.io/
*/
