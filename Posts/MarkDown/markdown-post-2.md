Licença MIT
Direitos autorais (©) 2025 Breno Ariel
https://b-ariel.github.io

# Guia de MARKDOWN - Parte 02

# Guia de MARKDOWN - INTERMEDIÁRIO

# TABELAS:
| Cabeçalho 1 | Cabeçalho 2 |
| ----------- | ----------- |
| Célula 1    | Célula 2    |
| Célula 3    | Célula 4    |

# FORMATAÇÃO:
| CMD | Descrição |
| --- | --- |
| `cls` | *Limpa* a tela |
| `mkdir` | **Cria** Pastas |
| `color` | *Muda cores* |

# ALINHAMENTO DE TEXTO:
| Esquerda | Centro | Direita |
| :--- | :---: | ---: |
| rgb(255,0,0) | #FF0000 | red |
| rgb(0,255,0) | #00FF00 | green |
| rgb(0,0,255) | #0000FF | blue |

# SEÇÕES RECOLHIDAS (OCULTANDO SEÇÕES):
<details open>
<summary> Dicas para seções recolhidas </summary>

### Você pode adicionar cabeçalhos, códigos etc. <br>

```Python
print("Olá Mundo")
```
</details>

# DIAGRAMAS (COM MERMAID):
```mermaid
graph TD;
A-->B;
A-->C;
B-->D;
C-->D;
```
# CRIAÇÃO DE MAPAS (COM GEOJSON):
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

# CRIAÇÃO DE OBJETOS 3D (COM ASCII STL):
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

# EXPRESSÕES MATEMÁTICAS (COM LATEX):
O logaritmo de 32 na base 2 (log2 32 = 5): <br>
$\log_2 32 = 5$

A divisão de 5 por 1/2 é igual a 5 vezez 2 (5 ÷ 1/2 == 5 x 2 = 10): <br>
$` 5 \div \frac{1}{2} == 5 \times 2 = 10 `$

O resto de 10 por 3 (10 mod 3 = 1): <br>
$$10 \mod 3 = 1$$

A multiplicação de 6 por 8 (6 x 8 = 48): <br>
```math
6 \cdot 8 = 48
```

Aqui o cifrão é exibido como um texto qualquer! <br>
Logo esse código não renderiza! <br>
<span>$</span>\log_2 32 = 5$

<hr>

# EM CASOS DE DÚVIDA, SEMPRE BUSCAR A DOCUMENTAÇÃO OFICIAL!