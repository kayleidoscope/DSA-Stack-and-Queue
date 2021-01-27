class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SingleQueue {
    constructor() {
        this.first = null
        this.last = null
    }

    enqueue(data) {
        const node = new _Node(data)

        if (this.first === null) {
            this.first = node;
            this.last = this.first
            return
        }

        if (this.first.next === null) {
            this.first.next = node
        } else {
            this.last.next = node;
        }

        //make the new node the last item on the list
        this.last = node;
    }

    dequeue() {
        if (this.first === null) {
            return
        }
        const node = this.first
        this.first = this.first.next

        if (node === this.last) {
            this.last = null
        }

        return node.value;
    }
}

function size(queue) {
    let count = 0
    let node = queue.first

    if (!node) {
        return count
    }

    while (node !== null) {
        count++
        node = node.next
    }

    return count
}

function peek(queue) {
    return queue.first.value
}

function isEmpty(queue) {
    if (!queue.first) {
        return true
    }
    return false
}

function display(queue) {
    let node = queue.first

    if (!node) {
        console.log("The queue is empty.")
        return
    }

    if (node.next === null) {
        console.log(`Current: ${node.value} Next: ${node.next ? node.next.value : null}`)
    }

    while(node.next!==null) {
        console.log(`Current: ${node.value} Next: ${node.next.value}`)
        node = node.next
    }
    console.log(`Current: ${node.value} Next: ${node.next ? node.next.value : null}`)
    return ""
}

module.exports = {SingleQueue, size, peek, isEmpty, display}