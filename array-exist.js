function megaFriend(friends) {
    if (Array.isArray(friends) == false) {
        return 'please provide an strinf an array';
    }
    let mega = friends[0]
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ['kutub', 'lion', 'shamol', 'shabir']
const myBigBuddy = megaFriend(564);
// console.log(myBigBuddy);
// indexOf
if (friends.indexOf('fox') != -1) {
    console.log('lion exist')
}
else {
    console.log('lion does not exist');
}
// includes
if (friends.includes('lion') == true) {
    console.log('lion exist for');
}
// concat
const first = [4, 5, 2, 6,];
const second = [9, 4, 6, 8];
const combined = first.concat(second);
console.log(combined);