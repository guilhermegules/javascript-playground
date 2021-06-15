const numberToMonth = (_, index) =>
  new Date(0, index).toLocaleString("pt-BR", { month: "long" });

const result = Array.from({ length: 12 }, numberToMonth);

console.log(result);
