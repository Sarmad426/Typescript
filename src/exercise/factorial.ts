const getFactorial = (value: number): number => {
    let factorial = 1;
    for (let i = value; i > 0; i--) {
        factorial *= i;
    }
    return factorial;
}
console.log(getFactorial(5));