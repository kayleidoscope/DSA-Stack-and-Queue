const {SingleQueue, peek, isEmpty, display, size} = require('./singleQueue')
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

// createDoubleQueue()

const womenLine = new SingleQueue()
const menLine = new SingleQueue()

function addDancer(dancer) {
    const deets = dancer.split(" ")
    if (deets[0] === "F") {
        womenLine.enqueue(deets[1])
    } else {
        menLine.enqueue(deets[1])
    }

}

function letsDance(womenLine, menLine) {
    const dancers = ["F Jane", "M Frank", "M John", "M Sherlock", "F Madonna", "M David", "M Christopher", "F Beyonce"]

    for (let i = 0; i < dancers.length; i++) {
        addDancer(dancers[i])
        const numOfWomen = size(womenLine)
        const numOfMen = size(menLine)

        if (numOfWomen > 0 && numOfMen > 0) {
            if (numOfMen < numOfWomen) {
                for (let j = 0; j < numOfMen; j++) {
                    menLine.dequeue()
                    womenLine.dequeue()
                }
            }
            if (numOfMen > numOfWomen) {
                for (let j = 0; j < numOfWomen; j++) {
                    menLine.dequeue()
                    womenLine.dequeue()
                }
            }
        }
    }
    console.log(display(menLine), display(womenLine))
}

letsDance(womenLine, menLine)