const foo = { name: "tom", age: 30, nervous: false };
const bar = { name: "link", age: 40, nervous: false };
const baz = { name: "harry", age: 50, nervous: true };

//Colorindo testo no console log para melhor identificação
console.log("%c My friends:", "color:green; font-weight:bold");
console.log({ foo, bar, baz });

//criando uma tabela para uma melhor visualização do array
console.table([foo, bar, baz]);

//tendo uma melhor visão de onde meus métodos estão sendo chamados
const testing = () => console.trace("Hello");

testing();
testing();
