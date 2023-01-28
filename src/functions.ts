// The taxYear parameter is optional in this case. 
function calculateTax(income:number,taxYear=2022):number{
    if(taxYear<2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(12000);
// The type of the function Must be Declared 
// As a best practice the Return Type should be provided to the function

// The Return type is void if function is not returning anything
function returnNothing():void{
    console.log("This Function returns nothing: ")
}
returnNothing();