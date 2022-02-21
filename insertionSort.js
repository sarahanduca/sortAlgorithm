import weight from "./utils/weight.js";
import swap from "./utils/swap.js";

console.log(weight);

weight.forEach((_, index) => {
  let analyze = index;
  while (analyze > 0 && weight[analyze] < weight[analyze - 1]) {
    swap(weight, analyze, analyze - 1);
    analyze--;
  }
});

console.log(weight);

// Best case: Ω(n) -> doesn't get into the while, so it just have the for complexity
// Average case: Θ(n^2)
// Worst case: O(n^2) -> comparing twice, while inside for
