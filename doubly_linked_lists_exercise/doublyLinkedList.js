function Node(val){
    this.val = val;
    this.next = null;
    this.prev = null;
}

function DoublyLinkedList(array = []){
    this.head = null;
    this.tail = null;
    this.length = 0;

    if(Array.isArray(array)){
        array.forEach(el => {
            this.push(el);
        });
    }
}

DoublyLinkedList.prototype.push = function(val){
let newNode = new Node(val)
if(this.head===null){
    this.head=newNode
    this.tail=this.head
    this.prev=null
}
else{
    this.tail.next=newNode
    this.tail=newNode
    this.prev=this.tail.next
}
this.length++
return this
}

DoublyLinkedList.prototype.unshift = function(val){
    let newNode = new Node(val)
    if(this.head===null)
    {
        this.head=newNode
        this.tail=this.head
        this.prev=null
        }
    else{
  newNode.next=this.head
  this.head=newNode
  newNode.prev=null
    }
    this.length ++
    return this
}

DoublyLinkedList.prototype.insert = function(index, val){
    if (index < 0 || index >= this.length) {
        return undefined;
      }
    
      let newNode = new Node(val);
    
      let currentNode = this.head;
      let counter = 0;
      while (currentNode) {
        if (counter === index - 1) {
          break;
        }
        counter++;
        currentNode = currentNode.next;
      }
    
      newNode.next = currentNode.next;
      currentNode.next = newNode;
      newNode.prev=currentNode
    
      this.length++;
    
      return this.length;
    
}


DoublyLinkedList.prototype.getNode = function(index){
   if (index < 0 || index >= this.length) {
    return undefined;
  }

  let currentNode = this.head;
  let counter = 0;
  while (currentNode) {
    if (counter === index) {
      break;
    }
    counter++;
    currentNode = currentNode.next;
  }

  return currentNode;
}

DoublyLinkedList.prototype.get = function(index){
    let node = this.getNode(index)
    return node ? node.val : null;
}

DoublyLinkedList.prototype.set = function(index, val){
    let node = this.getNode(index)
    if(node){
        node.val=val
        return true
    }
    return false
    
}

DoublyLinkedList.prototype.pop = function(){

    if(this.head===null)
    {
        return undefined
    }
    else {
        let nodeToRemove = this.tail
        this.tail=this.tail.prev
        this.tail.next=null
        nodeToRemove.next=null
    }
this.length--;
return nodeToRemove.val
    }
    


DoublyLinkedList.prototype.shift = function(){

  
    if (!this.head) {
        return undefined;
      }
      else{
        let temp = this.head;
      this.head = this.head.next;
      this.head.prev=null;
      temp.next = null;
      
    
      this.length--;
    
      return temp.val;
      }
}

DoublyLinkedList.prototype.remove = function(index){
    
}

DoublyLinkedList.prototype.reverse = function(){
    
}