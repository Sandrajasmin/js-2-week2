// MAPS ()

// Separate callback function
const values = [100, 200, 300, 400, 500];

function callbackFn(element, index, array) {
  // Modify and return element here
}

const newArray = values.map(callbackFn);

// Not using a separate callback function
const values1 = [100, 200, 300, 400, 500];

const newArray1 = values.map((element, index, array) => {
  // Modify and return element here
});


// Combining names
const names = [
  { firstName: 'Ola', lastName: 'Nordmann' },
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Mario', lastName: 'Rossi' },
  { firstName: 'Jan', lastName: 'Jansen' },
];

console.log("before map", names);

// Returns:
// [ "Ola Nordmann", "John Doe", "Mario Rossi", "Jan Jansen" ]
const combinedNames = names.map((person) => {
  return `${person.firstName} ${person.lastName}`;
});

console.log("after map", combinedNames);

// destructing it
const combinedNames1 = names.map(({firstName, lastName}) => {
  return `${firstName} ${lastName}`;
});

console.log("after map", combinedNames1);


// 2. Calculate area of rectangle
const rectangles = [
  { length: 30, width: 20 },
  { length: 10, width: 10 },
  { length: 40, width: 40 },
];

// Returns:
// [ 600, 100, 1600 ]
const areas = rectangles.map((rectangle) => rectangle.length * rectangle.width);


// calculate the area of the triangles inside the given
// triangles array. Please use the map function to return array 
// return: 10000, 2500, 2500

const triangle = [
  {base: 100, height: 200},
  {base: 50, height: 100},
  {base: 600, height: 700},
];


const areas1 = triangle.map((triangle) => {
  return 
});

//console.log(areas1);
