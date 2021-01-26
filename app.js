const {Stack, peek, isEmpty, display} = require('./stack')

function createStarTrek() {
    let starTrek = new Stack()

    starTrek.push("Kirk")
    starTrek.push("Spock")
    starTrek.push("McCoy")
    starTrek.push("Scotty")

    return starTrek
}

console.log(display(createStarTrek()))