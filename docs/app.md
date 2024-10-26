# Podcast Manager

### Description
App estilo netflix, onde posso centralizar diferentes eps podcasts separados por categorias.

### Domain
Podcasts.

### Features 

- Listar eps podcasts em sessoes de categorias
- [saude, fitness, mentalidade, humor]
- filtrar eps por nome de podcasts.

### Como implementar:

Retorna em uma API rest (json).
- Nome do podcast,
- Nome episodio,
- Imagem de capa,
- Link,
- Categoria.

```js
[
 {
    podcastName: "flow",
    ep: "CBUM - FLOW #319",
    videoId: "5DaLlqP-8uI",
    covere: "https://i.ytimg.com/vi/5DaLlqP-8uI/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=5DaLlqP-8uI",
    categories: ["saude", "esporte", "bodybuilder"]
}, 
{
    podcastName: "flow",
    ep: "RUBENS BARRICHELLO - FLOW #339",
    videoId: "4KDGTdiOV4I"
    cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    categories: ["esporte", "corrida"] 
},
]
```


