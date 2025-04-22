function example() {
    if (true) {
      var x = 10;
      let y = 20;
      const z = 30;
  
      console.log(x); // Output: 10
      console.log(y); // Output: 20
      console.log(z); // Output: 30
    }
  
    console.log(x); // Output: 10 (var is function-scoped)
    // console.log(y); // Error: y is not defined (let is block-scoped)
    // console.log(z); // Error: z is not defined (const is block-scoped)
  }
  
  example();
  
  const obj = { name: "John" };
  obj.name = "Jane"; // Allowed
  console.log(obj.name)
  
  // const num = 5;
  // num = 6; // Error: Assignment to constant variable
  
/*

------------------------------ NOTES ------------------------------

In JavaScript, var, let, and const are keywords used to declare variables, but they differ in scope, hoisting, and reassignment capabilities: 

1. Scope:
- var is function-scoped or global-scoped, meaning it is accessible globally even outside the block (e.g., outside the curly braces {}) 
- let and const are block-scoped, meaning they are only accessible within the block (e.g., within curly braces {}) where they are defined.

2. Hoisting:
- var declarations are hoisted to the top of their scope and initialized with undefined, meaning you can access them before the line they are declared, but their value will be undefined.
- let and const are also hoisted, but they are not initialized. Accessing them before their declaration results in a ReferenceError. This is known as the "temporal dead zone." 

3. Reassignment:
- var and let variables can be reassigned new values after their initial declaration.
- const variables cannot be reassigned after their initial value is set. However, if a const variable holds an object or array, the properties or elements of that object or array can still be modified. 

*/