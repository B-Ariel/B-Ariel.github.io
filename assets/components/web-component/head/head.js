// Ponto de partida para endereços
const base = document.createElement("base");
base.href ="http://127.0.0.1:5500/";
document.head.appendChild(base);

// Linkagem do CSS
const linkCSS = document.createElement('link');
linkCSS.rel = 'stylesheet';
linkCSS.href = '/assets/css/styles.css';
document.head.appendChild(linkCSS);

// Linkagem do ícone
const linkIcon = document.createElement('link');
linkIcon.rel = 'icon';
linkIcon.href = '/assets/img/icones/my-logo/my-mark-black.png';
linkIcon.type = 'image/png';
document.head.appendChild(linkIcon);


/* Endereço local:
http://127.0.0.1:5500/
*/

/* Endereço hospedado:
https://b-ariel.github.io/
*/