// Create a function called deleteAllNodesWithValue that removes all nodes with a specific value from the DLL
// Make sure to update the size of the list as well

const DLL = require('../lib/DLL');

function deleteAllNodesWithValue(list, value) {
  // your code here
  let current = list.head;
  while (current) {
    // Store next pointer since current might be deleted
    const nextNode = current.next;
    if (current.data === value) {
      // If current is head
      if (current === list.head) {
        list.head = current.next;
        if (list.head) {
          list.head.prev = null;
        } else {
          list.tail = null; // List is now empty
        }
      } else if (current === list.tail) { // If current is tail
        list.tail = current.prev;
        if (list.tail) {
          list.tail.next = null;
        }
      } else { // Node is in the middle
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
      list.size--;
    }
    current = nextNode;
  }
}

const list = new DLL();
list.insertAtBack(1);
list.insertAtBack(2);
list.insertAtBack(3);
list.insertAtBack(2);
list.insertAtBack(5);

deleteAllNodesWithValue(list, 2);
console.log(list.print()); // Output: 1 <-> 3 <-> 5