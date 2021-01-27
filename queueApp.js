const {SingleQueue, peek, isEmpty, display} = require('./singleQueue')
const {doubleQueue, show} = require('./doubleQueue')

function createSingleQueue() {
    const starTrekQ = new SingleQueue()

    starTrekQ.enqueue("Kirk")
    starTrekQ.enqueue("Spock")
    starTrekQ.enqueue("Uhura")
    starTrekQ.enqueue("Sulu")
    starTrekQ.enqueue("Checkov")

    starTrekQ.dequeue("Spock")

    console.log(display(starTrekQ))
}

// createSingleQueue()

function createDoubleQueue() {
    const starTrekQ = new doubleQueue()

    starTrekQ.enqueue("Kirk")
    starTrekQ.enqueue("Spock")
    starTrekQ.enqueue("Uhura")
    starTrekQ.enqueue("Sulu")
    starTrekQ.enqueue("Checkov")

    console.log(show(starTrekQ))
}

createDoubleQueue()