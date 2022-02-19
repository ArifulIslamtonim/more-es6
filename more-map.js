const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];

const fLengths = friends.map(friend => friend.length);
console.log(fLengths);

const products = [
    {name: 'water bottle', price: 50, color: 'yellow'},
    {name: 'mobile phone', price: 190000, color: 'white'},
    {name: 'smart watch', price: 3000, color:'komda color'},
    {name: 'stiky note', price: 30, color: 'purpul'}
];
const productNames = products.map(product => product.name);
products.map(product => console.log(product));
products.forEach(product => console.log(product));
// console.log(productNames);