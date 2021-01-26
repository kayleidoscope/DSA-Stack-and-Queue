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
        this.top = node.next;
        return node.data;
    }
}

function peek(stack) {
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

    while (currNode.next !== null) {
        console.log(currNode)
        currNode = currNode.next
    }
}

module.exports = {Stack, peek, isEmpty, display}