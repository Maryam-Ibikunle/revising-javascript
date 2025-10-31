const circle = {
    radius: 23,
    lacation: {
        x: 1,
        y: 2
    },
    draw: function() {
        console.log("draw")
    }
}
circle.draw()

const person = {
    name: "Maryam",
    age: 20,
    parents: {
        father: {
            name: "Ibikunle",
            age: 71
        },
        mother: {
            name: "Adewumi",
            age: 61
        }
    },
    greet: function(){
        return `Hello ${this.name}`
    }
}

console.log(person.greet())
console.log(person.parents.father.age)

//FACTORY FUNCTION >>> Create a function that creates objects >>> CAMEL CASE NAMING CONVENTION
const createCircle = (radius) =>{
    return {
        radius: radius,
        diameter: 2*radius,
        area : function(){
            return (22/7)*radius**2
        },
        perimeter: function() {
            return 2*(22/7)*radius
        }
    }
}

const circle1 = createCircle(2)
console.log(circle1.perimeter())
console.log(circle1.area())

const circle2 = createCircle(3)
console.log(circle2.perimeter())
console.log(circle2.area())

const circle3 = createCircle(13)
console.log(circle3.perimeter())
console.log(circle3.area())


//CONSTRUCTOR FUNCTION >>>CREATES OBJECTS >>> PascalCase >>> this.propertiy = property >>> new constructor
function Circle(radius){
    //no return
    this.radius = radius
    this.diameter = 2*radius
    this.perimeter = function(){
        return 2*(22/7)*radius
    }
    this.area = function(){
        return (22/7)*radius**2
    }
}
const circle4 = new Circle(2)
console.log(circle4.perimeter())
console.log(circle4.area())

const circle5 = new Circle(3)
console.log(circle5.perimeter())
console.log(circle5.area())
const circle6 = new Circle(13)
console.log(circle6.perimeter())
console.log(circle6.area())

//Primitives and Objects
//OBJECTS ARE NOT STORED INSIDE THE VARIABLES, THEY ARE STORED IN A MEMORY LOCATION AND THE ADDRESS OF THAT MEMEORY LOCATION IS STORED INSIDE THAT VARIABLE

let x = {value: 30}
let y = x //COPYING x INTO  y MEANS COPYING THE ADDRESS OF x INTO y. HENCE, WHEN ALTERED USING x OR y, THEY ARE BOTH AFFECTED
console.log(x,y)
x.value = "Maryam"
console.log(x,y)

//THIS JAVA SHIT IS JUST BEGINNING TO MAKE SENSE
let num = {value: 10}
const increase = (num) => {
    num.value++
}
increase(num)
console.log(num)

const createCir = (radius) =>{
    return {
        diameter: 2*radius,
        area: function(){
            return (22/7)*radius**2
        }
    }
}
function Circ(radius){
    this.radius = radius
    this.area = function(){
        return (22/7)*radius**2
    }
}
const circ = createCir(34)
console.log(circ.area())

const circl = new Circ(34)
console.log(circl.area())

//CLONING AN OBJECT
 const square = {
    length : 23,
    breadth : 34,
    area : function(){
        return this.length*this.breadth}
 }
 const square2 = Object.assign({},square) //1. This line  clones the above line 2.SPREAD ...
 console.log(square2.area())

//Use SPREAD ...
const another = {...square}
console.log(another.area())

//GARBAGE COLLECTOR >>> AUTOMATIC DEALLOCATION OF MEMORY THAT IS NO LONGER NEEDED UNLIKE LOW LEVEL LANGUAGES LIKR C//C++


//STRING
//There are 2 strings. Primitive and Object
//primitive
const name = "Maryam"

//object
const name2 = new String("Ibidoyin")
console.log(typeof name2)
//The object properties are wrapped into the primitive when .notation is used.

//DATE
const now = new Date()
console.log(now)
const date = new Date("June 11 2018")
console.log(date)
