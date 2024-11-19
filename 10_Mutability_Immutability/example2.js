// If we have a const based initialisation for object then it doesnot make the object fully immutable
const obj = {x:10, y:20};
// obj = {x:10, y:20, z:30}; //  TypeError: Assignment to constant variable.
// in above code, we initialise new object

// but allow to update a value of a key and addition of new key value pair
obj.x = 100; // update value of existing key
obj.z = 200; // add new key value pair
delete obj.y; // allowed
console.log(obj);