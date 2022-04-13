import SLNode from "./SLNode.js";
import SLQueue from "./SLQueue.js";
import compareQueues from "./compareQueues.js";

var node1 = new SLNode(84);
var que1 = new SLQueue(node1).set_verbose(2).enqueue(99).push(72).push(13).push(22).push(48).push(98).push(17).push(33);

var que1_len = que1.length();
console.log(que1_len);
for (let k = 0; k<= que1_len; k++) {
    console.log(`out in main code que1[${k}] = ${que1[k]}`);
}
node1 = null;
node1 = new SLNode(84);
var que2 = new SLQueue(node1).set_verbose(2).enqueue(99).push(78).push(13).push(22).push(48).push(98).push(17).push(33);

var que2_len = que2.length();
console.log(que2_len);
for (let k = 0; k<= que2_len; k++) {
    console.log(`out in main code que2[${k}] = ${que1[k]}`);
}
console.log(compareQueues(que1, que2, 2));