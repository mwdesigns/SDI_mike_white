// author Mike White
// Created on: February 12, 2012
// Assignment: Project 3

alert("JavaScript works!");

var 
	zombieHunter = "Columbus",
	numZombies = 5,
	bodyParts = ["arm","leg","chest","head" ],
	bullets = 50
	bulletsPerZombie = [2, 4, 6, 8]
;
var zombieParts = function () {
	var bodyPart = bodyParts[partNumber];
		bulletsRemaining = bulletsPerZombie[partNumber]
		console.log("He pulled out his shot gun and shot for the " + bodyPart + ". " + "Remembering the double tap rule he thought, there goes " + bulletsRemaining + " bullets");
};
var zombieDown = 1,
	zombieToGo = numZombies - 1
;
// boolean
var noZombies = true;


// here's the story...
console.log(
zombieHunter + " walked out of the convenient store just in time to see " + numZombies +  " zombies coming toward him. But he could remember if he was supposed to aim for the " + bodyParts + "."
);

// for loop
for (var partNumber = 0; partNumber < bodyParts.length; partNumber++) {
	zombieParts()
}

// while loop
while (numZombies > 0) {
	console.log("There's " + zombieDown + " zombies down and " + zombieToGo + " zombies to go.");
	numZombies--;
	zombieDown++;
	zombieToGo--;
	
};

// if statement
if (noZombies = 1) {
console.log("Take That! No more zombies.");
} else {
console.log("Oh NO! there are more zombies.");
}

//json handler with for loop
var handleData = function (json) {
	for (var i = 0; i < json.key.length; i++){
		var key = json.key[i];
		console.log("obj: " + key.obj + ", obj2: " + key.obj2 + ", obj3: " + key.obj3);
	}
};
handleData(json);