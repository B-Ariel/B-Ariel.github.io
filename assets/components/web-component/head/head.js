// Ponto de partida para endereços
const base = document.createElement("base");
base.href ="https://b-ariel.github.io/";
document.head.appendChild(base);

// Link do CSS
const linkCSS = document.createElement('link');
linkCSS.rel = 'stylesheet';
linkCSS.href = '/assets/css/styles.css';
document.head.appendChild(linkCSS);

// Link do ícone
const linkIcon = document.createElement('link');
linkIcon.rel = 'icon';
linkIcon.href = '/assets/img/icones/my-logo/my-mark-black.png';
linkIcon.type = 'image/png';
document.head.appendChild(linkIcon);

// Link do PRISMJS
const linkPrismjs = document.createElement('link');
linkPrismjs.rel = 'stylesheet';
linkPrismjs.href = '/assets/css/prismjs/prism-minified-version.css';
document.head.appendChild(linkPrismjs);
