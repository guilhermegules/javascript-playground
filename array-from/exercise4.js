const start = 5;
const stop = 8;
const length = stop - start + 1;

const mapFn = (_, index) => start + index;

const result = Array.from({ length }, mapFn);

console.log(result);
