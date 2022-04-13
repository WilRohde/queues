import SLNode from "./SLNode.js";
import SLQueue from "./SLQueue.js";

export default function compareQueues(Queue1, Queue2, verbose) {
    verbose = verbose;
    switch (verbose) {
            case 2-3: console.log(`got to compareQueues()`);
                    console.log(`Queue1 length = ${Queue1.length()}`);
                    console.log(`Queue2 length = ${Queue2.length()}`);
                    break;
            default: break; // don't do anything
        }
        var Queue_1 = Queue1;
        var Queue_2 = Queue2;
        var Queue1_Len = Queue1.length();
        var Queue2_Len = Queue2.length();
        for (let l = 0; l<= Queue1_Len; l++){
            console.log (`value ${Queue1[l]}`);
        }
    if ((Queue_1.head == null) && (Queue_2.head == null)) {
        // both empty so i guess that's the same
        switch (verbose) {
            case 1-3: console.log("1st check"); break;
            default: break; // do nothing
        }
        return true;
    }

    // compare the counts, if they're not equal the queues obviously aren't equal
    if (Queue1_Len != Queue2_Len) {
        switch (verbose) {
            case 1-3: console.log("2nd check"); break;
            default: break; // do nothing
        }
        return false;
    }

    // they're the same length, so compare all the values. first one we hit that doesn't
    // match, return false
    for (let k = 1; k <= Queue1_Len; k++) {
        switch (verbose) {
            case 3: console.log(`Queue_1.length() = ${Queue1_Len}`);
                    console.log(`Queue_2.length() = ${Queue2_Len}`);
                    console.log(`index ${k} - ${JSON.stringify(Queue_1[k])} = ${JSON.stringify(Queue_2[k])}`);
                    break;
            case 2: console.log(`Queue_1.length() = ${Queue1_Len}`);
                    console.log(`Queue_2.length() = ${Queue2_Len}`);
                    console.log(`index ${k} - Queue_1[k] = ${Queue_1[k]} / Queue2[k] = ${Queue_2[k]}`);
                    break
            default: break; // don't do anything
        }
        switch (verbose) {
            case 1-3: console.log(`index k = ${k}`); break;
        }
        if (Queue_1[k].value != Queue_2[k].value) {
            // we're not equal
                switch (verbose) {
                    case 1-3: console.log("1st check"); break;
                    default: break; // do nothing
                }
        }
    }
    // if we got here we didn't hit any triggers that they weren't equal, so they must be equal
    switch (verbose) {
        case 1-3: console.log("4th check"); break;
        default: break; // do nothing
    }
    return true;
}