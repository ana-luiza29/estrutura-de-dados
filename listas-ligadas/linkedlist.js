class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null
     }
     // metedo para adcionar no

 prepend(data) {
    const newNode = new Node(data );
    newNode.next = this.head;
    this.head = newNode; 
 }

}


const list = new LinkedList();
list.prepend(1);
list.prepend(2);
list.prepend(3);
console.log(list)
