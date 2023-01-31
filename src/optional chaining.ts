// Optional Chaining also called optional property access operator 
// Its symbol is ? Question Mark
function greet(name:string | null | undefined ):void{
    if (name)
    console.log(name?.toUpperCase())
    else
    console.log("Hola!")
}
greet("Mosh");
// name?.toUpperCase() 
// ?. is an optional property access operator

// Optional Element Access Operator
//      This is useful for Arrays.
let customers = [undefined,null,1];
console.log(customers?.[0] + " is the value ")

// Optional Call Operator 
    // This is useful for Functions.
let newFunc: any = (message:string) => console.log(message)
newFunc?.("This is report");

// In this case if newFunc is referencing to a function than it will be called otherwise it will not call it.