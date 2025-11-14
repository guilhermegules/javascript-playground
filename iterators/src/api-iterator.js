function apiIterator(urls) {
  let index = 0;

  return {
    async next() {
      if (index >= urls.length) {
        return { done: true };
      }

      const res = await fetch(urls[index]);
      const value = await res.json();
      index++;

      return { value, done: false };
    },
    [Symbol.asyncIterator]() {
      return this;
    },
  };
}

(async () => {
  const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3",
    "https://jsonplaceholder.typicode.com/todos/4",
    "https://jsonplaceholder.typicode.com/todos/5",
  ];

  for await (const data of apiIterator(urls)) {
    console.log(data);
  }
})();
