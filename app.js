const Stack = require('./stack')

function createStarTrek() {
    let starTrek = new Stack()

    starTrek.push("Kirk")
    starTrek.push("Spock")
    starTrek.push("McCoy")
    starTrek.push("Scotty")

    console.log(starTrek)
    return starTrek
}

createStarTrek()