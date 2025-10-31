const restaurant = [
    {name: "restaurant a", opened: "0800", closed: "1600"},
    {name: "restaurant b", opened: "0700", closed: "1700"},
    {name: "restaurant b", opened: "0600", closed: "1800"}
]
const opened = restaurant.filter((v)=>{
    let now = Date.now()
    now = now/3600000
    return restaurant.opened > now
})
console.log(opened)