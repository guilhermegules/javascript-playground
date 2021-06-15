const range = (start, stop = null) => {
  const length = stop ? stop - start + 1 : start;

  const mapFn = (_, index) => (stop ? start + index : index + 1);

  return Array.from({ length }, mapFn);
};

console.log(range(10));
console.log(range(10, 20));
