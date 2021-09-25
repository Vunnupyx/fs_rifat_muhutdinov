class Node {
    constructor(value, next = null, previous = null) {
        this.value = value;
        this.next = next;
        this.previous = previous;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this._size = 0
    }

    get size() {
        return this._size
    }

    linkByIndex(index) {
        if (!this.checkIndexToRange(index)) {
            console.error("Index is not acceptable")
        }
        if (index < this.size / 2) {
            let currentNode = this.head;
            for (let i = 0; i < index; i++) {
                currentNode = currentNode.next;
            }
            return currentNode;
        } else {
            let currentNode = this.tail;
            for (let i = this.size - 1; i > index; i--) {
                currentNode = currentNode.previous;
            }
            return currentNode;
        }


    }

    add(value) {
        let newNode = new Node(value);
        let last = this.tail;
        this.tail = newNode;
        if (last === null) {
            this.head = newNode;
        } else {
            newNode.previous = last;
            last.next = newNode;

        }
        this._size++;
    }

    addByIndex(index, value) {
        if (index < 0 || index > this.size) {
            console.error("Index is not acceptable");
        }
        let newNode = new Node(value);
        if (index === this.size) {
            this.add(value);
        } else {
            if (index === 0) {
                this.head.previous = newNode;
                newNode.next = this.head;
                this.head = newNode;
            } else {
                let nextLink = this.linkByIndex(index);
                nextLink.previous = newNode;
                newNode.next = nextLink;
                let previousLink = this.linkByIndex(index - 1);
                previousLink.next = newNode;
                newNode.previous = previousLink;
            }
            this._size++;
        }

    }

    set(index, value) {
        if (!this.checkIndexToRange(index)) {
            console.error("Index is not acceptable");
        }
        let editLink = this.linkByIndex(index);
        editLink.value = value;
    }

    remove(index) {
        if (!this.checkIndexToRange(index)) {
            console.error("Index is not acceptable");
        }
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            if (index === 0) {
                this.head.next.previous = null;
                this.head = this.head.next;
            } else if (index === this.size - 1) {
                this.tail.previous.next = null;
                this.tail = this.tail.previous;
            } else {
                let current = this.linkByIndex(index)
                current.previous.next = current.next;
                current.next.previous = current.previous;
            }
        }
        this._size--;
    }

    checkIndexToRange(index) {
        return index >= 0 && index < this.size;
    }

    toArray() {
        const output = [];
        let current = this.head;
        while (current) {
            output.push(current);
            current = current.next;
        }
        return output;
    }
}

let doublyLinked = new DoublyLinkedList();
doublyLinked.add(1);
doublyLinked.add(2);
doublyLinked.add(3);
console.log(doublyLinked.linkByIndex(2))
doublyLinked.addByIndex(3, 4);
console.log(doublyLinked.tail)

console.log(doublyLinked.size)
doublyLinked.remove(3);
console.log(doublyLinked.toArray());
console.log(doublyLinked.tail);
console.log(doublyLinked.size)
console.log(doublyLinked.linkByIndex(1))