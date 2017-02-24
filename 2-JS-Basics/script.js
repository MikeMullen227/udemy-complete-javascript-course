// Lecture: variables
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge)
*/


/////////////////////////////////////
// Lecture: variables 2
/*
var name = 'John'
var age = 26;

//console.log(name + age);
//console.log(age + age);

var job, isMarried;

//console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

var lastName = prompt('What is the last name?');
console.log(lastName);

alert(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');
*/


//////////////////////////////////
// Lecture: operators
/*
var now = 2016
var birthYear = now - 26;

birthYear = now - 26 * 2;
//2016 - 52
//1964

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26
//ageJohn = 26

ageJohn++
ageMark *= 2; 

console.log(ageJohn);
console.log(ageMark);
*/


/////////////////////////////////////
// Lecture: if/else statements
/*
var name = 'John';
var age= 26;
var isMarried = 'no';

if (isMarried === 'yes') {
	console.log(name + ' is married!')
} else {
	console.log(name + ' will hopefully marry soon :)');
}

isMarried = true;


if(isMarried){
	console.log('Yes!');
} else {
	console.log('No!');
}


if(isMarried){
	console.log('Yes!');
}

if (23 == "23") {
	console.log('Something to print...');
}
*/

//////////////////////////////////////////
// Lecture: boolean logic and switch

/*
var age = 20;

if(age < 20){
	console.log('John is a teenager');
}else if(age >= 20 && age < 30){
	console.log('John is a young man.')
}else{
	console.log('John is a man.')
}


var job = 'cop';

switch(job){
	case 'teacher':
		console.log('John teaches kids.');
		break;

	case 'driver':
		console.log('John drives a cab.')
		break;
	case 'cop':
		console.log('John helps fight crime.')
		break;
	default:
		console.log('John does something else.');
}
*/


//////////////////////////////////
// Coding challenge 1
/*
var johnAge = 25;
var johnHeight =100;

var samAge = 55
var samHeight = 200

var mikeAge = 36;
var mikeHeight = 125;


var johnScore = johnHeight + 5 * johnAge;
var mikeScore = mikeHeight + 5 * mikeAge;
var samScore = samHeight + 5 * samAge;

if(johnScore > mikeScore && johnScore > samScore){
	console.log('John wins with a score of ' + johnScore);
}else if(mikeScore > johnScore && mikeScore > samScore){
	console.log('Mike wins with a score of ' + mikeScore);
}else if(samScore > mikeScore && samScore > johnScore){
	console.log('Sam wins with a score of ' + samScore);
}else {
	console.log('The score is a tie.');
}
*/


//////////////////////////////////////
// Lecture: Functions

/*
	function calculateAge(yearOfBirth) {
	var age = 2016 - yearOfBirth;
	return age;
}

var ageJohn = calculateAge(1990);
var ageMike= calculateAge(1969);
var ageMary = calculateAge(1948);
console.log(ageJohn);
console.log(ageMary);
console.log(ageMike);

function yearsUntilRetirement(name, year){
	var age = calculateAge(year);
	var retirement = 65 - age ;

	if(retirement >= 0){
	console.log(name + ' retires in ' + retirement + ' years.');
	}else{
		console.log(name + ' is already retired.');
	}
}

yearsUntilRetirement('John', 1990)
yearsUntilRetirement('Mike', 1969)
yearsUntilRetirement('Mary', 1948)
*/




/////////////////////////////////////
// Lecture: Statements and expressions

/*
//statement - just performs an action
function someFun(par){
	//code
}

//expression - produces value or outcome
var someFun = function(par){
	//code
}

//expressions
3 + 4;
var x = 3;

//statements 
if(x === 5){
	//do something
}
*/


////////////////////////////////////
// Lecture: Arrays
/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();
console.log(john);

john.indexOf('Smith');

if(john.indexOf('teacher') === -1){
	console.log('John is NOT a teacher.')
}
*/


/////////////////////////////////////
// Lecture: Objects
/*
var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function(yearOfBirth) {
		return 2016 - yearOfBirth;
	}
};

console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz])

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();
jane.name = 'jane';
jane.lastName = 'Smith';
jane['yearofBirth'] = 1969;
jane['job'] = 'retired'
jane['isMarried'] = true;

console.log(jane);
*/


///////////////////////////////////////
// Lecture: Objects and Methods


// v1.0
/*
var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function() {
		return 2016 - this.yearOfBirth;
	}
};

//console.log(john.calculateAge(1970));
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);



// v2.0

var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function() {
		this.age = 2016 - this.yearOfBirth;
	}
};

john.calculateAge();
console.log(john);
*/


//////////////////////////////////////
// Lecture: Loops


//var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

/*
// for loops
for (var i = 0; i < names.length; i++) {
	console.log(names[i]);
}

for (var i = names.length - 1; i >=  0 ; i--) {
	console.log(names[i])
}
*/

/*
//while loops
var i = 0;
while(i < names.length) {
	console.log(names[i]);
	i++;
}


for (var i = 1; i <= 5; i++) {
	console.log(i)

	if (i === 3) {
		break;
	}
}


for (var i = 1; i <= 5; i++) {
	if (i === 3) {
		continue;
	}
	console.log(i);
}
*/


////////////////////////////////////////
// Coding Challenge 2

/*
var years = [1980, 2002, 1956, 1973, 2012];

var ages = [];

function calcAge(years){
for(var i = 0; i < years.length; i++){
	ages.push(2016 - years[i]);
}
console.log(ages);
}

calcAge(years);

var ageCheck = [];

function overEighteen(years){
for(var i = 0; i < years.length; i++){
	ageCheck.push(2016 - years[i]);
	if(ageCheck[i] >= 18){
		ageCheck.push(true);
	} else{
		ageCheck.push(false);
	}
}
console.log(ageCheck);
}

overEighteen(years);


function printFullAge(years){
	ageCheck = [];
	trueFalse = [];
for(var i = 0; i < years.length; i++){
	ageCheck.push(2016 - years[i]);
	if(ageCheck[i] >= 18){
		trueFalse.push(true);
	} else{
		trueFalse.push(false);
}
}
console.log(trueFalse);
}

printFullAge(years);
*/


