

import {
    calculator,
    capitalize,
    reverseString,
    caesarCipher,
    analyzeArray,
  } from "./exercises";
  
  test("capitalize test", () => {
    expect(capitalize("jest test rest")).toMatch("Jest test rest");
  });
  
  test("capitalize test for undefined", () => {
    expect(capitalize("")).toBe("");
  });
  
  test("capitalize test for null", () => {
    expect(capitalize(null)).toBe("");
  });
  
  test("reverse string test", () => {
    expect(reverseString("reversestr")).toMatch("rtsesrever");
  });
  
  test("reverse string test for empty string", () => {
    expect(reverseString("")).toBe("");
  });
  
  test("adding test", () => {
    expect(calculator.add(2, 91)).toBe(93);
  });
  
  test("subtracting", () => {
    expect(calculator.subtract(37, 14)).toBe(23);
  });
  
  test("multiplying test", () => {
    expect(calculator.multiply(4, 12)).toBe(48);
  });
  
  test("dividing test", () => {
    expect(calculator.divide(21, 7)).toBe(3);
  });
  
  test("analyzeArray test", () => {
    expect(analyzeArray([2, 3, 5, 6, 1, 7, 4])).toEqual({
      average: 4,
      min: 1,
      max: 7,
      length: 7,
    });
  });
  
  test("empyt array test", () => {
    expect(analyzeArray([])).toEqual({
      average: null,
      min: null,
      max: null,
      length: 0,
    });
  });
  
  test("Throws error for inputs that not an array", () => {
    expect(() => {
      analyzeArray(12345);
    }).toThrow("Input is not an array");
  });
  
  test("caesarCipher numbers test", () => {
    expect(caesarCipher("471318 9625", 4)).toEqual("471318 9625");
  });
  
  test("caesarCipher in range a-z", () => {
    expect(caesarCipher("hijklmn, opqrstu!", 4)).toEqual("lmnopqr, stuvwxy!");
  });
  
  test("caesarCipher out of range a-z", () => {
    expect(caesarCipher("qwerty!", 77)).toEqual("pvdqsx!");
  });
  
  test("caesarCipher punctuation test", () => {
    expect(caesarCipher('& , .. , ! [ } ? ... ! " ] }', 4)).toEqual('& , .. , ! [ } ? ... ! \" ] }');
  });