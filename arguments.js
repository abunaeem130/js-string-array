// function addNumbers(num1, num2) {
//     // console.log(arguments[2]);
//     let result = 0;
//     for (const num of arguments) {
//         result = result + num;
//     }
//     // arguments.push(45);
//     // const result = num1 + num2;
//     return result;
// }
// const result = addNumbers(23, 13, 50, 100, 546);
// // console.log(result);
function getFullName(firstName, lastName) {
    let fullName = '';
    for (const part of arguments) {
        fullName = fullName + part + ' ';
    }
    return fullName;
}
const name = getFullName('omuk', 'bin', 'hanif', 'sonket');
console.log(name);