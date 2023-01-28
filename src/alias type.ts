// Alias Type 
type Employee = {
    readonly id:number,
    name:string,
    retire:(date:Date)=>void
}
// The employees Object extends or inherits the Alias Employee and provides it id, name, and a retire function.
let employees:Employee = {
    id:1,
    name: "Mosh",
    retire:(date:Date)=>console.log(date)
}