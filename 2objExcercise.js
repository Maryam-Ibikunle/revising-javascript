//1. ADDRESS OBJECT
const address = {
    street: "Your Street",
    city: "Your city",
    zipCode: "Your zipcode",
    showAddress: function(){
        return `${this.street}, ${this.city}, ${this.zipCode}`
    }
}
console.log(address.showAddress())

//2. ADDRESS OBJECT FACTORY FUNCTION
const addressMaker = (street, city, zipcode) => {
    return{
        street,
        city,
        zipcode,
        showAddress: function(){
            return{
                street, city,zipcode
            }
        }
    }
}
const address1 = addressMaker("MY street", "My city", "My zipcode")
console.log(address1.showAddress())

//3. ADDRESS OBJECT CONSTRUCTOR
const Address = function(street, city, zipcode){
    this.street = street;
    this.city = city,
    this.zipcode = zipcode,
    this.showAddress = function(){
        return {street, city,zipcode}
    }
}
const address2 = new Address( "MY street", "My city", "My zipcode")
console.log(address1.showAddress())

//4. OBJECT EQUALITY
const address3 = new Address("a","b","c")
const address4 = new Address("a","b","c")
const address5 = new Address("c","c","c")

const areEqual = (address3,address5) => {
    for (let key in address3)
        return (address3[key]===address5[key])
}

console.log(areEqual(address3,address4))

//5. BLOG POST OBJECT
const blogPost = {
    title: "Title",
    body: "Whatever",
    author: "Author",
    views: 1000,
    comment: [
        {author: "author", body: "body"},
        {author: "author", body: "body"},
        {author: "author", body: "body"},
    ],
    isLive: true
}
console.log(blogPost)

//6. CONSTRUCTION FUNCTION 2
const BlogPost = function(t,b,a){
    this.t = t;
    this.b = b;
    this.a = a;
    this.v = 0;
    this.comment = [];
    isLive = false
}

//7. PRICE RANGE OBJECT
const price1 = {
    min: 0,
    max: 99,
    range: function(){"inexpensive"}
}
const price2 = {
    min: 100,
    max: 9999,
    range: function(){"moderate"}
}
const price3 = {
    min: 1000,
    max: 99999,
    range: function(){"expensive"}
}
