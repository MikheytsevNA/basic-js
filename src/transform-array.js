//const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr1) {
    class Node {
      constructor(data) {
          this.data = data
          this.next = null 
          this.previous = null;              
      }
    }
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

      append (value) {
        let newNode = new Node(value);

        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;
      }

      remove (index) {let previousNode = this.head;

        for (let k = 0; k < index - 1; k++) {
            previousNode = previousNode.next;
        }
        let deleteNode = previousNode.next;
        let nextNode = deleteNode.next;

        previousNode.next = nextNode;
        nextNode.previous = previousNode;
        return this;
      }
    }
  if (!Array.isArray(arr1)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  }
  if (arr1.length ==0) {
    return [];
  }
  var arr = arr1;
  var commandList = ["--discard-next", "--double-next", "--discard-prev", "--double-prev"];
  var index = 0;
  while (commandList.slice(2,4).includes(arr[index])) {
    index++;
  }
  var myDoublyList = new DoublyLinkedList;
  for (let i = index; i < arr.length; i++) {
    console.log(arr[i]);
    switch (arr[i]) {
      case commandList[0]:
        if (i != (arr.length - 1)) {
          i++;
        }
        break;
      case commandList[1]:
        if (i != (arr.length - 1)) {
          myDoublyList.append(arr[i+1]);
        }
        break;
      case commandList[2]:
        if (myDoublyList.tail.data == arr[i-1]) {
          myDoublyList.remove(i-1);
        }
        break;
      case commandList[3]:
        console.log(123);
        if (myDoublyList.tail.data == arr[i-1]) {
          myDoublyList.append(myDoublyList.tail.data);
        }
        break;
      default:
        myDoublyList.append(arr[i]);
        console.log(myDoublyList.tail.data);
        break;
    }
  }
  arr = myDoublyList.getList();
  return arr.slice(1);
}

module.exports = {
  transform
};
