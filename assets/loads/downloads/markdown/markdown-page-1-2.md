Licença MIT  
Direitos autorais (©) 2025
Breno Ariel  
https://b-ariel.github.io

<hr>

+ [Guia de MARKDOWN - Parte 01 - BÁSICO](#guia-de-markdown---parte-01---básico)

  + [A formatação básica de texto:](#a-formatação-básica-de-texto)
    - [Títulos](#títulos)
    - [Estilos de texto (negrito, itálico, etc ...)](#estilos-de-texto)
    - [Citações](#citações)
    - [Blocos de código](#blocos-de-código)
    - [Cores](#cores)
    - [Linhas horizontais (quebra temática)](#linhas-horizontais)

  + [A inclusão de elementos multimídia:](#a-inclusão-de-elementos-multimídia)
    - [Links (embutidos, de seção, relátivos e personalizados)](#links)
    - [Imagens](#imagens)
    - [Emojis](#emojis)

  + [A organização do conteúdo:](#a-organização-do-conteúdo)
    - [Listas (não ordenadas, ordenadas e de tarefas)](#listas)
    - [Parágrafos](#parágrafos)
    - [Notas de rodapé](#notas-de-rodapé)

  + [Os recursos específicos do GITHUB:](#os-recursos-específicos-do-github)
    - [Menções](#menções)
    - [Alertas](#alertas)
    - [Comentários](#comentários)
    - [Ignorar formatação](#ignorar-formatação)

<hr>

+ [Guia de MARKDOWN - Parte 02 - INTERMEDIÁRIO](#guia-de-markdown---parte-02---intermediário)
  + [Tabelas](#tabelas)
    - [Criação de tabelas](#criação-de-tabelas)
    - [Formatação](#formatação)
    - [Alinhamento de texto](#alinhamento-de-texto)

  + [Seções recolhidas](#seções-recolhidas)
    - [Ocultando seções:](#ocultando-seções)

  + [Diagramas](#diagramas)
    - [Criação de diagramas (com mermaid)](#criação-de-diagramas)
    - [Criação de mapas (com geojson)](#criação-de-mapas)
    - [Criação de objetos 3D (com ascii stl)](#criação-de-objetos-3d)

  + [Expressões matemáticas](#expressões-matemáticas)
    - [Formato LATEX](#formato-latex)

<hr>

# Guia de MARKDOWN - Parte 01 - BÁSICO
<br>

<hr>

# A formatação básica de texto:
<br>

## Títulos:
<br>

# Título H1
## Título H2
### Título H3
#### Título H4
##### Título H5
###### Título H6

## Estilos de texto:
<br>

**texto em negrito** ou __texto em negrito__  
*texto em itálico* ou _texto em itálico_  
~~texto tachado~~  
Isso aqui está subscrito: <sub> texto subscrito </sub>  
Isso aqui está sobrescrito: <sup> texto sobrescrito </sup>  
Isso aqui está sublinhado: <ins> texto sublinhado </ins>  

## Citações:
<br>

> Isto é uma citação.  
> Esta é a segunda linha da citação.

## Blocos de código:
<br>

`console.log("Olá, mundo!");`
```python
print("Olá, mundo!")
```

## Cores:
<br>

Aqui VERMELHO em HEX: `#FF0000`  
Aqui AZUL em RGB: `rgb(0, 0, 255)`

## Linhas horizontais:
<br>

Primeira linha aqui
***

Segunda linha aqui
---

Terceira linha aqui
___

Quarta linha aqui
<hr>

<hr>

# A inclusão de elementos multimídia:
<br>

## Links
<br>

## Links embutidos:
<br>

Para ir para a página inicial: [Clique aqui](https://b-ariel.github.io/)

## Links de seção:
<br>

Para ir na seção - "Formatação básica de texto": [Clique aqui](#a-formatação-básica-de-texto)

## Links relátivos:
<br>

[Markdown parte 01](/pages/markdown/markdown-page-1.html)

## Âncoras personalizadas:
<br>
<a name="basic-text-formatting"></a>

Já qui fica o link - [Um link personalizado](#basic-text-formatting)

## Imagens:
<br>

![meus dogs](/assets/loads/uploads/pingo-and-valente-pinscher-and-akita-0.png)

<picture>
    <source media="(max-width: 600px)"
    srcset="/assets/loads/uploads/img-300x/300x-pingo-and-valente-pinscher-and-akita-1.png">
    <img src="/assets/loads/uploads/img-150x/150x-pingo-and-valente-pinscher-and-akita-1.png">
</picture>

## Emojis:
<br>

:smile: :laughing: :blush:  
:smiley: :relaxed: :wink:  
:heart: :brazil: :medal_military:

<hr>

# A organização do conteúdo:
<br>

## Listas:
<br>

## Listas não ordenadas:
<br>

- Item 1
* Item 2
+ Item 3

## Listas ordenadas:
<br>

Assim:  
1. Primeiro item
2. Segundo item
3. Terceiro item  

OU ASSIM:

1. Primeiro item
1. Segundo item
1. Terceiro item

## Listas aninhadas:
<br>

- Item 1
     - Item 1.1
     - Item 1.2
        - Item 1.2.1
        - Item 1.2.2
- Item 2

## Listas de tarefas:
<br>

- [ ] Ser famoso
- [x] Fazer um site

## Parágrafos:
<br>

Primum praeceptum:<br>
Diliges Deum super omnia, et non habebis deos alienos. \
Secundum praeceptum:<br>
Nolite facere idola, neque simulacra colatis. \
Tertium praeceptum:<br>
Noli in vanum nomen Dei accipere. \
Quartum praeceptum:<br>
Sabbata et festivitates sanctas observa ex mandato. \
Quintum praeceptum:<br>
Honora patrem et matrem. \
Sextum praeceptum:<br>
Non occides. \
Septimum praeceptum:<br>
Non moechaberis. \
Octavum praeceptum:<br>
Non furtum facies. \
Nonum praeceptum:<br>
Falsum testimonium non dices. \
Decimum praeceptum:<br>
Non concupisces uxorem proximi tui.

<hr>

# Os recursos específicos do github:
<br>

## Notas de rodapé:
<br>

Aqui uma simples nota de rodapé[^1].  
Uma nota de rodapé pode ter multiplas linhas[^2].

[^1]: Minha referência.
[^2]: Minha outra referência.

## Menções:
<br>

@B-Ariel

## Alertas:
<br>

> [!NOTE]  
> Informações úteis que os usuários devem saber, mesmo quando estiverem lendo superficialmente o conteúdo.

> [!TIP]  
> Conselhos úteis para fazer as coisas melhor ou mais facilmente.

> [!IMPORTANT]  
> Informações importantes que os usuários precisam saber para atingir seus objetivos.

> [!WARNING]  
> Informações urgentes que precisam de atenção imediata do usuário para evitar problemas.

> [!CAUTION]  
> Aconselha sobre riscos ou resultados negativos de certas ações.

## Comentários:
<br>

<!-- Isso é um comentário: Este texto não será exibido na renderização da página, apenas no código fonte.
-->

## Ignorar formatação:
<br>

# Olá, mundo!
\# Olá, mundo!  

<hr>

# Guia de MARKDOWN - Parte 02 - INTERMEDIÁRIO
<br>

## Tabelas:
<br>

## Criação de tabelas:
<br>

| Cabeçalho 1 | Cabeçalho 2 |
| ----------- | ----------- |
| Célula 1    | Célula 2    |
| Célula 3    | Célula 4    |

## Formatação:
<br>

| CMD | Descrição |
| --- | --- |
| `cls` | *Limpa* a tela |
| `mkdir` | **Cria** Pastas |
| `color` | *Muda cores* |

## Alinhamento de texto:
<br>

| Esquerda | Centro | Direita |
| :--- | :---: | ---: |
| rgb(255,0,0) | #FF0000 | red |
| rgb(0,255,0) | #00FF00 | green |
| rgb(0,0,255) | #0000FF | blue |

## Seções recolhidas:
<br>

## Ocultando seções:
<br>

<details open>
  <summary>
    Dicas para seções recolhidas
  </summary>

  ## Você pode adicionar cabeçalhos, códigos etc.

  ```Python
    print("Olá Mundo")
  ```
</details>

## DIAGRAMAS:
<br>

## Criação de diagramas:
<br>

```mermaid
graph TD;
A-->B;
A-->C;
B-->D;
C-->D;
```

## Criação de mapas:
<br>

```geojson
{
    "type": "Feature",
    "properties": {},
    "geometry": {
    "type": "Polygon",
    "coordinates": [
    [
        [-43.2029, -22.925],
        [-43.1429, -22.925],
        [-43.1429, -22.875],
        [-43.2029, -22.875],
        [-43.2029, -22.925]
            ]
        ]
    }
}
```

## Criação de objetos 3D:
<br>

```stl
solid pyramid
  facet normal 0.0 0.0 1.0
    outer loop
      vertex 0.0 0.0 1.0
      vertex -1.0 -1.0 0.0
      vertex 1.0 -1.0 0.0
    endloop
  endfacet
  facet normal 1.0 1.0 1.0
    outer loop
      vertex 0.0 0.0 1.0
      vertex 1.0 -1.0 0.0
      vertex 1.0 1.0 0.0
    endloop
  endfacet
  facet normal -1.0 1.0 1.0
    outer loop
      vertex 0.0 0.0 1.0
      vertex 1.0 1.0 0.0
      vertex -1.0 1.0 0.0
    endloop
  endfacet
  facet normal -1.0 -1.0 1.0
    outer loop
      vertex 0.0 0.0 1.0
      vertex -1.0 1.0 0.0
      vertex -1.0 -1.0 0.0
    endloop
  endfacet
  facet normal 0.0 -1.0 0.0
    outer loop
      vertex -1.0 -1.0 0.0
      vertex 1.0 -1.0 0.0
      vertex 1.0 1.0 0.0
    endloop
  endfacet
  facet normal 0.0 1.0 0.0
    outer loop
      vertex 1.0 1.0 0.0
      vertex -1.0 1.0 0.0
      vertex -1.0 -1.0 0.0
    endloop
  endfacet
endsolid pyramid
```

## Expressões matemáticas:
<br>

## Formato latex:
<br>

O logaritmo de 32 na base 2 (log2 32 = 5):

$\log_2 32 = 5$

A divisão de 5 por 1/2 (5 ÷ 1/2 = 10):

$` 5 \div \frac{1}{2} = 10 `$

A multiplicação de 5 por 2 (5 x 2 = 10):

$` 5 \times 2 = 10 `$

O resto de 10 por 3 (10 mod 3 = 1):

$$10 \mod 3 = 1$$

A multiplicação de 6 por 8 (6 x 8 = 48):

```math
6 \cdot 8 = 48
```

Aqui o cifrão é exibido como um texto qualquer!
Logo esse código não renderiza!

<span>$</span>\log_2 32 = 5$

<hr>

# EM CASOS DE DÚVIDA, SEMPRE BUSCAR A DOCUMENTAÇÃO OFICIAL!