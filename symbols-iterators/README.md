## Symbols e iterators

### Symbols
- São maneiras de gerar identificadores únicos;
- São invocados como se chama uma função;
- Propriedades de objetos criadas usando identificadores únicos podem ser descobertas usando o symbol utilizado como identificador ou o método `Object.getOwnPropertySymbols`.

### Iterators
- Alguns elementos já possuem a propriedade Symbol.iterator que permite realizar iterações, como simples arrays;
- `for of` é utilizado para obeter os valores gerados através de um iterator em objeto ou tipo iterável;
- Ao consumir um iterator, sabemos se a iteração finalizou atraves da propriedade `done` no objeto retornado;
- Ao invocar o método next de um iterator, o seu retorno é um objeto contendo um método next e uma propriedade done.