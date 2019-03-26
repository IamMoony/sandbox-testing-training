class Person {
	//properties
	firstName;
	lastName;
	//function
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
//function
	name(){
		return `My name is ${this.firstName} ${this.lastName}`;
	}
//function
	whoAreYou(){
		return `Hi, ${this.name()}`;


	}
}

var testperson = new Person("Simon", "Doe");
console.log(testperson.name());
console.log(testperson.whoAreYou());

//propertie put function variable



//Extending the students class to the person class
class  Student extends Person {

	course;

	constructor(firstName, lastName, course){
		super(firstName,lastName)
		this.course = course;

	}

	whoAreYou() {
		return `${super.whoAreYou()} and I am studying ${this.course}`
	}
}

// var fullName = new Person("Mario", "Nelson");

// console.log(fullName.name());

// console.log(fullName.whoAreYou());
//create a new variable wich create a new student with the following values
//the keyword new refers to the constructor!!
//Also called an instance of an class!!

var student1 = new Student("John","Due","Angular6");

document.write(student1.whoAreYou());

//Three different Access Modifiers --> public, private, protected
