// Example of Object in object literals.
// If you have more than 1 method don't use Object Literals.

const circle = {
    // In OOP others are properties in Object : properties uses to holds the value.
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    // But functions are methods : methods uses to define some logic.
    draw: function () {
        console.log("draw with object literals")
    }
};
circle.draw();


// Factory Function
function createCircle(radius) {
    return {
        // radius: radius, 
        // ES6 if you have value with same name of property then use only property name.
        radius,
        draw: function () {
            console.log("draw with factory function")
        }
    }
}
const circle2 = createCircle(1);
console.log(circle2.radius)
circle2.draw();


// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("Draw with constructor function.")
    }
}

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

const constructorCircle = new Circle(1);
constructorCircle.draw();








// Function are Objects...

function Circle2(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("circle2 draw")
    }
}
const another = new Circle2(2);
// the declare function [Circle2] is repesent like this function [Circle3] in js Engine
const Circle3 = new Function('radius', `
this.radius = radius;
    this.draw = function () {
        console.log("circle2 draw")
    }
`)
// it shows that function are objects
const circle3 = new Circle3(1);
Circle3.call({}, 1)
Circle3.apply({}, [1, 2, 3])







// Value and Reference type
let x = 10;
let y = x;
x = 20;
// ans: x = 20; and y = 10; because both behave independ.

let a = { value: 10 };
let b = x;
a = 20;
// ans: a = 20; and b = 20; because object not store in varaible its store in somewhere in memory or address 

// another example
// It is the primitive and its copied by the value so its return 10 because their are two independent properties
let number = 10;
function increase(number) {
    number++;
}
increase(number);
console.log(number);

// It is the object and its copied by their references so its return 11.
let obj = { value: 10 };
function increase(obj) {
    obj.value++;
}
increase(obj);
console.log(obj);




// Adding or Removing Properties
function Circle4(radius) {
    this.radius = radius;
    this.draw = function () {
        console.assert.log("circle4 Draw");
    }
}
const circle4 = new Circle4(10);

// for adding properties
// both are same:- .location is simpler but bracket notation is help in some condition like dynamic location.
circle4.location = { x: 1 }
circle4["location"] = { x: 2 }

// for Dynamic location it is helpful
const propertyName = "location";
circle4[propertyName] = { x: 3 }

// for removing properties

delete circle4.location;
// delete circle["location"];





// Enumerating Properties : To Enumerate all the members in object: 3 methods
function Circle5(radius) {
    this.radius = radius;
    this.draw = function () {
        console.assert.log("circle5 Draw");
    }
}
const circle5 = new Circle5(10);

// First Method [for in loop]
for (let key in circle5) {
    if (typeof circle[key] !== "function") {
        console.log(key, circle5[key])
    }


    // if (typeof circle[key] !== "function") {
    //     console.log(key, circle5[key])
    // } else {
    //     console.log(key, circle5[key])
    // }
}

// 2nd Method Object.keys()
// another approch to get all the keys and an object. it return all the keys in an array.
// with this approach we cannot separate properties from methods
const keys = Object.keys(circle5);
console.log(keys)

// 3rd method is [ in operator]: it is use to check the existence of property or a method in an object
if ('radius' in circle5)
    console.log("Circle5 has a radius")





// Abstraction : in which we hide details and show essentials
// in this case radius and draw method is essentials
function Circle6(radius) {
    this.radius = radius;

    this.defaultLocation = { x: 0, y: 0 };

    this.computeOptimumLocation = function (factor) {
        //...
    }
    this.draw = function () {
        this.computeOptimumLocation(0.1)
        console.assert.log("circle6 Draw");
    }
}
const circle6 = new Circle6(11);
circle6.computeOptimumLocation();
circle6.draw();