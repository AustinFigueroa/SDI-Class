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
