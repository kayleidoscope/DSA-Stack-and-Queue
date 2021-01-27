const { Stack, display, peek, isEmpty} = require("./stack")

class _Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

const inStack = new Stack()
const outStack = new Stack()

function enqueue(inStack, value) {
    inStack.push(value)
}

enqueue(inStack, "A")
enqueue(inStack, "B")
enqueue(inStack, "C")
enqueue(inStack, "D")
enqueue(inStack, "E")
enqueue(inStack, "F")

function moveNodes(inStack, outStack) {
    while (!isEmpty(inStack)) {
        let node = inStack.pop()
        outStack.push(node)
    }
}

function dequeue(inStack, outStack) {
    if (!peek(outStack)) {
        moveNodes(inStack, outStack)
    }
    return outStack.pop()
}

console.log(dequeue(inStack, outStack))