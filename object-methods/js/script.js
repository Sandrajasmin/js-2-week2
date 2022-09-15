// OBJECT

const person = {
  firstName: 'Sandra',
  lastName: 'Bakken',
  age: '23',
};

// DOT NOTATION
console.log("Dot Notation: ", person.firstName);
    // Returns:
    // Sandra 


// BRACKET NOTATION
console.log("Bracket Notation: ", person["firstName"]);
console.log("Bracket Notation: ", person["lastName"]);
console.log("Bracket Notation: ", person["age"]);
    // Returns:
    // Sandra 
    // Bakken
    // 23

// EXAMPLE 

const recipe = {
  ingredient_0: "Egg",
  ingredient_1: "Milk",
  ingredient_2: "Flour",
}

const ingredient0 = recipe["ingredient_0"]
const ingredient1 = recipe["ingredient_1"]
console.log(ingredient0);
console.log(ingredient1);
    // Returns: Egg
    // Returns: Milk

// IF WE for LOOP to automatically increment the number in the Object key we are generating.
for (let i =0; i <= 2; i++){
  console.log(recipe["ingredient_" + i]);
    // Returns:
    // Egg
    // Milk
    // Flour
}


// LOOPING WITH AN OBJECT


// SYNTAX
  //for (const myKey in myObject) {
    // We are looping through the keys of the object. To get the value you
    //    need to use the key (myKey) as a way to reference the key/value pair.
  //console.log(myObject[myKey]);
  //}

const user = {
  //KEY: name // VALUE: Sandra
  name: 'Sandra',
  age: '28',
};

for (const theKey in user) {
  // Use the key to access the value from the key/value pair
  console.log(user[theKey]);
}

// EXAMPLE
const carProfile = {
   make: "bmw",
   year: "2015",
   vinNumber: "343434"
}

for (const myKey in carProfile) {
  console.log(myKey);
  console.log("The " + myKey + " is " + carProfile[myKey]);
}
    // Returns:
    //make (KEY)
    //The make is bmw (VALUE)
    //Year (KEY)
    //The year is 2015 (VALUE)
    //vinNumber (KEY)
    //The vinNumber is 343434 (VALUE)

// OBJECT.KEYS()

//SYNTAX
  //const myObject = {
    // Key/value pairs here
  //};

  //Object.keys(myObject);

// EXAMPLE
const userProfile = {
  name: 'Sandra',
  age: '28',
};

const keysArray = Object.keys(userProfile);

console.log(keysArray);
    // Returns:
    // ['name', 'age']

//EXAMPLE

const persona = {
  name: 'Sandra',
  lastName: 'Møller-Sørensen',
  country: 'bøgda',
};

const userProfileKeys = Object.keys(persona)
// ["name"], ["lastname"], ["country"]
console.log(userProfileKeys);

// ["Sandra"], ["Møller-Sørensen"], ["bøgda"]
console.log(Object.values(persona));

const userProfileEntriesArray = Object.entries(persona);
// object value
console.log("userProfileEntriesArray", userProfileEntriesArray);

