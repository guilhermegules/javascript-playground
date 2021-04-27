function binarySearch(array, key) {
  let start = 0;
  let tries = 0;
  let end = array.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    if (array[middle] === key) {
      console.log(`Found the key: ${middle}`);
      return middle;
    }

    if (array[middle] < key) {
      tries++;
      start = middle + 1;
    } else {
      tries++;
      end = middle - 1;
    }

    console.log(`Try number: ${tries}`);
  }
}

const array = Array.from(Array(1000000).keys());

binarySearch(array, 2500);
