class Stack {
    #list = [];

    constructor(initialList) {
        if (initialList) this.#list = initialList;
    }

    push(item) {
        this.#list.unshift(item);
    }

    pop(item) {
        this.#list.shift(item);
    }

    peek() {
        return this.#list.slice(-1)[0];
    }

    get publicList() {
        return this.#list.toString();
    }
}

const newList = new Stack();

newList.push('bob');
newList.push('amy');
newList.push('jerrod');
newList.pop();
newList.peek();
console.log('public', newList.publicList);

class Queue {}

module.exports = { Stack, Queue };
