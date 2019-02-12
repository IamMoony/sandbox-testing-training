class Person {
	//properties
	firstName = "";
	lastName = "";
	//function
	contructor(firstName, lastName) {
		this.firstName = firstName;
		this.firstName = lastName;
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
//propertie put function variable
var fullName = new Person("Mario", "Nelson");

console.log(fullName.name());

console.log(fullName.whoAreYou());


//Extending the students class to the person class
class student extends person {
//Create new propertie called course ;
	course ;
//Take first and last name from the parent class (person)
//Create new contructor with the same parameters and add course parameter 
// (parameters are mostly the properties we created first)
	contructor(firstName, lastName, course) {
		//Refer to the parent class
		//We use the super function to call the constructor of the parent class
		super(firstName,lastName);
		//sets the value of course to course
		this.course = course;
	
}
//Create a new function whoAreYou wich returns the whoareyou 
// function from the previous class (person) and some additional string with the new
// propertie course Inheritance

// A class can inherit from another class. We can create a 
// class blue-print that extends an existing class blue-print by adding other methods or properties.
	whoAreYou() 
		return`${super.whoAreYou()} and I am studying ${this.course}`
	}
}
//create a new variable wich create a new student with the following values
//the keyword new refers to the constructor!!
//Also called an instance of an class!!

var student1 = new student("John", "Due", "Angular6");

document.write(student1.whoAreYou())

//Three different Access Modifiers --> public, private, protected
