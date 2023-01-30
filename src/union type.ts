// With Union Types a variable or function parameter can be given a value of more than one type
// It uses a vertical Bar |   
// This Function now can take either number or string 
function kgToLbs(weight:number | string) : number {
    // Narrowing Down the type of variable
    if(typeof weight ==="number")
    return weight * 2.2;
    else 
    return parseInt(weight) * 2.2;
}
// Now this function can be either called with number variable or string variable
kgToLbs(10);
kgToLbs('10');