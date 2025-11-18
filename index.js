// let person = {
//     name: "Maryam",
//     age: 45
// }

// let sc = [1,2,3,4]
// sc[5]=9
// console.log(typeof sc[5])

// //swapping variables
// let a = 'red'
// let b = 'blue'
// let temp = a
// a = b
// b = temp

// console.log(a,b)

// //switch case
// let role = "Teacher"
// switch (role){
//     case "Teacher":
//         console.log("I am a teacher")
//         break
//     case "Tailor":
//         console.log("I am a tailor")
//         break
//     default:
//         console.log("I am me")
//         break
// }

// //for loop
// for (let i = 1; i<10; i++){
//     if (i == 1){
//         position = "st"
//     }else if (i == 2){
//         position = "nd"
//     }else if (i == 3){
//         position = "rd"
//     }else{
//         position = "th"
//     }
//     console.log("Hi " + i + position)
// }

// //while loop
// let i = 0
// while (i<10){
//     if (i) console.log("I am a while loop", i)
//     i++
// }

// //Do while
// i = 0
// do {
//     if (i) console.log("I am a do while loop", i)
//     i++
// } while (i<=5)


// //for in
// const list = [2,3,4,5, ,7]
// for (let j in list){
//     console.log(j) //index
// }
// for (let j in list){
//     console.log(list[j]) //element >>>>>use this or ffor of
// }
// for (let j of list){
//     console.log(j)
// }

// //ATM pin
// // const pin = 1234
// // while (true){
// //     let yourPin = prompt("Your pin ? ")
// //     if (yourPin === pin){
// //         console.log("Correct")
// //     }else{
// //         console.log("iNCORRECT")
// //         continue
// //     }
// // }


// //max of 2 numbers
// let d = 8
// let e = 9
// let greater = d > e ? (d+ "is greater") : (e + "is greater")
// console.log(greater)


// //landscape or portrait
// const isLandscape = (width, height) =>{
//     let isPortrait = width < height ? "Portrait" : "landscape"
//     return isPortrait
// }
// console.log(isLandscape(20,34))


// //FizzBuzz
// const FizzBuzz = (num) =>{
//     if (num%3===0 && num%5===0){
//         return "FizzBuzz"
//     } else if (num%3===0 && num%5!==0){
//         return "Fizz"
//     } else if (num%3!==0 && num%5===0){
//         return "Buzz"
//     } else{
//         return num
//     }
// }
// for (let i = 1; i<31; i++){
//     console.log(FizzBuzz(i))    
// }


// // SPEED LIMIT : 70 is the limit, return ok if speed is within the range and return 1 point for every 5km above the limit
// const speedLimit = (speed) =>{
//     const point = Math.floor((speed - 70)/5)
//     if (speed < 75) return "ok"
//     else if (speed >= 75 && point < 12) return point
//     else if (point >= 12) return "Liscense suspended"
// }
// console.log(speedLimit(76))
// console.log(speedLimit(176))
// console.log(speedLimit(3))


// //EVEN AND ODD
// const number = (num) => {
//     if (num % 2 == 0) return "even"
//     else return "odd"
// }
// console.log(number(4))
// console.log(number(9))


// //TRUTHY
// const countTruthy = (array) =>{
//     let falsy = [false, 0, " "]
//     count = 0
//     for (let i in array){
//         if (array[i]) count++
//     }
//     return count
// }
// console.log(countTruthy([20,5,0,8,9,"",false,"name",23]))


// //RETURN PROPERTIES OF OBJECTS
// const showProps = (obj) =>{
//     for (let i in obj){
//         if (typeof obj[i] === "string") {
//             console.log(i,obj[i])}
//     }
// }
// const fam = {
//     dad: "Ade",
//     age:"twenty"
// }
// console.log(showProps(fam))


// //SUM OF MULTIPLES OF 3 AND 5 FROM 0 TO NUM
// const sum = (num) =>{
//     let added = 0
//     for (let i=0; i<=num; i++){
//         if (i%3===0 || i%5===0){
//             added+=i
//         }
//     }return added
// }
// console.log(sum(10))


// //GRADE
// const grade = (marks) =>{
//     const sum = marks.reduce((acc, cur) => acc + cur, 0)
//     const average = sum/marks.length
//     if (average>=70) return "A"
//     else if (average>=60 && average <70) return "B"
//     else if (average>=50 && average < 60) return "C"
//     else return "Passed"
// }
// console.log(grade([70,80]))

// //STARS
// const showStars = (rows) => {
//     for (let i=0; i<rows; i++){
//         console.log("*".repeat(i))
//     }
    
// }
// showStars(8)

// //PRIME NUMBERS assuming there is no negatives
// const prime = (num) =>{
//     let isPrime = true
//     for (let i=2; i<num;i++){
//         if (num % i === 0){
//             isPrime = false
//         }
//     }if (num ===2 ) return "Prime"
//     else if (isPrime === true)return "Prime"
//     else return "Not prime"
// }

// console.log(prime(3))
// console.log(prime(30))
// console.log(prime(2))
