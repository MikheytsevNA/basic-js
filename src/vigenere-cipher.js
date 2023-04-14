/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (arg) {
    if (arguments.length == 0 || arg == true) {
      this.direct = true;
    } else if (arg == false) {
      this.direct = false;
    }
  }
  encrypt(message, key) {
    if (arguments.length < 2) {
      throw Error("Incorrect arguments!");
    }
    if (typeof arguments[0] != 'string' || typeof arguments[1] != 'string') {
      throw Error("Incorrect arguments!");
    }
    var encMessage = [];
  
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    let alphabetList = [];
    let currentAlphabet;
    let temp;
    var keyArr = key.toUpperCase().split('');
    var usedLetters = [];
    for (let letter of keyArr) {
      currentAlphabet = JSON.parse(JSON.stringify(alphabet));
      if (!usedLetters.includes(letter)) {
        for (let i = 0; i < alphabet.indexOf(letter); i++) {
          temp = currentAlphabet.shift();
          currentAlphabet.push(temp);
        }
        
      } else {
        continue;
      }
      usedLetters.push(currentAlphabet[0]);
      alphabetList.push(currentAlphabet);
      console.log(currentAlphabet);
    }
    var messageArr = message.toUpperCase().split("");
    var messageIndex = 0;
    for (let i = 0; i < messageArr.length; i++) {
      console.log(messageIndex);
      console.log(usedLetters.indexOf(keyArr[messageIndex]));
      if (!alphabet.includes(messageArr[i])) {
        encMessage.push(messageArr[i]);
      } else {
        encMessage.push((alphabetList[usedLetters.indexOf(keyArr[messageIndex])])[alphabet.indexOf(messageArr[i])]);
        messageIndex ++;
      }
      //console.log(alphabetList[messageIndex]);
      if (messageIndex > keyArr.length-1) {
        messageIndex = 0;
      }
    }
    if (this.direct) {
      return encMessage.join('');
    } else {
      return encMessage.reverse().join('');
    }
  }
  decrypt(encryptedMessage, key) {
    var decrMessage = [];
    if (arguments.length < 2) {
      throw Error("Incorrect arguments!");
    }
    if (typeof arguments[0] != 'string' || typeof arguments[1] != 'string') {
      throw Error("Incorrect arguments!");
    }
    let newencryptedMessage = encryptedMessage;
    /* if (!this.direct) {
      newencryptedMessage = encryptedMessage.split("").reverse().join("");
    } */

    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    let alphabetList = [];
    let currentAlphabet;
    let temp;
    var keyArr = key.toUpperCase().split('');
    var usedLetters = [];
    for (let letter of keyArr) {
      currentAlphabet = JSON.parse(JSON.stringify(alphabet));
      if (!usedLetters.includes(letter)) {
        for (let i = 0; i < alphabet.indexOf(letter); i++) {
          temp = currentAlphabet.shift();
          currentAlphabet.push(temp);
        }
        
      } else {
        continue;
      }
      usedLetters.push(currentAlphabet[0]);
      alphabetList.push(currentAlphabet);
    }
    var messageArr = newencryptedMessage.toUpperCase().split("");
    var messageIndex = 0;
    for (let i = 0; i < messageArr.length; i++) {
      if (!alphabet.includes(messageArr[i])) {
        decrMessage.push(messageArr[i]);
      } else {
        decrMessage.push(alphabet[(alphabetList[usedLetters.indexOf(keyArr[messageIndex])]).indexOf(messageArr[i])]);
        messageIndex ++;
      }
      if (messageIndex > keyArr.length-1) {
        messageIndex = 0;
      }
    }
    if (!this.direct) {
      return decrMessage.reverse().join("");
    } else {
      return decrMessage.join('');
    }
    
  }
}

/* function encrypt(message, key) {
  if (arguments.length < 2) {
    throw Error("Incorrect arguments!");
  }
  if (typeof arguments[0] != 'string' || typeof arguments[1] != 'string') {
    throw Error("Incorrect arguments!");
  }
  var encMessage = [];

  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  let alphabetList = [];
  let currentAlphabet;
  let temp;
  var keyArr = key.toUpperCase().split('');
  var usedLetters = [];
  for (let letter of keyArr) {
    currentAlphabet = JSON.parse(JSON.stringify(alphabet));
    if (!usedLetters.includes(letter)) {
      for (let i = 0; i < alphabet.indexOf(letter); i++) {
        temp = currentAlphabet.shift();
        currentAlphabet.push(temp);
      }
      
    } else {
      continue;
    }
    usedLetters.push(currentAlphabet[0]);
    alphabetList.push(currentAlphabet);
    console.log(currentAlphabet);
  }
  var messageArr = message.toUpperCase().split("");
  var messageIndex = 0;
  for (let i = 0; i < messageArr.length; i++) {
    console.log(messageIndex);
    console.log(usedLetters.indexOf(keyArr[messageIndex]));
    if (!alphabet.includes(messageArr[i])) {
      encMessage.push(messageArr[i]);
    } else {
      encMessage.push((alphabetList[usedLetters.indexOf(keyArr[messageIndex])])[alphabet.indexOf(messageArr[i])]);
      messageIndex ++;
    }
    //console.log(alphabetList[messageIndex]);
    if (messageIndex > keyArr.length-1) {
      messageIndex = 0;
    }
  }
  return encMessage.join('');
} */

//console.log(encrypt('Example of sequence: 1, 2, 3, 4.', 'lilkey'));

module.exports = {
  VigenereCipheringMachine
};
