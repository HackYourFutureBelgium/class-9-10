/**
* 
+ as an Addition Operator & + as a Unary Version in Javascript Objects

+ is an arithmetic operator (take numerical values (either literals or variables) as their operands and return a single numerical value) 
+ as a unary operator (an operation with only one operand.)

The + and - operators also have unary versions, where they operate only on one variable. When used in this fashion, + returns the number representation of the object, while - returns its negative counterpart

The unary plus operator converts its operand to Number type.
The unary negation operator converts its operand to Number type and then negates it.

Run this code here: https://jsfiddle.net/6wu1kxr8/1/
*
*/

let codes = {
    "+1": "plus",
    "-1": "minus",
    // "1": "no-plus-nothing", //Duplicate key
    1: "no-strings-attached"
  };
  
  // Evaluates to string type
  for (let code in codes) console.log(codes[code], code, typeof code);
  // Evaluates to number type
  for (let code in codes) console.log(codes[code], +code, typeof +code);
  // Negates the sign and turn it to number
  for (let code in codes) console.log(codes[code], -code, typeof -code);

  
/**
*   https://javascript.info/object#the-for-in-loop
*   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Unary_plus_(.2B)
*/