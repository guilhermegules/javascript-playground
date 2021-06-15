const range = (start, stop) => {
  const length = stop ? stop - start + 1 : start;

  const mapFn = (_, index) => (stop ? start + index : index + 1);

  return Array.from({ length }, mapFn);
};

const result = range(65, 90).map((number) => String.fromCharCode(number));

console.log(result);
