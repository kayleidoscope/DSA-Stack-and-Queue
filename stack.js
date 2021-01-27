class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        const node = this.top;
        if (node === null) {
            this.top === null
            return null
        } else {
            this.top = node.next
        }
        return node.data;
    }
}

function size(stack) {
    let count = 0;
    let node = stack.top;
    while(node !== null) {
        count++
        node = node.next
    }
    return count
}

function peek(stack) {
    if (!stack.top) {
        return null
    }
    return stack.top.data
}

function isEmpty(stack) {
    if (stack.top === null) {
        return true
    }
    return false
}

function display(stack) {
    let currNode = stack.top

    if (currNode === null) {
        console.log(null)
        return
    }

    if (currNode.next === null) {
        console.log(currNode)
        return
    }

    while (currNode.next !== null) {
        console.log(currNode)
        currNode = currNode.next
    }
}

module.exports = {Stack, peek, isEmpty, display, size}