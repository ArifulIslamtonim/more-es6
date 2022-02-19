const fish = { id: 58, name: 'king Hilsha', price: 7000, phone: '01629970472', address: 'Chadpur', color: 'silver'};
// const phone = fish.phone;
// const price = fish.price;
// const address = fish.address;

const {address, price, phone, id} = fish;

console.log(address, price, phone);
// console.log(price);
// console.log(phone);
// console.log(id);
// console.log(phone);

const company ={
 name: 'GP', 
 ceo: { id: 1, name: 'ajmol', food: 'fuchka'},
 web: {work: 'website development', employee: 22, framework: 'react',
 tech: {
     first: 'html',
     second: 'css',
     third: 'js'
 } }
}

const {work, framework, employee} = company.web;
const {food, name} = company.ceo;
const {first, second} = company.web.tech;

console.log(employee, lilu?. name, food, work, first);