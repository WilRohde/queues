

export class SLNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        return this;
    }
}

export class SLQueue {
    constructor(Node) {
        this.head = Node;
        return this;
    }

    enqueue(Node) {
        // going to add the node to the end of the queue. not entirely sure
        // why you would do this
        runner = this.head;
        while(runner != null) {
            previous = runner;
            runner = runner.next;
        }
        // we got to the end
        previous.next = runner;
        return this;
    }

    pop() {
        // pop the first entry (the head) from the top of the queue
        // return the node that we popped
        if (this.head = null) {
            // nothing to return
            return null
        }
        // not sure how this will go if the head is the only entry in the queue
        
    }

    push(Node) {
        // push the Node onto the top of the Queue - it becomes the head
        // return the queue
        if (this.head == null) {
            this.head = Node;
        }
        else {
            // stick it on the front
            Node.next = this.head;
            this.head = Node;
        }
        return this;
    }
}