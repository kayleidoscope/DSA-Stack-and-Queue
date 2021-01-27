const {Stack, peek, isEmpty, display, size} = require('./stack')

function createStarTrek() {
    let starTrek = new Stack()

    starTrek.push("Kirk")
    starTrek.push("Spock")
    starTrek.push("McCoy")
    starTrek.push("Scotty")

    starTrek.pop()
    starTrek.pop()
    starTrek.pop()

    console.log(isEmpty(starTrek))
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

// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

//The function below does not work completely.
function matchBrackets(math) {
    const noNumbers = math.replace(/[a-zA-Z0-9]/g, "");
    const bracketsOnly = noNumbers.replace(/[+\-*/]/g, "")
    
    let stack = new Stack()

    for (let i = 0; i < math.length; i++) {
        stack.push(math[i])
    }

    let leftParens = 0
    let rightParens = 0

    while (!isEmpty(stack)) {       
        let parenthesis = stack.pop()
        if (parenthesis === "(") {
            leftParens++;
        }
        if (parenthesis === ")") {
            rightParens++;
        }
    }

    let message = ""

    if (leftParens === rightParens) {
        message = message + "Your parentheses match up correctly."
    }
    
    if (leftParens > rightParens) {
        let num = leftParens - rightParens
        message = message + `You are missing ${num} ")"`
    }

    if (leftParens < rightParens) {
        let num = rightParen - leftParens
        message = message + `You are missing ${num} "("`
    }

    return message
}

// //true
// console.log(matchBrackets("(3+5)-(10-7)"))
// //false
// console.log(matchBrackets("(3+5-(10-7)"))
// console.log(matchBrackets("((3+5-(10-7)"))

function isItSorted(stack) {
    let biggestNumber = 0;
    while (!isEmpty(stack)) {
        let currentNumber = stack.pop()
        if (currentNumber < biggestNumber) {
            return false
        }
        if (currentNumber > biggestNumber) {
            biggestNumber = currentNumber
        }
    }
    return true
}

function sortStack(arrayOfNumbers) {
    let stack = new Stack()

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        stack.push(arrayOfNumbers[i])
    }

    let secondStack = new Stack()

    //set biggest number to 0 to have something to compare to
    let biggestNumber = 0;

    let stackSize = size(stack)

    //Loop through once for each member of the stack
    for (let i = 0; i < stackSize; i++) {
        //Loop through one fewer time each time, thereby leaving the bottom already-sorted
        //numbers where they belong.
        for (let j = 0; j < (stackSize - i); j++) {
            let newNum = stack.pop()

            //If the top number is larger than the bigger number, set the new number
            //as the biggest number. But, if the new, bigger number isn't 0, first add
            //the original bigger number onto the second stack.
            if (newNum > biggestNumber) {
                if (biggestNumber > 0) {
                    secondStack.push(biggestNumber)
                }
                biggestNumber = newNum
            }

            //if the new number is smaller than the bigger number, add it to the second
            //stack
            if (newNum < biggestNumber) {
                secondStack.push(newNum)
            }
        }

        //once the biggest number has been identified and all of the other numbers have
        //been put into the second stack, put the biggest number on top of them
        secondStack.push(biggestNumber)

        //restack the numbers back onto the first stack
        while (secondStack.top.next !== null) {
                let restackingNum = secondStack.pop()
                stack.push(restackingNum)
        }
        let smallestNum = secondStack.pop()
        stack.push(smallestNum)

        //reset the biggest number to zero and start again, leaving the biggest number(s)
        //untouched.
        biggestNumber = 0

        }
    console.log(display(stack))
    return stack
}

// sortStack([3, 5, 4, 1, 2])
// sortStack([3, 5, 4, 1, 2, 14, 16, 7])