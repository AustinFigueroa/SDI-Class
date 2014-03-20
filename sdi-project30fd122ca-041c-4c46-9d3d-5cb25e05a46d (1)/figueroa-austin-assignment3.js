// alert("JavaScript works!");

// Austin Figueroa
// SDI 1403
// Assignment 3
// Going on my own

// My variables
var Final= "Everything we did goes as follows: ";
var numOfFriends = 8;
var myConfirmation = false;

//prompt
question1=prompt("How many friends do you think are online?");

//output 
 var friendsListNumber = function(firstNumber, secondNumber) {
    var outcome;
    
    outcome = firstNumber + secondNumber;
    
    console.log("You have " + outcome + " friends online.");
 };
 
  //math
 friendsListNumber(2,3);
 
 friendsListNumber(2,6);

console.log("You guessed that the number of friends online were " + question1);

//confirmation/conditional
myConfirmation = confirm("Did you guess correctly on the number of friends?")
if (myConfirmation ==! true) {
    console.log("Sadly but you were wrong.")
} else {
    console.log("Nice Job! You were right!");
};
console.log(" Now it's time to talk to some of those friends to see if they want to play!");

//array property
var friendsOnline = ["Gia", "Casey", "Nicholas", "Tyler", "Drezdan", "Alan", "Melissa", "Eric"];

for (var i = 0; i < friendsOnline.length; i++) {
    
    console.log("Online Friend: "+friendsOnline[i]);

};

// Json data

var jsonData = {
    
    "gamer buddies": [
        
        {
           "firstName": "Gia",
           "role": "attack damage carry",
           "fightingRank": "B Class"
        },
        {
            "firstName": "Casey",
            "role": "Jungler",
            "fightingRank": "A Class"
        },
        {
            "firstName": "Drezdan",
            "role": "Support",
            "fightingRank": "C Class"
        },
        {
            "firstName": "Nicholas",
            "role": "Tank",
            "fightingRank": "A Class"
        },
        {
            "firstName": "Tyler",
            "role": "Mage",
            "fightingRank": "S Class"
        
        },
        {
           "firstName": "Eric",
           "role": "Tank",
           "fightingRank": "D Class"
        },
        {
            "firstName": "Melissa",
            "role": "Mage",
            "fightingRank": "S Class"
        },
        {
            "firstName": "Alan",
            "role": "Jungler",
            "fightingRank": "A Class"
        }
    
    ]
    
};
    
    for (var key in jsonData.gamerBuddies) {
        
        for (newKey in jsonData.gamerBuddies[key]) {
          
          if(newKey === "firstname") {
            console.log(newKey+" : " + jsonData.students[key][neyKey]);
        };
        
        };

// while loop/return
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

// array 
var friendsOnline = ["Gia", "Casey", "Nicholas", "Tyler", "Drezdan"];
for (var i = 0; i < friendsOnline.length; i++) {
    
    if (friendsOnline[i] =="Gia", "Casey", "Nicholas", "Tyler", "Drezdan" )
    {
        
        console.log(friendsOnline[i] + " does want to play with you.")
    
    } else {
       
        console.log(friendsOnline[i] + " does not want to play with you.")
        
    };

};

var friendsOnline = ["Alan", "Melissa", "Eric"];
for (var i = 0; i < friendsOnline.length; i++) {
    
    if (friendsOnline[i] =="Alan", "Melissa", "Eric")
    {
        
        console.log(friendsOnline[i] + " does not want to play with you.")
    
    } else {
       
        console.log(friendsOnline[i] + " does want to play with you.")
        
    };

};

//for loop
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

//global variables
var string1 = "show" ;
var string2 = "snack";
var decision = true;

//return String
var whatToDo = function(toDo){
        var a =" The Simpsons,";
        var b = " Family Guy,";
        var c = "then Naruto";
        var thing1 = "chicken nuggets,";
        var thing2 = "burritoes,";
        var thing3 = "Sandwhich";
    if (3>2===true) {

	console.log("I should watch a" + string1 +".");
    
        console.log("So I'm going to watch" + a + b + c + " in that order.");
    } else { 

	console.log("I should grab a" + string2 + ".");
	console.log("I will eat" + thing1 + thing2 + thing3 + " in that order.");
};
};

//function
returnWhatToDo = whatToDo()

//output
console.log(Final+ " talked to " + returnTalk + " friends, played with only " + returnPlay+ " them and finished the day off with a few " + string1 + "s.");
