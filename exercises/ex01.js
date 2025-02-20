// Create a function called findMiddle that returns the middle node of a singly linked list
// Tip: Create two runners - slow and fast
// (The slow runner moves one node at a time, the fast runner moves two nodes at a time. When the fast runner is at the very last node, then the slow runner will eventually be in the middle of the list. You can then return its value)

const SLL = require('../lib/SLL');

function findMiddle(list) {
  // your code here
  let slow = list.head;
  let fast = list.head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.data;
}

const list = new SLL();
list.insertAtBack(1);
list.insertAtBack(2);
list.insertAtBack(3);
list.insertAtBack(4);
list.insertAtBack(5);

console.log(findMiddle(list)); // Output: 3