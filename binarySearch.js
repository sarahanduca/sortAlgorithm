import { bookList } from "./utils/arrays.js";

function binarySearch(arr, from, to, searchValue) {
  const half = Math.floor((from + to) / 2);
  const curr = arr[half];

  if (from > to) {
    return -1;
  }
  if (searchValue === curr.preco) {
    return half;
  }

  if (searchValue < curr.preco) {
    return binarySearch(arr, from, half - 1, searchValue);
  }

  if (searchValue > curr.preco) {
    return binarySearch(arr, half + 1, to, searchValue);
  }
}

console.log(binarySearch(bookList, 0, bookList.length - 1, 25));

// Custo -> O(lg n)
