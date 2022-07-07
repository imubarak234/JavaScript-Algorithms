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
      this.tail.next = newnode;
      this.tail = newnode;
    }
  }

  addArray(arr){
    for(let x = 0; x < arr.length; x++){
      this.add(arr[x])
    }
  }

  get(index) {
    let node = this.head;
    let count = 0;
    while(node){
      if(index == count)
      return node.value;
      node = node.next;
      count += 1;
    }
  }

  print(){
    let node = this.head
    
    while(node){
      console.log(node.value)
      node = node.next
    }
  }
}

const links = new LinkedList()
const links2 = new LinkedList()

links.addArray([4,1,8,4,5])
links2.addArray([5,6,1,8,4,5])

console.log(links.head)

const getInersectionNode = () => {
  let node = links.head
  let node2 = links2.head

  let countNode = 0;
  let countNode2 = 0;
  let array1 = [];
  let isRepeated = false;

  while(node){
      countNode++;
      if(array1.includes(node.value)) isRepeated = true;
      array1.push(node.value);
      node = node.next;
    }

    while(node2){
      countNode2++;
      if(array1.includes(node2.value)) isRepeated = true;
      array1.push(node2.value);
      node2 = node2.next;
    }

    node = links.head
    node2 = links2.head

    

}