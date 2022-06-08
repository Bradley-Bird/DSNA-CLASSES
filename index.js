class Stack {
    #list = [];

    constructor(initialList) {
        if (initialList) this.#list = initialList;
    }

    push(item) {
        this.#list.push(item);
    }

    pop() {
        return this.#list.pop();
    }

    peek() {
        return this.#list.length - 1;
    }

    get publicList() {
        return this.#list.toString();
    }
}

const newList = new Stack();

newList.push('bob');
newList.push('amy');
newList.push('jerrod');
// newList.pop();
// newList.peek();
console.log('public', newList.publicList);

class Queue {
    #list = [];

    constructor(initialList) {
        if (initialList) this.#list = initialList;
    }

    get publicList() {
        return this.#list.toString();
    }

    enqueue(item) {
        this.#list.push(item);
    }
    dequeue(item) {
        return this.#list.shift(item);
    }

    get hasNext() {
        return !!this.#list.length;
    }
}

function reverse(array) {
    const newArray = new Stack();
    let reversedArray = [];

    for (let i = 0; i < array.length; i++) {
        reversedArray = [...reversedArray, newArray.pop()];
    }
    return reversedArray;
}

module.exports = { Stack, Queue, reverse };
