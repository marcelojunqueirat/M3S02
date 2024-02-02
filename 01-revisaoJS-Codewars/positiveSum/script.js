function positiveSum(arr) {
  let positiveSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveSum += arr[i];
    }
  }
  return positiveSum;
}

console.log(positiveSum([1,2,3,4,5]));
console.log(positiveSum([1,-2,3,4,5]));
console.log(positiveSum([]));
console.log(positiveSum([-1,-2,-3,-4,-5]));
console.log(positiveSum([-1,2,3,4,-5]));
