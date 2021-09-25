class Stack {
    constructor(...elements) {
        this.elements = [...elements];
    }

    get length() {
        return this.elements.length;
    }

    push(args) {
        return this.elements.push(args);
    }

    pop() {
        return this.elements.pop();
    }

    peek() {
        return this.elements[this.length - 1]
    }
}

let stack = new Stack();
stack.push(1)
console.log('length ' + stack.length)
console.log('peek ' + stack.peek())
stack.push(3)
console.log('length ' + stack.length)
console.log('peek ' + stack.peek())
console.log('pop ' + stack.pop())
console.log('length ' + stack.length)
console.log('peek ' + stack.peek())
