// Function Constructor

/*
var john = {
	name: 'John',
	yearOfBirth: 1990,
	job: 'teacher'

};


var Person = function(name, yearOfBirth, job) {
		this.name = name;
		this.yearOfBirth = yearOfBirth;
		this.job = job;
		//this.calculateAge = function() {
			//console.log(2016 - this.yearOfBirth);
		//}
}

// using inheritance
Person.prototype.calculateAge = function(){
	console.log(2016 - this.yearOfBirth);

};

Person.prototype.lastName = 'Smith';

// instantiation because john is an instance of the Person object

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/



// Object.create

/*
var personProto = {

	calculateAge: function () {
		console.log(2016 - this.yearOfBirth);
	}
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, 
{
	name: { value: 'Jane'},
	yearOfBirth: { value: 1969},
	job: { value: 'designer'}
});
*/


// Primitives vs Objects


// Primitives
/*
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects
var obj1 = {
	name: 'John',
	age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions

var age = 27;
var obj = {
	name: 'Jonas',
	city: 'Lisbon'
};

function change(a, b) {
	a = 30;
	b.city = 'San Francisco';

}

change(age, obj);

console.log(age);
console.log(obj.city);


// Lecture: Passing function as arguments 

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
	var arrRes = [];
	for(var i = 0; i < arr.length; i++) {
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function maxHeartRate(el) {
	if(el >= 18 && el <= 81) {
		return Math.round(206.9 - (0.67 * el));	
	} else {
		return -1;
	}
}

function isFullAge(el) {
	return el >= 18;
}

function calculateAge(el) {
	return 2016 - el;
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);	



// Lecture: Functions returning functions

function interviewQuestion(job) {
	if (job === 'designer') {
		return function(name) {
			console.log(name + ', can you explain what UX design is?');
		} 
	} else if (job === 'teacher') {
		return function(name) {
			console.log('What subject do you teach ' + name + '?');
		} 
	} else {
			return function(name) {
				console.log('Hello ' + name + ', What do you do?')
			}
	}
}




var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('Jane');





interviewQuestion('teacher')('Mark');	


// Lecture: IIFE (Immediatley Invoked Function Expressions)

/*
function game() {
	var score = Math.random() * 10;
	console.log(score >= 5);
}
game();	

(function() {
	var score = Math.random() * 10;
	console.log(score >= 5);
})();

//console.log(score);

(function(goodLuck) {
	var score = Math.random() * 10;
	console.log(score >= 5 - goodLuck);
})(5);
 */


 // Lecture: Closures

/*
 function retirement(retirementAge) {
 	var a = ' years left until retirement.';
 	return function(yearOfBirth) {
 		var age = 2016 - yearOfBirth;
 		console.log((retirementAge - age) + a);
 	}
 }

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);


//retirement(66)(1990);
retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);


/*
function interviewQuestion(job) {
	if (job === 'designer') {
		return function(name) {
			console.log(name + ', can you explain what UX design is?');
		} 
	} else if (job === 'teacher') {
		return function(name) {
			console.log('What subject do you teach ' + name + '?');
		} 
	} else {
			return function(name) {
				console.log('Hello ' + name + ', What do you do?')
			}
	}
}
*/

/*
function interviewQuestion(job) {
	return function (name) {
		if (job === 'designer') {
			console.log(name + ', can you explain what UX design is?'); 
	} else if (job === 'teacher') {
			console.log('What subject do you teach ' + name + '?');
	} else {
			console.log('Hello ' + name + ', What do you do?')
	}
	}
}

 interviewQuestion('designer')('John');
*/


// Lecture: Bind, Call and Apply

/*
var john = {
	name: 'John',
	age: 26,
	job: 'teacher',
	presentation: function(style, timeOfDay) {
		if (style === 'formal') {
			console.log('Good ' + timeOfDay + ' ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
		} else if (style === 'friendly') {
			console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
		}
	}
};

var emily = {
	name: 'Emily',
	age: 35,
	job: 'designer'

};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

//john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('afternoon');





var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
	var arrRes = [];
	for(var i = 0; i < arr.length; i++) {
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function isFullAge(el) {
	return el >= 18;
}

function calculateAge(el) {
	return 2016 - el;
}

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20)) {
console.log(ages);
console.log(fullJapan);
}


*/


//// Coding Challenge 4


var Question = function (question, answers, correctAnswer){
	this.question = question;
	this.answers = answers;
	this.correctAnswer = correctAnswer;
}

Question.prototype.displayQuestion() {
	console.log(this.question);
}
	 

var question1 = new Question('How far is the sun from the earth in miles?', [93000000, 65000000, 22000000], 0);
var question2 = new Question('What is the capital of the United States?', ['Los Angeles', 'New York', 'Washington D.C.'], 2);
var question3 = new Question('What percentage of the human body is made up of water?', [55, 78, 90], 1);

var questions = [question1, question2, question3];

var randomQuestion = questions[Math.floor(Math.random()*questions.length)]

//var randomQuestion = questions[Math.floor(Math.random()*questions.length)]
//console.log(randomQuestion);










