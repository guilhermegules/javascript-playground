function* range(start, finish, step = 1) {
  for (let i = start; i <= finish; i += step) {
    yield { value: i, done: false };
  }
  yield { done: true };
}

for (const n of range(3, 7, 2)) {
  console.log(n.value);
}
