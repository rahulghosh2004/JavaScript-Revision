// Creating a string
const myName = "Rahul Ghosh";
// console.log(name);


// We can also find the length of a string
// console.log(myName.length);


// String.prototype.at()
//Returns the character (exactly one UTF-16 code unit) at the specified index. Accepts negative integers, which count back from the last string character.
// console.log(myName.at(0));



// String.prototype.charAt()
// Returns the character (exactly one UTF-16 code unit) at the specified index.
// console.log(myName.charAt(0));



// String.prototype.concat()
// Combines the text of two (or more) strings and returns a new string.
// const name1 = "SVIST";
// const name2 = "SVIMS";
// const newName = name1.concat(" & ", name2);
// console.log(newName);




// String.prototype.endsWith()
// Determines whether a string ends with the characters of the string searchString.
// const stnc = "I am a student of SVIMS";
// console.log(stnc.endsWith("SVIMS")); // It will return a boolean value




// String.prototype.startsWith()
// Determines whether the calling string begins with the characters of string searchString.
// const stnc = "I am a student of SVIMS";
// console.log(stnc.startsWith("I"));  // true



// String.prototype.includes()
// Determines whether the calling string contains searchString.
// const stnc = "I am a student of SVIMS";
// console.log(stnc.includes("I am a student"));  // true




// String.prototype.indexOf()
// Returns the index within the calling String object of the first occurrence of searchValue, or -1 if not found.
// const stnc = "I am a student of SVIMS";
// console.log(stnc.indexOf("S"));  // 18




// String.prototype.lastIndexOf()
// Returns the index within the calling String object of the last occurrence of searchValue, or -1 if not found.
// const stnc = "I am a student of SVIMS";
// console.log(stnc.lastIndexOf("S"));  // 22




// String.prototype.repeat()
// Returns a string consisting of the elements of the object repeated count times.
// const x = "Hello! JavaScript\n";
// console.log(x.repeat(5));
/*
PS C:\Users\Rahul Ghosh\Desktop\JSR> node 04_Strings.js
Hello! JavaScript
Hello! JavaScript
Hello! JavaScript
Hello! JavaScript
Hello! JavaScript
*/



// String.prototype.replace()
// const stnc = "I am a student of SVIMS";
// console.log(stnc.replace("SVIMS", "SVIST"));  // It doesn't manipulate the original string
// console.log(stnc);




// String.prototype.slice()
// The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.
// const stnc = "I am a student of SVIMS";
// console.log(stnc.slice(0, 14));  // (starting_index, total_number_of_index_from_the_(start_Index))
/*
PS C:\Users\Rahul Ghosh\Desktop\JSR> node 04_Strings.js      
I am a student
PS C:\Users\Rahul Ghosh\Desktop\JSR> 
*/




// String.prototype.split()
// The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
// const stnc = "I am a student of SVIMS";
// const newStr = stnc.split(" ");
// console.log(newStr);
// console.log(newStr[5]);
/*
[ 'I', 'am', 'a', 'student', 'of', 'SVIMS' ]
SVIMS
PS C:\Users\Rahul Ghosh\Desktop\JSR> 
*/




// String.prototype.substr()
// Returns a new string containing characters of the calling string from (or between) the specified index (or indices).
// const stnc = "I am a student of SVIMS";
// const str = stnc.substring(0, 14);  // (starting_index, length)
// console.log(str);
/*
PS C:\Users\Rahul Ghosh\Desktop\JSR> node 04_Strings.js      
I am a student
PS C:\Users\Rahul Ghosh\Desktop\JSR> 
*/




// String.prototype.toLowerCase()
// Returns the calling string value converted to lowercase.
// const stnc = "I am a student of SVIMS";
// console.log(stnc.toLowerCase());
/*
PS C:\Users\Rahul Ghosh\Desktop\JSR> node 04_Strings.js      
i am a student of svims
PS C:\Users\Rahul Ghosh\Desktop\JSR> 
*/




// String.prototype.toUpperCase()
// Returns the calling string value converted to uppercase.
// const stnc = "I am a student of SVIMS";
// console.log(stnc.toUpperCase());
/*
PS C:\Users\Rahul Ghosh\Desktop\JSR> node 04_Strings.js      
I AM A STUDENT OF SVIMS
PS C:\Users\Rahul Ghosh\Desktop\JSR> 
*/




// String.prototype.toString()
// The toString() method of String values returns this string value.
// const name = new String("Rahul Ghosh");
// console.log(name);
// console.log(typeof(name));
// console.log(name.toString());
// console.log(typeof(name.toString()));
/*
PS C:\Users\Rahul Ghosh\Desktop\JSR> node 04_Strings.js      
[String: 'Rahul Ghosh']
object
Rahul Ghosh
string
PS C:\Users\Rahul Ghosh\Desktop\JSR> 
*/




// String.prototype.trim()
// Trims whitespace from the beginning and end of the string.
// const a = "     SVIMS & SVIST     "
// console.log(a);
// console.log(a.trim());
/*
PS C:\Users\Rahul Ghosh\Desktop\JSR> node 04_Strings.js      
     SVIMS & SVIST     
SVIMS & SVIST
PS C:\Users\Rahul Ghosh\Desktop\JSR> 
*/




// String.prototype.valueOf()
// const b = "SVIMS, SVIST, SVGI";
// console.log(b.valueOf());
/*
PS C:\Users\Rahul Ghosh\Desktop\JSR> node 04_Strings.js      
SVIMS, SVIST, SVGI
PS C:\Users\Rahul Ghosh\Desktop\JSR> 
*/