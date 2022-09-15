// SOME ()
const values = [100, 200, 300, 400, 500];

const newArray = values.some((element, index, array) => {
  // Return true if it matches your condition. If it does, it will stop iterating and return true for the result of the array
  // Return false if the condition is not matched
});


// Basic example 1: Condition matches
const values1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const MatchedCondition = values1.some((value, index) => {
  console.log({ index, value });
  if (value >= 3) {
    return true;
  }
});

console.log('MatchedCondition:', MatchedCondition);
        // Return/output:
        // index: 0 value: 0
        // index: 1 value: 1
        // index: 2 value: 2
        // index: 3 value: 3
        // didMatchCondition: true

//Basic example 2: Condition doesn’t match

const values2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const didMatchCondition = values2.some((value, index) => {
  console.log({ index, value });
  if (value >= 100) {
    return true;
  }
});

console.log('didMatchCondition:', didMatchCondition);
        // Return/output:
        // index: 0 value: 0
        // index: 1 value: 1
        // index: 2 value: 2
        // index: 3 value: 3
        // index: 4 value: 4
        // index: 5 value: 5
        // index: 6 value: 6
        // index: 7 value: 7
        // index: 8 value: 8
        // index: 9 value: 9
        // didMatchCondition: false

const modules = [
  { name: 'Introduction to Programming', isComplete: true },
  { name: 'HTML', isComplete: true },
  { name: 'CSS', isComplete: false },
  { name: 'JavaScript', isComplete: true },
];

const isSomeCoursesFinished = modules.some((currentModule, index) => {
  console.log('index', index);
  return currentModule.isComplete === true;
});

console.log(isCourseFinished);
// Returns:
// index 0
// true

// EVERY ()

// SYNTAX
    //const values0 = [100, 200, 300, 400, 500];

    //const newArray0 = values0.every((element, index, array) => {
        // Return true if it matches your condition and every() will keep looping
        // Return false if the condition is not matched and it will immediately break out, and return false as the final result. This is because not "every" value is valid.
    //});


// Basic example 1: Conditions all met
const values3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const didAllMatchCondition = values3.every((value, index) => {
  console.log('index:', index, 'value:', value);
  if (value >= 0) {
    return true;
  }
});

console.log('didAllMatchCondition:', didAllMatchCondition);
// index: 0 value: 0
// index: 1 value: 1
// index: 2 value: 2
// index: 3 value: 3
// index: 4 value: 4
// index: 5 value: 5
// index: 6 value: 6
// index: 7 value: 7
// index: 8 value: 8
// index: 9 value: 9
// didAllMatchCondition: true

// Basic example 2: Conditions not met

const values0 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const didAllMatchCondition1 = values0.every((value, index) => {
  console.log('index:', index, 'value:', value);
  if (value <= 3) {
    return true;
  }
});

console.log('didAllMatchCondition1:', didAllMatchCondition1);
// index: 0 value: 0
// index: 1 value: 1
// index: 2 value: 2
// index: 3 value: 3
// index: 4 value: 4
// didAllMatchCondition: false

const modules1 = [
    { name: 'Introduction to Programming', isComplete: true },
    { name: 'HTML', isComplete: true },
    { name: 'CSS', isComplete: false },
    { name: 'JavaScript', isComplete: true },
  ];
  
  const isCourseFinished = modules1.every((currentModule) => {
    return currentModule.isComplete === true;
  });
  
  console.log(isCourseFinished);
  // Returns:
  // false
  