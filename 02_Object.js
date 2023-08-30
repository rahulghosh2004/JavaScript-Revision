// const obj = new Object();
// obj.name = "SVIMS";
// obj.address = "Sonarpur, Karbala";
// console.log(obj);

// console.log(obj.name);
// console.log(obj["name"]);


// const user = {
//     name: "Rahul Ghosh",
//     age: 19,
//     eligibleForVoting: true,
// }
// console.log(user);
// const userCon = {
//     currentlyStudying: "SVIMS",
//     location: "Sonarpur, Karbala",
//     city: "Kolkata"
// }
// console.log(userCon);



// Object.assign
/*
The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
*/
// const obj1 = Object.assign({}, user, userCon);
// console.log(obj1);



// Object.create()
/*
The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.
*/
// const obj2 = {
//     isHuman: false,
//     introduction: function (){
//         console.log(`My name is ${this.name} & am I human ? ${this.isHuman}`);
//     }
// };
// console.log(obj2.introduction());
// const me = Object.create(obj2);
// me.name = "Ranit";
// me.isHuman = true;
// console.log(me.introduction());



// Object.entries()
/*
The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.
*/
// const userDetails = {
//     id: "86hg2872b",
//     name: "Rahul Ghosh",
//     phone: "86299077xx"
// };
// console.log(Object.entries(userDetails));
// const arr = Object.entries(userDetails);
// console.log(arr);
// console.log(arr.flat(1));




// Object.freeze()
/*
Freezes an object. Other code cannot delete or change its properties.
*/
// const userDetails = {
//     id: "86hg2872b",
//     name: "Rahul Ghosh",
//     phone: "86299077xx"
// };
// Object.freeze(userDetails);
// userDetails.name = "Ranita";
// console.log(userDetails);




// Object.hasOwn()
/*
The Object.hasOwn() static method returns true if the specified object has the indicated property as its own property. If the property is inherited, or does not exist, the method returns false.
*/
// const userDetails = {
//     id: "86hg2872b",
//     name: "Rahul Ghosh",
//     phone: "86299077xx"
// };
// console.log(Object.hasOwn(userDetails, "id"));  // true
// console.log(Object.hasOwn(userDetails, "name"));  // true
// console.log(Object.hasOwn(userDetails, "phone")); // true
// console.log(Object.hasOwn(userDetails, "email")); // false





// Object.isFrozen()
/*
The Object.isFrozen() static method determines if an object is frozen.
*/
// const userDetails = {
//     id: "86hg2872b",
//     name: "Rahul Ghosh",
//     phone: "86299077xx"
// };
// console.log(Object.isFrozen(userDetails));  // false
// Object.freeze(userDetails);
// console.log(Object.isFrozen(userDetails));  // true, bcz it is already in freeze state




// Object.isSealed()
/*
The Object.isSealed() static method determines if an object is sealed.
*/
// const userDetails = {
//     id: "86hg2872b",
//     name: "Rahul Ghosh",
//     phone: "86299077xx"
// };
// console.log(Object.isSealed(userDetails));  // false
// Object.seal(userDetails);
// console.log(Object.isSealed(userDetails));  // true, bcz it is already in seal state





// Object.keys()
/*
Returns an array containing the names of all of the given object's own enumerable string properties.
*/
// const userDetails = {
//     id: "86hg2872b",
//     name: "Rahul Ghosh",
//     phone: "86299077xx"
// };
// console.log(Object.keys(userDetails));  // [ 'id', 'name', 'phone' ]





// Object.values()
/*
Returns an array containing the values that correspond to all of a given object's own enumerable string properties.
*/
const userDetails = {
    id: "86hg2872b",
    name: "Rahul Ghosh",
    phone: "86299077xx"
};
console.log(Object.values(userDetails));  // [ '86hg2872b', 'Rahul Ghosh', '86299077xx' ]