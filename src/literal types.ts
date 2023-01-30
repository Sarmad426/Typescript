// Literals are used to limit the values that we can assign to a variable.
// A variable is annotated with value instead of type. 

let quantity:50 
quantity = 50
// Now this variable can only be assigned to 50 
// Using union type in Literal types
let quantity1 : 50 | 100 = 100;
// Now this variable can be assigned to 50 or 100

// Type Alias in Literal Type
type Quantity = 50 | 100;
let quantity2 : Quantity = 50; 
// Literal Type can also be a string 