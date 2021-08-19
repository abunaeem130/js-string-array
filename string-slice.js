const anthem = 'Amar Sonar Bangla Ami Tomai Valovashi';
const words = anthem.split(' ');
const withoutA = anthem.split('a');
// console.log(withoutA);
// slice
const smallSlice = anthem.slice(5, 13);
// console.log(smallSlice);
// substar
const anotherPart = anthem.substr(11, 9);
// console.log(anotherPart);
// substring
const anotherAPart = anthem.substring(6, 15);
// console.log(anotherAPart);
// concat
const first = 'Amader';
const second = 'City';
// const fullString = first + second;
const fullString = first.concat(second).concat('abc').concat('rj kibria');
// console.log(fullString);
const words2 = ['alim', 'badhon', 'camorn', 'ddebit'];
// const allJoin = words2.join(' ');
// const allJoin = words2.join(' ');
const allJoin = words2.join(', ');
console.log(allJoin);