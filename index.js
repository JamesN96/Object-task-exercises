//Task 1

//Write the code, one line for each action

// Create an empty object (user)

let user = {};

// Add the property (name) with the value (John)

user.name = "John";

// Add the property (surname) with the value (Smith)

user.surname = "Smith";

// Change the value of the (name) to (Pete)

user.name = "Pete";

// Remove the property (name) from the object

delete user.name;

//Task 2

// Check for emptiness
    // Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

   function isEmpty(obj) {
       for(let key in obj) {
           // IF the loop starts, that means there is a property in the object = false.
           return false;
       }
       return true;
   }

    let schedule = {};
    schedule["8:30"] = "get up";

    alert(isEmpty(schedule));


