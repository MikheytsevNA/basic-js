//const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

class DoublyLinkedList {
  constructor(value) {
      this.head = {
          value: value,
          next: null,
          previous: null
      };
      this.length = 1;
      this.tail = this.head;
  }

  getList() {
    let array = [];
    let currentList = this.head;
    while (currentList !== null) {
        array.push(currentList.data);
        currentList = currentList.next;
    }
    return array;
  }
}

class link {
  constructor(data) {
      this.value = data;
      this.next = null;
      this.previous = null;              
  }
}

const chainMaker = {
  'length' : 0,
  'head' : {
    'value' : '',
    'next' : null,
    'previous': null
  },
  'tail' : {
    'value' : '',
    'next' : null,
    'previous': null
  },

  getLength() {
    return +this.length;
  },
  addLink (value) {
    let stingToAdd;
    if (arguments.length ==0) {
      stingToAdd = '(  )~~';
    } else {
      stingToAdd = '( ' + value + ' )~~';
    }
    let newlink = new link(stingToAdd);
    if (this.length == 0) {
      this.head = newlink;
      this.tail = this.head;
      this.length++;
      return this;
    }
    this.tail.next = newlink;
    newlink.previous = this.tail;
    this.tail = newlink;
    this.length++;
    return this;
  },

  removeLink(index) {
    let previousNode = this.head;
    if (!Number.isInteger(index) || (index < 1)) {
      this.head = new link('');
      this.tail = new link('');
      this.length = 0;
      throw Error("You can\'t remove incorrect link!");
    }
    try {
      if (index > 2) {
        for (let k = 1; k < index-1; k++) {
          previousNode = previousNode.next;
        }
        let deleteNode = previousNode.next;
        let nextNode = deleteNode.next;
        previousNode.next = nextNode;
        nextNode.previous = previousNode;
      } else if (index == 1){
        let deleteNode = this.head;
        this.head = deleteNode.next;
        this.head.previous = null;
      } else if (index == 2){
        let deleteNode = previousNode.next;
        let nextNode = deleteNode.next;
        previousNode.next = nextNode;
        nextNode.previous = previousNode;
      }
    } catch (err) {
      this.head = new link('');
      this.tail = new link('');
      this.length = 0;
      throw Error("You can\'t remove incorrect link!");
    }
    return this;
  },
  reverseChain() {
    if (this.length == 0) {
      return this;
    }
    var temp = null;
    var currentList = this.head;
    this.tail = currentList;
    while (currentList !== null) {
      temp = currentList.previous;
      currentList.previous = currentList.next;
      currentList.next = temp;
      currentList = currentList.previous;
    }
    if (temp != null) {
      this.head = temp.previous;
    }
    //console.log(this)
    return this;
  },
  finishChain() {
    let array = [];
    let currentList = this.head;
    while (currentList !== null) {
      array.push(currentList.value);
      //console.log(currentList.value);
      currentList = currentList.next;
    }
    let finalList = array.join("");
    this.head = new link('');
    this.tail = new link('');
    this.length = 0;
    if (finalList[finalList.length-1] == "~") {
      return finalList.slice(0, finalList.length-2)
    } else {
      return (finalList);
    }
  }
};

//console.log(chainMaker.addLink('ABC').reverseChain().addLink(Infinity).addLink(false).addLink(0).addLink('8.963').removeLink(2).removeLink(1).reverseChain().finishChain());
//console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain());
//chainMaker.reverseChain().reverseChain().reverseChain().addLink(NaN).reverseChain().addLink(null).addLink(1.233).addLink(true).addLink(false).removeLink(3).addLink(1.233).finishChain()
module.exports = {
  chainMaker
};
