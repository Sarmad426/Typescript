/* 
    Type alias and interface are somehow same But type 
    alias cannot be modified after being created while
    interfaces can be changed.
*/
 
// Basic Syntax
interface User{
    readonly dbId: number,
    email:string,
    userId : number,
    googleId ? : number,
}

// Modification in Interface
interface User {
    githubToken:number
}
// Inheritance in Interfaces
interface Admin extends User {
    role : "admin" | "ta" | "learner"
}
// Applying all these on a single Object:
 
const newUser:User = {
    dbId : 15,
    email:"sarmadrafique040@gmail.com",
    userId: 9,
    githubToken:6734,
    googleId:34990 
}
// Now for admin User
const newAdmin:Admin = {
    dbId : 15,
    email:"sarmadrafique040@gmail.com",
    userId: 9,
    githubToken:6734,
    googleId:34990 ,
    role : "admin"
}
// role in newAdmin can only be of three types
console.log(newAdmin.role);