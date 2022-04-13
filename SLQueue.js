import SLNode from "./SLNode.js";

export default class SLQueue {
    constructor(Node) {
        this.head = Node;
        this.verbose = 0;
        return this;
    }

    set_verbose(value) {
        if (value >= 3) {
            this.verbose = 3;
        }
        else {
            this.verbose = value;
        }
        return this;
    }
    enqueue(value) {
        // going to add the node to the end of the queue. not entirely sure
        // why you would do this
        console.log(`entered enqueue for value ${value}`);
        var newNode = new SLNode(value);
        var runner = this.head;
        var previous = runner;
        while(runner != null) {
            switch (this.verbose) {
                case 3: console.log(`in enqueue runner = ${JSON.stringify(runner)}`); break;
                case 2: console.log(`in enqueue value of runner is ${runner.value}`); break;
                default: break; // do nothing
            }
            previous = runner;
            runner = runner.next;
            
            switch (this.verbose) {
                case 3: break;
                case 2: console.log(`inserted runner value ${value}`); break;
                default: break; // do nothing
            }
        }
        // we got to the end
        previous.next = newNode;
        newNode = null;
        runner = null;
        previous = null;
        return this;
    }

    pop() {
        // pop the first entry (the head) from the top of the queue
        // return the node that we popped
        if (this.head = null) {
            // nothing to return
            return null;
        }
        // not sure how this will go if the head is the only entry in the queue
        var result = this.head;
        this.head = result.next;
        result.next = null;
        return result.value;
    }

    push(value) {
        // push the Node onto the top of the Queue - it becomes the head
        // return the queue
        var newNode = new SLNode(value);
        var oldHead = null;
        if (this.head == null) {
            this.head = newNode;
        }
        else {
            // stick it on the front
            oldHead = this.head;
            this.head = newNode;
            this.head.next = oldHead;
        }
        return this;
    }

    front() {
        // return the value at the front but don't remove it
        if (this.head == null) {
            return null;
        }
        else {
            return this.head.value;
        }
    }

    isEmpty() {
        // I'm cheesing this, if there's no head - it's empty
        if (this.head == null) {
            return true;
        }
        else {
            return false;
        }
    }

    length() {
        // get the length of the queue
        var count = 0;
        var runner = this.head;
        while(runner != null) {
            switch (this.verbose) {
                case 3: console.log(`runner = ${JSON.stringify(runner)}`); break;
                case 2: console.log(`runner.value = ${runner.value}`); break;
                default: break; // don't do anything 
            }
            count++;
            runner = runner.next;
        }
        return count;
    }
}

