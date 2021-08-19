const numbers = [4, 6, 8, 9, 3, 7, 23, 76, 21, 45];
// slice
// const numberSlice = numbers.slice(4, 8);
// console.log(numberSlice);
// console.log(numbers);
// splice remove 
// const numberSpliced = numbers.splice(4, 3);
// console.log(numberSpliced);
// console.log(numbers);
const numberSpliced2 = numbers.splice(4, 3, 99, 111, 777, 888);
console.log(numberSpliced2);
console.log(numbers);