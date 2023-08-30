// Number.MAX_SAFE_INTEGER
// The Number.MAX_SAFE_INTEGER static data property represents the maximum safe integer in JavaScript (25^3 – 1).
const maxSafeInt = Number.MAX_SAFE_INTEGER;
// console.log(Number.MAX_SAFE_INTEGER == Number.MAX_SAFE_INTEGER + 1);  // false
// console.log(maxSafeInt);
/*
[Running] node "c:\Users\Rahul Ghosh\Desktop\JSR\03_Number_And_Methods.js"
9007199254740991

[Done] exited with code=0 in 0.192 seconds
*/




// Number.MIN_SAFE_INTEGER
// The Number.MIN_SAFE_INTEGER static data property represents the minimum safe integer in JavaScript, or -(25^3 - 1).
const minSafeInt = Number.MIN_SAFE_INTEGER;
// console.log(minSafeInt);
/*
[Running] node "c:\Users\Rahul Ghosh\Desktop\JSR\03_Number_And_Methods.js"
-9007199254740991

[Done] exited with code=0 in 0.188 seconds
*/





// Number.MAX_VALUE
// The Number.MAX_VALUE static data property represents the maximum numeric value representable in JavaScript.
const maxValue = Number.MAX_VALUE;
// console.log(maxValue);
/*
[Running] node "c:\Users\Rahul Ghosh\Desktop\JSR\03_Number_And_Methods.js"
1.7976931348623157e+308

[Done] exited with code=0 in 0.194 seconds
*/





// Number.MIN_VALUE
// The Number.MIN_VALUE static data property represents the smallest positive numeric value representable in JavaScript.
const minValue = Number.MIN_VALUE;
// console.log(minValue);
/*
[Running] node "c:\Users\Rahul Ghosh\Desktop\JSR\03_Number_And_Methods.js"
5e-324

[Done] exited with code=0 in 0.22 seconds
*/





// Number.NaN
// The Number.NaN static data property represents Not-A-Number, which is equivalent to NaN.
const x = 264;
// console.log(isNaN(x));
// console.log(isNaN("Rahul"));
/*
PS C:\Users\Rahul Ghosh\Desktop\JSR> node 03_Number_And_Methods.js
false
true
PS C:\Users\Rahul Ghosh\Desktop\JSR> 
*/




// Number.NEGATIVE_INFINITY
// The Number.NEGATIVE_INFINITY static data property represents the negative Infinity value.
const num = Number.MAX_VALUE;
// console.log(Number.NEGATIVE_INFINITY);
// console.log(-(num*2) == Number.NEGATIVE_INFINITY);
// console.log("Value: ", -(num * 2));
/*
PS C:\Users\Rahul Ghosh\Desktop\JSR> node 03_Number_And_Methods.js
-Infinity
true
Value:  -Infinity
PS C:\Users\Rahul Ghosh\Desktop\JSR>
*/




// Number.POSITIVE_INFINITY
const num1 = Number.MAX_VALUE;
// console.log(Number.POSITIVE_INFINITY);
// console.log(num1 == Number.POSITIVE_INFINITY);
// console.log(num * 2 == Number.POSITIVE_INFINITY);
// console.log("Value:", num*2);
/*
PS C:\Users\Rahul Ghosh\Desktop\JSR> node 03_Number_And_Methods.js
Infinity
false
true
Value: Infinity
PS C:\Users\Rahul Ghosh\Desktop\JSR> 
*/




// Number.isFinite()
// The Number.isFinite() static method determines whether the passed value is a finite number — that is, it checks that a given value is a number, and the number is neither positive Infinity, negative Infinity, nor NaN.
const n1 = Number.MAX_VALUE;  // It is a finite number
const n2 = Number.POSITIVE_INFINITY;  // It is not a finite number. It is a infinite positive number.
// console.log(Number.isFinite(n1));
// console.log(Number.isFinite(n2));
// 
/*
PS C:\Users\Rahul Ghosh\Desktop\JSR> node 03_Number_And_Methods.js
true
false
PS C:\Users\Rahul Ghosh\Desktop\JSR> 
*/




// Number.isInteger()
// The Number.isInteger() static method determines whether the passed value is an integer.
const floatNum = 3.142;
const intNum = 264;
// console.log(Number.isInteger(floatNum));
// console.log(Number.isInteger(intNum));
// console.log(Number.isInteger(10 / 3));
/*
PS C:\Users\Rahul Ghosh\Desktop\JSR> node 03_Number_And_Methods.js
false
true
false
PS C:\Users\Rahul Ghosh\Desktop\JSR> 
*/




// Number.isSafeInteger()
// The Number.isSafeInteger() static method determines whether the provided value is a number that is a safe integer.
const temp = Number.MAX_SAFE_INTEGER;
// console.log(Number.isSafeInteger(temp));
// console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER));
/*
PS C:\Users\Rahul Ghosh\Desktop\JSR> node 03_Number_And_Methods.js
true
true
PS C:\Users\Rahul Ghosh\Desktop\JSR>
*/




// Number.Prototype.toExponential
// The toExponential() method of Number values returns a string representing this number in exponential notation.3.1
const n = 3.142;
// console.log(n.toExponential());
// console.log(n.toExponential(1));
// console.log(n.toExponential(2));
// console.log(n.toExponential(3));
// console.log(n.toExponential(4));
/*
PS C:\Users\Rahul Ghosh\Desktop\JSR> node 03_Number_And_Methods.js
3.142e+0
3.1e+0
3.14e+0
3.142e+0
3.1420e+0
PS C:\Users\Rahul Ghosh\Desktop\JSR> 
*/




// Number.Prototype.toFixed()
// The toFixed() method returns a string representation of numObj that does not use exponential notation and has exactly digits digits after the decimal place. The number is rounded if necessary, and the fractional part is padded with zeros if necessary so that it has the specified length.
const pi = 3.142;
// console.log(pi.toFixed());
// console.log(pi.toFixed(1));
// console.log(pi.toFixed(2));
// console.log(pi.toFixed(3));
// console.log(pi.toFixed(4));
/*
PS C:\Users\Rahul Ghosh\Desktop\JSR> node 03_Number_And_Methods.js
3
3.1
3.14
3.142
3.1420
PS C:\Users\Rahul Ghosh\Desktop\JSR> 
*/




// Number.Prototype.toLocalString()
// The toLocaleString() method of Number values returns a string with a language-sensitive representation of this number. In implementations with Intl.NumberFormat API support, this method simply calls Intl.NumberFormat. When formatting large numbers of numbers, it is better to create a Intl.NumberFormat object and use the function provided by its format() method.
const balance = 120024314012;
// console.log(balance);
// console.log(balance.toLocaleString("en-IN"));
// console.log(balance.toLocaleString("en-UK"));
// console.log(balance.toLocaleString("en-US"));
/*
PS C:\Users\Rahul Ghosh\Desktop\JSR> node 03_Number_And_Methods.js
120024314012
1,20,02,43,14,012
120,024,314,012
120,024,314,012
PS C:\Users\Rahul Ghosh\Desktop\JSR> 
*/




// Number.Prototype.toString()
// The Number object overrides the toString method of Object; it does not inherit Object.prototype.toString(). For Number values, the toString method returns a string representation of the value in the specified radix.
const b = 9289820;
// console.log(Number.toString(8700820));
// console.log(b.toString());
// console.log(typeof(b.toString()));
/*
PS C:\Users\Rahul Ghosh\Desktop\JSR> node 03_Number_And_Methods.js
function Number() { [native code] }
9289820
string
PS C:\Users\Rahul Ghosh\Desktop\JSR> 
*/