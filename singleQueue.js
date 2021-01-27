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
    if (node.next === null) {
        console.log(node.value)
    }

    while(node.next !== null) {
        console.log(node.value)
        node = node.next
    }

    console.log(node.value)
    return ""
}

module.exports = {SingleQueue, peek, isEmpty, display}