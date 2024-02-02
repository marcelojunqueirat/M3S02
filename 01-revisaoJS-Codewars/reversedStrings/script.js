function solution(str) {
  let newString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

console.log(solution('world'));
console.log(solution('hello'));
console.log(solution(''));
console.log(solution('h'));

