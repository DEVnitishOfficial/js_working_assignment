

// 04. Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign
// them values and log their values to the console before and after they are declared to demonstrate variable
// hoisting.

{
    console.log(name); // undefined due to hoisting
    console.log(lastName); // ReferenceError: Cannot access 'lastName' before initialization
    console.log(tag); // ReferenceError: Cannot access 'lastName' before initialization

    var name = "nitish";
    let lastName = "kumar";
    const tag = "Official";

    console.log(name); // nitish
    console.log(lastName); // kumar
    console.log(tag); // official
}