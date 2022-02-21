export default function minValueIndex(arr, inicialPosition) {
  let min = inicialPosition;

  for (let curr = inicialPosition; curr < arr.length; curr++) {
    if (arr[curr] < arr[min]) min = curr;
  }

  return min;
}
