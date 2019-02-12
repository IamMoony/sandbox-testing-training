var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
        //properties
        this.firstName = "";
        this.lastName = "";
    }
    //function
    Person.prototype.contructor = function (firstName, lastName) {
        this.firstName = firstName;
        this.firstName = lastName;
    };
    //function
    Person.prototype.name = function () {
        return "My name is " + this.firstName + " " + this.lastName;
    };
    //function
    Person.prototype.whoAreYou = function () {
        return "Hi, " + this.name();
    };
    return Person;
}());
//propertie put function variable
var fullName = new Person("Mario", "Nelson");
console.log(fullName.name());
console.log(fullName.whoAreYou());
//Extending the students class to the person class
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //Take first and last name from the parent class (person)
    //Create new contructor with the same parameters and add course parameter 
    // (parameters are mostly the properties we created first)
    student.prototype.contructor = function (firstName, lastName, course) {
        //Refer to the parent class
        //We use the super function to call the constructor of the parent class
        _this = _super.call(this, firstName, lastName) || this;
        //sets the value of course to course
        this.course = course;
    };
    return student;
}(person));
return _super.whoAreYou.call(this) + " and I am studying " + this.course;
//create a new variable wich create a new student with the following values
//the keyword new refers to the constructor!!
//Also called an instance of an class!!
var student1 = new student("John", "Due", "Angular6");
document.write(student1.whoAreYou());
//Three different Access Modifiers --> public, private, protected
