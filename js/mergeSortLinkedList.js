class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addNode(data) {
    let newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
}

const list = new LinkedList();

list.addNode(3);
list.addNode(2);
list.addNode(1);
list.addNode(5);
list.addNode(6);
list.addNode(1);

function mergrSort(head) {
  if (head.next == null) return head;

  let mid = findMidofList(head);
  let head1 = mid.next;
  mid.next = null;
  let newHead1 = mergrSort(head);
  let newhead2 = mergrSort(head1);
  let finalList = mergeSortedList(newHead1, newhead2);
  return finalList;
}

function mergeSortedList(head1, head2) {
  let merged = new Node(-1);
  let temp = merged;

  while (head1 != null && head2 != null) {
    if (head1.data < head2.data) {
      temp.next = head1;
      head1 = head1.next;
    } else {
      temp.next = head2;
      head2 = head2.next;
    }
    temp = temp.next;
  }

  while (head1 != null) {
    temp.next = head1;
    head1 = head1.next;
    temp = temp.next;
  }

  while (head2 != null) {
    temp.next = head2;
    head2 = head2.next;
    temp = temp.next;
  }

  return merged.next;
}

function findMidofList(head) {
  let slow = head;
  let fast = head.next;
  while (fast.next != null && fast.next.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

console.log(mergrSort(list.head), "sorted");
