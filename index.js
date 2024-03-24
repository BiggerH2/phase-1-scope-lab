// Write your solution in this file!
// Declare a variable in global scope using var
var customerName = 'bob';

// Declare a constant in global scope using const
const leastFavoriteCustomer = 'Alice'; // Assign some initial value

// Write a function to access and uppercase the global variable
function upperCaseCustomerName() {
  return customerName.toUpperCase();
}

// Write a function to declare and assign a global variable
// Write a function to declare and assign a global variable
function setBestCustomer() {
    bestCustomer = 'not bob'; // Declare and assign the variable in global scope
  }

// Write a function to overwrite the global variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; // Changes the global variable
}

// Write a function that attempts to change a constant
// Write a function that attempts to change a constant
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Carol'; // This line will throw an error due to constant assignment
  }
  
// Testing the functions
console.log(upperCaseCustomerName()); // Output: 'BOB'

setBestCustomer();
console.log(bestCustomer); // Output: 'not bob'

overwriteBestCustomer();
console.log(bestCustomer); // Output: 'maybe bob'

// This will throw an error because we can't change a constant
// Uncomment the line below to see the error
// changeLeastFavoriteCustomer();// Write your solution in this file!
// Declare a variable in global scope using var
var customerName = 'bob';

// Declare a constant in global scope using const
const leastFavoriteCustomer = 'Alice'; // Assign some initial value

// Write a function to access and uppercase the global variable
function upperCaseCustomerName() {
  return customerName.toUpperCase();
}

// Write a function to declare and assign a global variable
function setBestCustomer() {
  // Declaring a global variable from inside a function (not recommended)
  var bestCustomer = 'not bob'; // Declare and assign the variable
}

// Write a function to overwrite the global variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; // Changes the global variable
}

// Write a function that attempts to change a constant
function changeLeastFavoriteCustomer() {
  // Attempting to change the constant (will throw an error)
  leastFavoriteCustomer = 'Carol'; // This line will throw an error due to constant assignment
}

// Testing the functions
console.log(upperCaseCustomerName()); // Output: 'BOB'

setBestCustomer();
console.log(bestCustomer); // Output: 'not bob'

overwriteBestCustomer();
console.log(bestCustomer); // Output: 'maybe bob'

// This will throw an error because we can't change a constant
changeLeastFavoriteCustomer();
