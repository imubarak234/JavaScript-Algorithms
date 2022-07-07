class Node {
  constructor(val, next = null){
    this.val = val;
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
      return node.val;
      node = node.next;
      count += 1;
    }
  }

  print(){
    let node = this.head
    
    while(node){
      console.log(node.val)
      node = node.next
    }
  }
}

const links = new LinkedList()
const links2 = new LinkedList()

links.addArray([2,2,4,5,4])
links2.addArray([2,2,4,5,4])

//console.log(links.head)

const getInersectionNode = () => {
  let node = links.head
  let node2 = links2.head

  let countNode = 0;
  let countNode2 = 0;
  let array1 = [];
  let array2 = [];
  let isRepeated = false;

  while(node){
      countNode++;
      if(array1.includes(node.val)) isRepeated = true;
      array1.push(node.val);
      node = node.next;
    }

    while(node2){
      countNode2++;
      if(array2.includes(node2.val)) isRepeated = true;
      array2.push(node2.val);
      node2 = node2.next;
    }

    node = links.head
    node2 = links2.head

    if(links.head == links2.head){
        return links.head;
    }
    else if(countNode2 >= countNode){
        
        while(node2){
        if(countNode == countNode2){
          if(isRepeated){
            if ((node.val == node2.val) && (countNode <= 3)){
              return(node.val);
            }
          }
          else {
            if(node.val == node2.val){
              return node.val
            }
          }
          
          node = node.next;
          countNode--;
        }
          node2 = node2.next;
          countNode2--;
      }
    }
    else if(countNode > countNode2){
      while(node){
          
          if(countNode == countNode2){
              if(isRepeated){
                if((node2.val== node.val) && (countNode2 <= 3)){
                  return(node2)
                }
              }
              else {
                if(node2.val == node.val){
                  return node
                }
              }
            node2 = node2.next;
            countNode2--;
          }
        
          
        node = node.next;
        countNode--;
      }
      
    }
}

console.log(getInersectionNode())