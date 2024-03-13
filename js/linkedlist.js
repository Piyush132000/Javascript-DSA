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
    this.size = null;
  }

  addNode(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  printList() {
    let current = this.head;
    while (current != null) {
      console.log(current.data);
      current = current.next;
    }
  }
  addNodeOnSpecificIndex(data, index) {
    let newNode = new Node(data);
    if (index > this.size && index - this.size != 1) {
      console.log("Error");
      throw Error("Invalid Index");
    }
    if (index == 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let currentindex = 0;
      let currentNode = this.head;
      while (currentindex != index - 1) {
        currentindex++;
        currentNode = currentNode.next;
      }
      if (currentNode) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
      }
    }
    this.size++;
  }

  removeAt(index) {
    let current = this.head;
    let currentIndex = 0;
    while (currentIndex != index) {
      currentIndex++;
      current = current.next;
    }
    current.next = current.next.next;
    this.size--;
  }

  removeFromLast() {
    let currentnode = this.head;
    while (currentnode.next.next) {
      currentnode = currentnode.next;
    }
    currentnode.next = null;
    this.tail = currentnode;
    this.size--;
  }

  removeFromSpecificIndex(index) {
    let currentNode = this.head;

    if (index == 0) {
      this.head = this.head.next;
      return;
    }
    let currentIndex = 0;

    while (currentIndex != index - 1) {
      currentIndex++;
      currentNode = currentNode.next;
    }
    currentNode.next = currentNode.next.next;
    this.size--;
  }

  removeByData(data) {
    let currentNode = this.head;
    if (currentNode.data == data) {
      this.head = currentNode.next;

      return;
    }
    while (currentNode.next) {
      if (currentNode.next.data == data) {
        currentNode.next = currentNode.next.next;
        this.size--;
      } else {
        currentNode = currentNode.next;
      }
    }
  }

  addNodeInList(data, index = -1) {
    let newNode = new Node(data);

    if (index > -1) {
      if (index == 0) {
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
        return;
      }

      if (index > this.size && index - this.size == 1) {
        console.log(this.head, "sytr");
        let currnetNode = this.head;
        while (currnetNode.next) {
          currnetNode = currnetNode.next;
        }

        if (currnetNode) {
          newNode.next = currnetNode.next;
          currnetNode.next = newNode;
          this.tail = newNode;
          this.size++;
          return;
        }
      }

      if (index > this.size && index - this.size != 1) {
        console.log("Invaild index");
      } else {
        let currentIndex = 0;
        let currentNode = this.head;
        while (currentIndex != index - 1) {
          currentIndex++;
          currentNode = currentNode.next;
        }
        if (currentNode) {
          newNode.next = currentNode.next;
          currentNode.next = newNode;
        }
      }
    }
  }

  getMiddleElementData(){
    let currentNode = this.head;
    let middleIndex = Math.floor(this.size/2);
    console.log(middleIndex);
    let currentIndex =0;
    while(currentIndex != middleIndex){
        currentIndex++;
        currentNode = currentNode.next;
    }

    return currentNode.data;

  }
}

const list = new LinkedList();
list.addNode(20);
list.addNode(30);
list.addNode(30);
list.addNodeOnSpecificIndex(40, 0);

list.addNode("String");
list.printList();
list.removeByData("String");

list.addNodeInList("data", 5);
console.log(list.getMiddleElementData());
list.printList();

console.log(list.size);
