/* Wherefore art thou

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.
*/

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

  //convert the 'source' object into an array to make it easier to work with  
  var sourceArray = [];
  Object.keys(source).map(function (key) {
    for (prop in source) {
      sourceArray.push(key, source[key]);
      return;
    }
  });

  //separate each object from the collection array
  Object.keys(collection).forEach(function (key) { 

    //now we have an object with key value pairs we can work with
    var obj = collection[key]; 

    //now process each value pair
    for (var prop in obj) { 
      if (obj.hasOwnProperty(sourceArray[0]) && obj[prop] == sourceArray[1]) {

        if (sourceArray[2]) {
          if (obj.hasOwnProperty(sourceArray[2]) && obj[prop] == sourceArray[1]) {
            arr.push(collection[key]); //output two 'source' key pairs
          }
        } else {
          arr.push(collection[key]); //output one 'source' key pair
        }
      }
    }
  });

  // Only change code above this line
  return arr;
}


console.log(whatIsInAName([{
  first: "Romeo",
  last: "Montague"
}, {
  first: "Mercutio",
  last: null
}, {
  first: "Tybalt",
  last: "Capulet"
}], {
  last: "Capulet",
})); // should return [{ first: "Tybalt", last: "Capulet" }].

console.log(whatIsInAName([{
  "a": 1
}, {
  "a": 1
}, {
  "a": 1,
  "b": 2
}], {
  "a": 1
})); // should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].

console.log(whatIsInAName([{
  "a": 1,
  "b": 2
}, {
  "a": 1
}, {
  "a": 1,
  "b": 2,
  "c": 2
}], {
  "a": 1,
  "b": 2
})); // should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].

console.log(whatIsInAName([{
  "a": 1,
  "b": 2
}, {
  "a": 1
}, {
  "a": 1,
  "b": 2,
  "c": 2
}], {
  "a": 1,
  "c": 2
})); // should return [{ "a": 1, "b": 2, "c": 2 }].