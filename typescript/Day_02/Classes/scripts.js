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
    //function
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
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
var testperson = new Person("Simon", "Doe");
console.log(testperson.name());
console.log(testperson.whoAreYou());
//propertie put function variable
//Extending the students class to the person class
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(firstName, lastName, course) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.course = course;
        return _this;
    }
    Student.prototype.whoAreYou = function () {
        return _super.prototype.whoAreYou.call(this) + " and I am studying " + this.course;
    };
    return Student;
}(Person));
// var fullName = new Person("Mario", "Nelson");
// console.log(fullName.name());
// console.log(fullName.whoAreYou());
//create a new variable wich create a new student with the following values
//the keyword new refers to the constructor!!
//Also called an instance of an class!!
var student1 = new Student("John", "Due", "Angular6");
document.write(student1.whoAreYou());
//Three different Access Modifiers --> public, private, protected
