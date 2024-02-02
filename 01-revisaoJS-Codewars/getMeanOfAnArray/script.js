function getAverage(marks){
  let average = 0;
  for (let i = 0; i < marks.length; i++) {
    average += marks[i];
  }
  return Math.floor(average/marks.length);
}

console.log(getAverage([2,2,2,2]));
console.log(getAverage([1,2,3,4,5,]));
console.log(getAverage([1,1,1,1,1,1,1,2]));
