const numbers = [5, 13, 7, 42, 79, 30, 5, 2, 19];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 20);
console.log(smallNumbers);


const products = [
    {name: 'water bottle', price: 50, color: 'yellow'},
    {name: 'mobile phone', price: 190000, color: 'white'},
    {name: 'smart watch', price: 3000, color:'komda color'},
    {name: 'stiky note', price: 30, color: 'purpul'}
];
const expensive = products.filter(product => product.price > 100);
const expensives = products.filter(product => product.color == 'white');
const findu = products.find(product => product.color == 'purpul');
console.log(findu);