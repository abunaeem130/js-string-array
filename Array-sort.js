const numbers = [4, 3, 2, 7, 3, 6, 9,];
const numberSort = numbers.sort();
// console.log(numberSort);
const friends = ['josim', 'shakib', 'badsha', 'hamid', 'dipjol', 'rahmat'];
// const sortFriends = friends.sort();
// //  console.log(sortFriends);
// const reverseFriends = friends.reverse();
// console.log(reverseFriends);
const sortReverseFriends = friends.sort().reverse();
// console.log(sortReverseFriends);

// numbers sorting fun 
const bigNumbers = [66, 88, 99, 80, 65, 77, 2];
const sortedBigNumbers = bigNumbers.sort(function (a, b) {
    return a - b;
});
console.log(sortedBigNumbers);