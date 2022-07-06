class Node {
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
}

class LinkedList {

  constructor(){
    this.head = null;
    this.tail = null;
  }
  add(number) {
    let newnode = new Node(number);
    if(this.tail === null)
    this.head = this.tail = newnode;
    else {
      this.tail.next_node = newnode;
      this.tail = newnode;
    }
  }

  get(index) {
    let node = this.head;
    let count = 0;
    while(node){
      if(index == count)
      return node.value;
      node = node.next_node;
      count += 1;
    }
  }
}