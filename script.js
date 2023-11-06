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
