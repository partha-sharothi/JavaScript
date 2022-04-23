// converting strings to Numbers
// Number()      Retyrns a number,converted from its argument
// parseFloat()  parses a string and returns a floating point number
// parse Int()   parses a string and returns an integer




Number("3.14")   // returns 3.14
Number(" ")      // returns 0
Number("")       // returns 0
Number("99 88")  // returns NaN

// The Unary + operator : The umary + operator can be used to conmert a variable to a number.

let y = "5";  // y is a string
let x = + y;  // x is a number


// if the variable cannot be converted, it will still become a number, but with the value NaN (Not a Number).

let y1 = "John";   // y1 is a string
let x1 = + y;      // x1 is a number(NaN)  


//-----------------converting Number to Stiring ----------------###

String(x)           // returns a string from a number variable x
String(123)         // returns a string from a number literal 123
String(100 + 23)    // returns a string from a number from an expression


// the number method toString() does the same.


x.toString()
(123).toString()
(100+23).toString()