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

// letsDance(womenLine, menLine)

//The Ophidian Bank

function newCustomerId() {
    const idNumber = Math.floor(Math.random() * 100000);
    return idNumber
}

function randomTime() {
    const ms = Math.floor(Math.random() * 15000);
    return ms
}

const queue = new SingleQueue()

function ophidianBank() {
    const firstCustomer = newCustomerId()
    queue.enqueue(firstCustomer)
    console.log(`Customer ${firstCustomer} joined the queue.`)

    let newCustomerTime = Math.floor(Math.random() * 30000);
    let tellerTime = Math.floor(Math.random() * 30000);

    setInterval(() => {
        const customer = newCustomerId()
        queue.enqueue(customer)
        console.log(`Customer ${customer} joined the queue.`)
    }, 10000);

    
    setInterval(() => {
        const num = Math.floor(Math.random() * 4);
        console.log(num)
        if (num === 1 || num === 2 || num === 0) {
            const lucky = queue.dequeue()
            console.log(`Customer ${lucky} is leaving.`)
        }
        if (num === 3) {
            const unlucky = queue.dequeue()
            queue.enqueue(unlucky)
            console.log(`Customer ${unlucky} had to go to the end of the line.`)
        }
    }, 10000);

    setInterval(() => {
        display(queue)
        return
    }, 150000);
}

ophidianBank()