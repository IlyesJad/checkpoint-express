let date = new Date();

let currentHours = date.getHours()
console.log(currentHours)

let currentDay = date.getDay()
console.log(currentDay)

const logger = (req, res, next) => {
    if (currentHours >= 9 && currentHours < 17 && currentDay > 0 && currentDay <= 5) {
        next()
    } else { res.send(`<h1 style="color:blue"> Sorry we are closed</h1>`) }

}
module.exports = logger