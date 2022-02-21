import { bookList } from "./utils/arrays.js";
import swap from "./utils/swap.js";

export default function quickSort(arr, left, right) {
  if (arr.length > 1) {
    let currIndex = partition(arr, left, right);
    if (left < currIndex - 1) {
      quickSort(arr, left, currIndex - 1);
    }
    if (currIndex < right) {
      quickSort(arr, currIndex, right);
    }
  }

  return arr;
}

function partition(arr, left, right) {
  let pivot = arr[Math.floor((left + right) / 2)];
  let currLeft = left;
  let currRight = right;

  while (currLeft <= currRight) {
    while (arr[currLeft].preco < pivot.preco) {
      currLeft++;
    }

    while (arr[currRight].preco > pivot.preco) {
      currRight--;
    }

    if (currLeft <= currRight) {
      swap(arr, currLeft, currRight);
      currLeft++;
      currRight--;
    }
  }
  return currLeft;
}

console.log(quickSort(bookList, 0, bookList.length - 1));

// Best case -> O(nlgn)
// Worst case -> O(n^2)
