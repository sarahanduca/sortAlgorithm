import { bookList } from "./utils/arrays.js";

function sortList(list1, list2) {
  let finalList = [];
  let currPosList1 = 0;
  let currPosList2 = 0;

  while (currPosList1 < list1.length && currPosList2 < list2.length) {
    let currItemList1 = list1[currPosList1];
    let currItemList2 = list2[currPosList2];

    if (currItemList1.preco < currItemList2.preco) {
      finalList.push(currItemList1);
      currPosList1++;
    } else {
      finalList.push(currItemList2);
      currPosList2++;
    }
  }
  return finalList.concat(
    currPosList1 < list1.length
      ? list1.slice(currPosList1)
      : list2.slice(currPosList2)
  );
}
function mergeSort(arr) {
  if (arr.length > 1) {
    const half = Math.floor(arr.length / 2);
    const firstHalf = mergeSort(arr.slice(0, half));
    const secondHalf = mergeSort(arr.slice(half, arr.length));
    arr = sortList(firstHalf, secondHalf);
  }

  return arr;
}

console.log(mergeSort(bookList));

// Best and Worst case -> O(nlgn)
