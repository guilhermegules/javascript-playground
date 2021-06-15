const mapFn = (_, weekDay) => {
  const date = new Date(0, 0, weekDay);

  return date.toLocaleString("pt-BR", { weekday: "long" });
};

const result = Array.from({ length: 7 }, mapFn);

console.log(result);
