"use strict";
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(12000);
function returnNothing() {
    console.log("This Function returns nothing: ");
}
returnNothing();
//# sourceMappingURL=functions.js.map