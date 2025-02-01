
class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}



class LinkedList {

  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }


  addNodeInList(data){

    const node = new Node(data);

    if(this.head == null){
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }


  addOnSpecificIndex(data,index){
    let node = new Node(data);
    if(index > this.size && this.size != index-1){
      throw(new Error("Index Should be 1 more then size of linked list"));
    } 

    if( this.size +1 == index ){
      this.tail.next = node;
      this.tail = node;
      this.size++;
      return;
    }

    if(index == 0){
      node.next = this.head;
      this.head = node;
      
    } else {

      let currentIndex = 0;
      let currentNode = this.head;
      while(currentIndex != index-1){
        currentNode = currentNode.next;
        currentIndex++;
      }
      node.next = currentNode.next;
      currentNode.next = node;
    }

    this.size++;
  }


  removeAt(index){

    let currentIndex =0;
    let currentNode = this.head;

    if(index == 0){
      this.head = this.head.next;
      this.size--;
      return;
    } 
    while(currentNode.next){
        if(currentIndex == index-1){
          currentNode.next = currentNode.next.next;
          this.size--;
          break;
        }
        currentIndex++;

      }
    }


    deleteByData(data){
      let currentNode = this.head;
      if(this.head.data == data){
        this.head = this.head.next;
        this.size--;
        return;
      } else {
      while(currentNode.next){

        if(currentNode.next.data == data){
          currentNode.next = currentNode.next.next;
          break;
        }
      }
      this.size--;
      }

    }
  
}


const list = new LinkedList();

list.addNodeInList(10);
list.addNodeInList(20);
list.addOnSpecificIndex(5, 1)
list.addOnSpecificIndex(3, 4)
list.addOnSpecificIndex(2, 3)
list.removeAt(1);
list.deleteByData(20)
list.removeAt(0);

console.log(list.head)