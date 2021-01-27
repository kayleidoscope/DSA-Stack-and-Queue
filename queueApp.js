const {SingleQueue, peek, isEmpty, display} = require('./singleQueue')

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

createSingleQueue()