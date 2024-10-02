function greet(name) {
    return function() {
      console.log(`Hi, ${name}!`);
    };
  }
  
  const greetJohn = greet('John');
  greetJohn(); 

  //.................................................
function outer() {
let count = 0;
function inner() {
    count++;
    console.log(count);
  }
   return inner;
} 
const counter = outer();
counter(); 
counter(); 
counter(); 

///////.................................................
function Animal(name){
    this.name = name;
}
Animal.prototype.sound = function(){
    console.log("The animal makes a sound.");
};
function Dog(name){
    Animal.call(this, name);
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function(){
    console.log("The dog barks");
};

const  myDog = new Dog("Buddy");
myDog.bark();

//.....................................................
function Vechile(name){
    this.name = name;
}
Vechile.prototype.lineage = function(){
    console.log("The vechile is vintage");
};
function Car(name){
    this.name = name;
}
Car.prototype = Object.create(Vechile.prototype);
Car.prototype.constructor = Car;    
Car.prototype.model = function(){
    console.log("The car is latest model");
};
const myCar = new Car("BMW");
myCar.model();


//.......................................................
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
} 
const rect = new Rectangle(12, 15);
console.log(rect.area()); 

//..........................................................
function invite(){
    console.log(`Hello, ${this.name}! Welcome to the club`);
}
const p = {name:'Sahith'};
invite.call(p);


//............................................................
var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}
var inviteEmployee1 = invite.bind(employee1);
var inviteEmployee2 = invite.bind(employee2);
inviteEmployee1("Hello", "How are you?"); // Hello John Rodson, How are you?
inviteEmployee2("Hello", "How are you?"); // Hello Jimmy Baily, How are you?