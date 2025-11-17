//1
const arrayFromRange = (min, max) => {
    const myArray = []
    for (let i =min; i<= max; i++)
        myArray.push(i)
    return myArray
}
console.log(arrayFromRange(0,49))
//2
const numbers = [1,2,3,4,5]
const includes = (x) => {
    for (let i of numbers)
        if (x === i)
            return true
        return false
}
console.log(numbers.includes(30))
//3
const exclude = (x, array) => {
    return array.pop(x)
}
console.log(exclude(1, numbers))

//4
const move = (array, index, offset) => {
    for (array[index] in array)
        temp = array[index]
        array[index] = array[offset]
        array[index] = temp
    return array
}
console.log(move([1,2,3,4], 0, 3))

console.log(a)
var a = 4
greet()
function greet(){
    console.log("Hellloooo")
}

//SETTERS AND GETTERS
const person = {
    fName: "Maryam",
    lName: "Ibikunle",
    get fullName(){
        return `${this.fName} ${this.lName}`
    },
    set fullName(value){
        parts = value.split(' ')
        this.fName = parts[0]
        this.lName = parts[1]

    }
}
person.fullName = "Ade Tola"
console.log(person)
