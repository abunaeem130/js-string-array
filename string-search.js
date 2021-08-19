const products = [
    'Dell hardcore i29 200Gb laptop',
    'iphone 1TB camera flashlight phone',
    'yellow laptop with black camera',
    'Dell 1x59 lenovo commercial yoga laptop',
    'Lg supernova laptop',
    'HTC low price Phone',
    'Dell purple color with Laptop'
]
const searching = 'Dell';

// indexOf
const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        // output.push(product);
    }
}
// console.log(output);
for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        // output.push(product);
    }
}
// console.log(output);
// starts with
for (product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);