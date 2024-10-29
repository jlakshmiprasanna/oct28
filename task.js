// Question-1
const numbers1 = [2, 4, 6, 8, 10];
const totalSum = numbers1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Total sum:", totalSum);        // Output :- Total sum: 30


// Question-2
const numbers2 = [1, 3, 5, 7];
const totalProduct = numbers2.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log("Total product:", totalProduct); // Output :- Total product: 105


// Question-3
const words = ['apple', 'banana', 'cherry'];
const uppercasedWords = words.map(word => word.toUpperCase());
console.log(uppercasedWords);                 // Output :- [ 'APPLE', 'BANANA', 'CHERRY' ]


// Question-4
const numbers3 = [1, 2, 3, 4, 5];
const multipliedByTen = numbers3.map(number => number * 10);
console.log(multipliedByTen);                // Output :- [ 10, 20, 30, 40, 50 ]


// Question-5
const people = [
    { name: 'John', age: 25 },
    { name: 'Sarah', age: 30 },
    { name: 'Mike', age: 35 }
];
const ages = people.map(person => person.age);
console.log(ages);                            // Output :- [ 25, 30, 35 ]


// Question-6
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(fruit => {
  console.log(fruit);
});                                           // Output :- apple      banana      cherry



// Question-7
const numbers4 = [1, 2, 3, 4, 5, 6];
let evenCount = 0;
numbers4.forEach(number => {
  if (number % 2 === 0) {
    evenCount++;
  }
});
console.log("Even count:", evenCount);         // Output :- Even count: 3