// rest operator 


//  ------------- ES5 --------------//

function myFunc(x){
    console.log(x)
    console.log(arguments);

    for (property in arguments){
        console.log(property);
    }
    console.log(Object.values(arguments));
    console.log(Object.keys(arguments));
    console.log(Object.entries(arguments))
}

myFunc(5,6,7,8,9);


// --------------- ES6 -------------//

function myFunc_1(...x){
    console.log(x)
}


myFunc_1(2,3,4,5,6,7,8)


function myFunc_2(x, ...params){
    console.log(x)
    console.log(params)
}


myFunc_2(2,3,4,5,6,7,8)