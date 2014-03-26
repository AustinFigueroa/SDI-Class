// alert("JavaScript works!");

// Austin Figueroa
// SDI 1403
// Assignment 4
// Riddle Me.

// Question 1
// Find the smallest value in an array that is greater than a given number

var myValue = function (array, number) {
        var value = array[2];
        for (i = 0; i < array.length; i++) {
                if (array[i] < value && array[i] > number) {
                        value = array[i];
                }
        }
        return value;
};

var array = [5, 82, 48, 92, 101, 138];
var number = 36;

console.log("The smallest value in the array that is greater than " + number + " is " + myValue(array, number) + ".");

// Question 2
// Format a number to use a specific number of decimal places, as for money: 2.1 --> 2.10

var decimal = function (decimals) {
        var newDecimal;
        newDecimal = decimals.toFixed(2);
        return (decimals + " is rounded to " + newDecimal);        
};

console.log(decimal(2.1));
