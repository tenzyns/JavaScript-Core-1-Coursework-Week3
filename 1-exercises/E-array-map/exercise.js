// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function multiplier(number){ //this is the call-back function
    return number * 10;
}

let multipliedNum0 = numbers.map(multiplier);
//using call back function for .map
console.log(multipliedNum0);

let multipliedNum = numbers.map(function multiplied (num) {return num * 100});
//declaring call-back function within the .map operation
console.log(multipliedNum);

let multipliedNum1 = numbers.map(function(num){return num * 20});
//declaring the call-back function as an anonymous function 
console.log(multipliedNum1);

let multipliedNum3 = numbers.map(num => {return num * 40});
//using arrow function by removing the function keyword
console.log(multipliedNum3);

let multipliedNum2 = numbers.map(num => num * 30);
//shortening the arrow function by removing the curly braces and skipping return keyword
console.log(multipliedNum2);
