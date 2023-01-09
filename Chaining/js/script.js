// CHAINING

// SYNTAX
    //const values = [0, 1, 2, 3, 4];

    //const result = values
    //  .filter(/* This filter first runs */)
    //  .reduce(/* This reduce acts on the result of the filter */)
    //  .map(/* This map acts on the result of the reduce above */);



// Filter those elements whose price is greater than 100
const myProducts = [
    // Here we create an object and each
    // object has a name and a price
    { name: 'dress', price: 600 },
    { name: 'cream', price: 60 },
    { name: 'book', price: 200 },
    { name: 'bottle', price: 50 },
    { name: 'bedsheets', price: 350 }
];

// 2.map on those elements to a new array with the new sales price(50%)

const productsOnSale = myProducts
    .filter(({price}) => price > 100)
    .map(({name, price}) => {
        return `The ${name} new price is now ${price / 2} NOK`
    });

console.log("productsOnSale", productsOnSale);
    //Return:
        //The dress new price is now 300 NOK', 
        //'The cream new price is now 30 NOK', 
        //'The book new price is now 100 NOK', 
        //'The bottle new price is now 25 NOK', 
        //'The bedsheets new price is now 175 NOK'



// Practical example 1: Calculating discount for products in stock
// in this example, we have a list of products that
// we want to apply a discount to it for a sale, but only products where:

// 1. the price is 5 or higher (>= 5)
// 2. the products are in stock ( === true)

// use the map method to calculate a new property called discountedPrice
// to calculate the discount price = - (discounted percentage / 100) * price
// the discounted percentage will be 20

// The discount percentage being applied
const inventoryProducts = [
  { name: 'Milk', price: 5.0, inStock: true },
  { name: 'Cheese', price: 10.0, inStock: true },
  { name: 'Bread', price: 8.0, inStock: false },
  { name: 'Beans', price: 3.0, inStock: true },
  { name: 'Eggs', price: 12.0, inStock: true },
  { name: 'Rice', price: 4.0, inStock: false },
  { name: 'Meat', price: 25, inStock: true },
  { name: 'Coffee', price: 12.0, inStock: true },
  { name: 'Tea', price: 8.0, inStock: false },
  { name: 'Bottled Water', price: 4.0, inStock: false },
];

const inventoryProductFiltered = inventoryProducts.filter((product) => {
    if (product.price >= 5 && (product.inStock === true)) {
        return true;
    }
})

const discountedPrice = inventoryProducts.map((product) => {
    //price *0.8
    product.discountedPrice = product.price * 0.8;
    return product
})

console.log("discountedPrice", discountedPrice);


// RIGHT WAY TO WRITE IT
const discountedInventoryProducts = inventoryProducts
    .filter(({price, inStock}) => price >= 5 && (inStock === true))
    .map((product) => {
        //price * 0.8
        product.discountedPrice = product.price * 0.8;
        return true;
    })

console.log("discountedInventoryProducts", discountedInventoryProducts);

const DISCOUNT_PERCENTAGE = 20;

const inventoryProducts1 = [
  { name: 'Milk', price: 5.0, inStock: true },
  { name: 'Cheese', price: 10.0, inStock: true },
  { name: 'Bread', price: 8.0, inStock: false },
  { name: 'Beans', price: 3.0, inStock: true },
  { name: 'Eggs', price: 12.0, inStock: true },
  { name: 'Rice', price: 4.0, inStock: false },
  { name: 'Meat', price: 25, inStock: true },
  { name: 'Coffee', price: 12.0, inStock: true },
  { name: 'Tea', price: 8.0, inStock: false },
  { name: 'Bottled Water', price: 4.0, inStock: false },
];

const discountedProducts = inventoryProducts
  //filter the products that are equal to or above 5 as well as being in stock
  .filter((product) => {
    if (product.inStock === true && product.price >= 5) {
      return true;
    }
  })
  //map out the filtered products while performing a calculation to get the discount 
  //and storing it as a value (discountedPrice).
  .map((product) => {
    //The formula for calculating the discounted price is:
    // discount = price - (discount percentage / 100) * price
    product.discountedPrice =
      product.price - (DISCOUNT_PERCENTAGE / 100) * product.price;
    return product;
  });
console.log("Discounted price: ", discountedProducts);
    // Returns:
        // {name: 'Milk', price: 5, inStock: true, discountedPrice: 4}
        // {name: 'Cheese', price: 10, inStock: true, discountedPrice: 8}
        // {name: 'Eggs', price: 12, inStock: true, discountedPrice: 9.6}
        // {name: 'Meat', price: 25, inStock: true, discountedPrice: 20}
        // {name: 'Coffee', price: 12, inStock: true, discountedPrice: 9.6}

// Additional info regarding results average

const Students = [
    { name: 'Victoria', age: 19, isOnline: true, results: [80, 61, 66, 50, 91] },
    { name: 'Theo', age: 32, isOnline: false, results: [57, 99, 96, 72, 96] },
    { name: 'Markus', age: 54, isOnline: true, results: [50, 92, 70, 66, 90] },
    { name: 'Aksel', age: 21, isOnline: true, results: [77, 86, 70, 71, 75] },
    { name: 'Felix', age: 29, isOnline: false, results: [99, 76, 59, 74, 68] },
    { name: 'Benjamin', age: 48, isOnline: true, results: [65, 85, 74, 83, 54] },
    { name: 'Ulrik', age: 39, isOnline: true, results: [92, 72, 55, 69, 58] },
    { name: 'Alma', age: 28, isOnline: false, results: [92, 91, 66, 77, 71] },
    { name: 'July', age: 37, isOnline: true, results: [78, 70, 59, 76, 95] },
    { name: 'Leo', age: 42, isOnline: true, results: [55, 64, 88, 88, 95] },
];

const onlineStudents = Students 
    //Get only the students >= 30 and that are online
    .filter((student) => {
        if (student.age >= 30 && student.isOnline === true) {
            return true;
        }
    })
    // Reduce all of the student's averages to a class average
  .reduce((classAverage, student, index, studentsArray) => {
    // Reduce all of the student's results to a single average
    const studentsTotalMarks = student.results.reduce(
      (studentAverage, result, index, resultsArray) => {
        studentAverage += result / resultsArray.length;
        return studentAverage;
      },
      0,
    );
    // Add the average of the student to the class average
    classAverage += studentsTotalMarks / studentsArray.length;
    return classAverage;
  }, 0);

console.log("Students Average", onlineStudents);
// Returns:
// 73.72
  

