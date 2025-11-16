const numbers = [3,4]
numbers.unshift(1,2)
numbers.push(5,6)
console.log(numbers)

//FINDING ELEMENTS IN AN ARRAY
console.log(numbers.indexOf(6))
console.log(numbers.lastIndexOf(6))
console.log(numbers.includes(2))

//FINDING REFERENCE TYPES IN AN ARRAY
const courses = [
    {id:234, name:"Maryam"},
    {id:235, name:"Ibidoyin"},
    {id:236, name:"Niniola"}
]
//THE FUNCTION IS A PREDICATE/CALLBACK
const found = courses.find(function(course){
    return course.name === "Maryam"
})
// console.log(found)

//REMOVING ELEMENTS
// console.log(numbers.pop()) //LAST ELEMENT
// console.log(numbers.shift()) //FIRST ELEMENT

//EMPTYING ARRAYS
//1. numbers.length = 0

//CONCATENATING ARAYS
//const combines = first.concat(second)

//SLICING INTO 2 PARTS

// const numbers2 = [...numbers, '7', '8']
// console.log(numbers2)
// numbers2.reverse()
// console.log(numbers2)

// courses.sort(function(a,b){
//     if (a.name<b.name) return -1
// })
// console.log(courses)