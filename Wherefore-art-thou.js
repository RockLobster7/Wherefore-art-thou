/* Wherefore art thou

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.
*/

//https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-wherefore-art-thou/16092

//https://stackoverflow.com/questions/675231/how-do-i-access-properties-of-a-javascript-object-if-i-dont-know-the-names

function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line

 
    // console.log(Object.keys(source));

    Object.keys(collection).forEach(function (key) {
        console.log(collection[key]);

     
      });

  
    
    // arr = collection.filter(function (element) {
    //     return element != element.hasOwnProperty(source);
    // });
    
    // Only change code above this line
    return arr;
  }

  
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })); // should return [{ first: "Tybalt", last: "Capulet" }].

  console.log(whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 })); // should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].

  console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })); // should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].

  console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 })); // should return [{ "a": 1, "b": 2, "c": 2 }].