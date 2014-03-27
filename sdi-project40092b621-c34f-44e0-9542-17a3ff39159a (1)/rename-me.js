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

// Question 3
// Find the number of hours or days difference between two dates.

var theDate = function (date1,date2) {
                var results = [];
                var difference = (date1 > date2) ? date1.getTime() - date2.getTime() : date2.getTime() - date1.getTime();
                results[3] = difference / 1000;
                results[2] = results[3] / 60;
                results[1] = results[2] / 60;
                results[0] = results[1] / 24;
                return results;
                
    };

var date1 = new Date(2014,3,20);
var date2 = new Date(2014,4,3);
var timeConverter = theDate(date1,date2);
console.log("The difference between the two dates is " + timeConverter[0] + " days.");

// Question 4
// Title-case a string (split into words, then uppercase the first letter of each word)

var upperCase = function (Case) {
		var upper = Case.split(" ");
		var result = "";
		for (var i = 0, j = upper.length; i < j; i++) {
			var upperUpperCase = upper[i].replace(upper[i].charAt(0),(upper[i].charAt(0)).toUpperCase());
			result = result.concat(upperUpperCase + " ");
		};
		return result;
	};
        console.log(upperCase("austin figueroa's riddle me fun"));

// Question 5
// 
