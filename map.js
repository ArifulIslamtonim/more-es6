const numbers = [4, 6, 8, 10];
const output2 = [];

/* function doubleOld(number) {
    return number * 2;
} */

const doubleIt = number => number * 2;

for (const number of numbers) {
    const result = doubleIt(number);
    output2.push(result);
}
console.log(output2);


const output = numbers.map(doubleIt);
const square = numbers.map(number => number * number);
console.log(square);