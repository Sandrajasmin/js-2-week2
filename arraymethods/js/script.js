// ARRAY METHODS WEEK 2


//A new array is returned

// Original array
const arrayValues = [5, 7, 9, 14];

// New array called 'newArray' that contains the 
//result from the `.map` method
const newArray = arrayValues.map //(/* code here */);

// callback function


// 1. Anonymous function (more commonly used)
//This is an anonymous function which lets us make our Array Methods more concise. 
//Note how our logic is part of the Array Method:

// function
const values = [100, 200, 300, 400, 500];

const newValues = values.map(function (element, index, array) {
  // Modify and return element here
  return element
});

console.log(newValues);

// Arrow function

const values1 = [100, 200, 300, 400, 500];

const newValues1 = values.map((element, index, array) => {
  // Modify and return element here
  return array
});

console.log(newValues1);


// 2. Separate callback function
//This is a separate callback function (callbackFn). Note how logic for the Array Method
// is handled in its own function.

const values2 = [100, 200, 300, 400, 500];

function callbackFn(element, index, array) {
  // Modify and return element here
  return element
}

const newArray1 = values.map(callbackFn);

console.log(newArray1);



