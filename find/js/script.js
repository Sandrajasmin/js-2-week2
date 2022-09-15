// FIND ()

        //Parameters
        //element: The current element in the array that we are working with

        //index: (Optional) The current index of where we are in the array

        //array: (Optional) The original array filter was called on


const values = [100, 200, 300, 400, 500];

const newArray = values.find((element, index, array) => {
  // Return true if you find the element you want
  // Return false if you haven't found the element you want
});


// PRACTICAL IN CLASS Find the element with value 5
const values1 = [ 1, 2, 4, 5, 6, 88, 100, 3];

const foundValues = values1.find((currentValue) => {
    //condition 
    if (currentValue === 5) {
        return true;
    }
});

console.log("foundValues", foundValues);

// PRACTICAL IN CLASS given an array of temperatures find the first temperature above 120 Fahrenheit

const temperatures = [ 109.2, 115.2, 119.9, 120.8, 150.0, 175, 182];

const findTemperatures = temperatures.find((currentTemp) => {
    if (currentTemp >= 120) {
        return true;
    }
});

console.log(findTemperatures);

//refactor
const findTemperatures1 = temperatures.find(
    (currentTemp) => currentTemp >= 120, 
);

console.log(findTemperatures1);


// Find the first name available beginning with a specific letter (H)

const profiles =[
    {
        name: "uzo",
        id: 234234
    },
    {
        name: "hesh",
        id: 78787
    },
    {
        name: "emil",
        id: 777763
    },
    {
        name: "clarks",
        id: 673254782365472
    }
];

const findUser = profiles.find((profile) => {
    if (profile.name[0].toLowerCase() === 'h') {
        return true;
    }
})
console.log(findUser);

// Refactored
    const foundUser = profiles.find(({ name }) => name[0].toLowerCase() === 'h');
    console.log(foundUser);

// Find if a book is in stock

const books = [
    { title: 'Building a Spaceship', inStock: false },
    { title: 'Growing Orchids', inStock: false },
    { title: 'River Fisher', inStock: true },
];

const findBook = books.find((book) =>{
    if(book.inStock === true ){
        return true
    }
})

        // 'foundBook' will be 'undefined' if no book was
        //  found by the find() array method
if (findBook === undefined) {
    console.log('No books in stock!');
} else {
    console.log('First book in stock:', findBook);
}
        // Returns:
        // No books in stock!

// Refactored 
const foundBook = books.find(({ inStock }) => inStock);

if (!foundBook) {
  console.log('No books in stock!');
} else {
  console.log('First book in stock:', foundBook);
}

