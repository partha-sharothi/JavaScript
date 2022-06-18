/// spread operator


/*
const numbers = [1,2,3];

// const newNumbers = [numbers[0],numbers[1],numbers[2],4,5,6];

const newNumbers = [...numbers,4,5,6]

console.log(newNumbers);

const a = numbers // here a is a new pointer or refference of number array

const numarr = [...numbers]; // it will make a new copy of numbers array
*/


const numbers_1 = [1,2,3];
const numbers_2 = [4,5,6];
const numbers_3 = [numbers_1, numbers_2]; 

console.log(numbers_3);

const numbers_4 = [...numbers_1, ...numbers_2];

console.log(numbers_4);



/////   object spreading

var myObj1 = {
    x: 1,
    y: 2
};

var myObj2 = {
    a:1,
    b:3
};

var myObj3 ={
    ...myObj1,
    ...myObj2
};

console.log(myObj3);