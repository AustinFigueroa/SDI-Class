// alert("JavaScript works!");

// Austin Figueroa
// SDI 1403
// Progect 1

// My variables
var Final= "Everything we did goes as follows: ";
var numOfFriends = 8;
var myConfirmation = false;

question1=prompt("How many friends do you think are online?");
 
 var friendsListNumber = function(firstNumber, secondNumber) {
    var outcome;
    
    outcome = firstNumber + secondNumber;
    
    console.log("You have " + outcome + " friends online.");
 };
 
 friendsListNumber(2,3);
 
 friendsListNumber(2,6);

console.log("You guessed that the number of friends online were " + question1);

myConfirmation = confirm("Did you guess correctly on the number of friends?")
if (myConfirmation ==! true) {
    console.log("Sadly but you were wrong.")
} else {
    console.log("Nice Job! You were right!");
};
console.log(" Now it's time to talk to some of those friends to see if they want to play!");
var returnTalk;

var talkingLoop = function(listNumber){
    
    while( listNumber < 8) {
        
    console.log("You are talking to someone.");
    console.log("You have talk to " + listNumber +" of your friends to see if they want to play.");
    listNumber = listNumber + 1;
        
    };
    
    return listNumber;

};

returnTalk = talkingLoop(1);

console.log("You have talked to " + returnTalk + " friends on your friendslist.");

var numOfFriends = 8;

console.log("After talking with your " + numOfFriends + " friends only");

numOfFriends = numOfFriends - 3;

console.log( +numOfFriends+" of them want to play with you right now.");

var returnPlay;

var playingLoop = function(play){
    
    for ( var i = play; i < 5; i = i + 1) {
        
        console.log("You have played with a friend.");
        console.log("You have " + i +" this many friends left to play with.");
        
    };
    
    return i;

};



returnPlay = playingLoop (1);

console.log("You have played with all " + returnPlay + " friends and now you are satisfied.");

var returnWhatToDo;

var string1 = "show" ;
var string2 = "snack";
var decision = true;

var whatToDo = function(toDo){
    var a =" The Simpsons,",
        b = " Family Guy,",
        c = "then Naruto";
    var thing1 = "chicken nuggets,",
        thing2 = "burritoes,",
        thing3 = "Sandwhich";
    if (decision === true) {

	console.log("I should watch a " + string1 +".");
    
        console.log("I will watch" + a + b + c + " in that order.");
    } else { 

	console.log("I should grab a " + string2 + ".");
	console.log("I will eat" + thing1 + thing2 + thing3 + " in that order.");
};
};

returnWhatToDo = whatToDo()


console.log(Final+ " talked to " + returnTalk + " friends, played with only " + returnPlay+ " them and finished the day off with a few " + string1 + "s.");

