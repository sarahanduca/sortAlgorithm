export default function swap(arr, from, to) {
  let firstValue = arr[from];
  let secondValue = arr[to];

  arr[from] = secondValue;
  arr[to] = firstValue;
}
