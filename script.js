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