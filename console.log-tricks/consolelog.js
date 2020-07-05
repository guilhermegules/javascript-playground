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

// Console
console.log("TEXT");
console.warn("WARNING");
console.error("ERROR");

// Console group
console.group("Group");
console.log("Item 1");
console.log("Item 2");
console.groupEnd("Group");

// Console time
console.time("Log time");
setTimeout(() => {
  console.timeEnd("Log time");
}, 500);

// Console table
console.table(["Guilherme Gules", "Coding"]);

// Console assert
console.assert(1 === 0, "Ops");

// Console styled
console.log("%c styled log", "color: blue; font-size: 20px");
