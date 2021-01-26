const {Stack, peek, isEmpty, display} = require('./stack')

function createStarTrek() {
    let starTrek = new Stack()

    starTrek.push("Kirk")
    starTrek.push("Spock")
    starTrek.push("McCoy")
    starTrek.push("Scotty")

    return starTrek
}

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

    let stack = new Stack()

    for (let i = 0; i < s.length; i++) {
        stack.push(s[i])
    }

    let reverse = ""

    while(!isEmpty(stack)) {
        reverse = reverse + stack.pop()
    }

    if (s === reverse) {
        return true
    }
    return false
}

console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));