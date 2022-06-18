// for loop, for in , for of , 


/*
for(let i=1 ; i<=5 ; i++){
    console.log(i)
} 

console.log(i)
*/



/*
for(var i=1 ; i<=5; i++){
    console.log(i);
}

console.log(i)
*/




/*
let i=1;
for(; i<=5; i++){
    console.log(i);
}
console.log(i)
*/



/*
let i=1;
for(; ; i++){
    if (i<=5) {
        console.log(i);
    }
    else{
        break;
    }
    
}
console.log(i)
*/






// for in

/*
const myObj = {
    name: "JavaScript",
    estd: "1995",
    founder: "Brendan Eich",
};



for (property in myObj) {
    console.log(`from 'for in' ${property}`);
}
*/






// for of
/*
const myArray = [1,2,3,4,5]

for (element of myArray){
    console.log(element);
}


for (element in myArray){
    console.log(element);
}
*/




/*   we cannot use 'for of' in object type   */


/* In array we can use both 'for in' and 'for of' */
/* if we use "for in" it will return array indexes 
    if we use 'for of' it will return array elements */


/*
const myString = 'I love JavaScript';

for (element in myString) {
    console.log(element);
}


for (element of myString) {
    console.log(element);
}

*/