function recursiveBinarySearch(array, key) {
  let middle = Math.floor(array.length / 2);

  if (array.length === 1 && array[0] !== key) {
    return false;
  }

  if (array[middle] === key) {
    console.log(`Found key: ${key}`);
    console.timeEnd("Recursive binary search");
    return true;
  }

  if (array[middle] > key) {
    return recursiveBinarySearch(array.slice(0, middle), key);
  }

  if (array[middle] < key) {
    return recursiveBinarySearch(array.slice(middle), key);
  }
}

const array = Array.from(Array(10000000).keys());

console.time("Recursive binary search");
recursiveBinarySearch(array, 10);
