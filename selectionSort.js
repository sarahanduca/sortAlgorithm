import weight from "./utils/weight.js";
import minValueIndex from "./utils/minValueIndex.js";
import swap from "./utils/swap.js";

console.log(weight);

weight.forEach((_, index) => {
  let min = minValueIndex(weight, index);
  swap(weight, index, min);
});

console.log(weight);

// Best, Average and Wost case: O(n^2)
// It'll always run the whole array twice, no matter how it is sorted;
