export function capitalize(str) {
    if (!str || typeof str !== "string") {
      return "";
    }
    str = str.toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  export function reverseString(str) {
    if (!str || typeof str !== "string") {
      return "";
    }
  
    return str.split("").reverse().join("");
  }
  
  export const calculator = {
    add: function (a, b) {
      return a + b;
    },
  
    subtract: function (a, b) {
      return a - b;
    },
  
    multiply: function (a, b) {
      return a * b;
    },
  
    divide: function (a, b) {
      return a / b;
    }
  };
  
  export function caesarCipher(message, shiftFactor) {
    let newMessage = "";
  
    for (let i = 0; i < message.length; i++) {
      let char = message[i];
  
      if (char.match(/[a-z]/i)) {
        const code = message.charCodeAt(i);
  
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 + shiftFactor) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 + shiftFactor) % 26) + 97);
        }
      }
  
      newMessage += char;
    }
  
    return newMessage;
  }
  
  export function analyzeArray(arr) {
    if (!Array.isArray(arr)) {
      throw new Error("Input is not an array");
    }
  
    if (arr.length === 0) {
      return {
        average: null,
        min: null,
        max: null,
        length: 0,
      };
    }
  
  
    arr = arr.sort();
      let average = 0;
  
      arr.forEach(element => {
          average += element;
      })
  
      average = average / arr.length;
      
      return {
          average: average,
          min: arr[0],
          max: arr[arr.length - 1],
          length: arr.length
      };
  }
  