// Simple Object
// readonly works as a constant 
let employee: {readonly id:number,name:string} = {
     id:1,
    name:"Mosh",
}

// Function Object
let employee1:
{id:number,name:string,retire : (date:Date)  => void }
= 
{
    id:1,
    name:"Mosh",
    retire:(date:Date)=>console.log(date)
}
