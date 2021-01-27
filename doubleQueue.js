class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class doubleQueue {
    constructor() {
        this.first = null
        this.last = null
    }

    enqueue(data) {
        const node = new _Node(data)

        if (this.first === null) {
            this.first = node
            this.last = this.first
            return
        }

        if (this.first.next === null) {
            this.first.next = node
            node.previous = this.first
        } else {
            node.previous = this.last
            this.last.next = node;
        }
        this.last = node
    }

    dequeue() {
        if (this.first == null) {
            return
        }

        const node = this.first
        this.first = this.first.next
        this.first.prevous = null

        if (node === this.last) {
            this.last = null
        }

        return node.value
    }
}

function show(queue) {
    let node = queue.first
    if (node.next === null) {
        console.log(`Current: ${node.value} Next: ${node.next.value} Previous: ${(node.previous.value || null)}`)
    }

    while(node.next!==null) {
        console.log(`Current: ${node.value} Next: ${node.next.value} Previous: ${node.previous ? node.previous.value : null}`)
        node = node.next
    }
    console.log(`Current: ${node.value} Next: ${node.next ? node.next.value : null} Previous: ${node.previous.value}`)
    return ""
}

module.exports = {doubleQueue, show}