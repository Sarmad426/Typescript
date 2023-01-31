"use strict";
function greet(name) {
    if (name)
        console.log(name === null || name === void 0 ? void 0 : name.toUpperCase());
    else
        console.log("Hola!");
}
greet("Mosh");
let customers = [undefined, null, 1];
console.log((customers === null || customers === void 0 ? void 0 : customers[0]) + " is the value ");
let newFunc = (message) => console.log(message);
newFunc === null || newFunc === void 0 ? void 0 : newFunc("This is report");
//# sourceMappingURL=optional%20chaining.js.map