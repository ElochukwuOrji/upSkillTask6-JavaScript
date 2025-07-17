# UpSkill Profile and Callback Function Example

## Overview

This project contains a JavaScript file (`script.js`) that implements an UpSkill profile object and demonstrates the use of callback functions. The code logs messages to the console.

## Contents

1. **UpSkill Profile Object**
   - An object representing an individual with properties such as name, age, and hobbies.
   - Includes a method to greet the user.

2. **Callback Function Example**
   - A demonstration of a callback function that executes after a delay, illustrating asynchronous programming in JavaScript.

## Code Explanation

### Task 1: UpSkill Profile Object

The `upSkillProfile` object includes:
- `name`: The name of the individual.
- `age`: The age of the individual.
- `hobbies`: An array containing three hobbies.
- `greet`: A method that logs a greeting message to the console using the object's name property.

Example:
```javascript
const upSkillProfile = {
    name: "Elochukwu Orji",
    age: 24,
    hobbies: ["Reading", "Coding", "Traveling"],
    
    greet: function() {
        console.log(`Hi, my name is ${this.name}`);
    }
};

upSkillProfile.greet(); 
console.log(upSkillProfile.hobbies[1]);
```

### Task 2. Callback Function Example
Demonstrates asynchronous callback pattern with:

- Main function that accepts a callback

- Simulated async operation using setTimeout()

- Clean separation of concerns between functions

```
function greetUser(name, callback) {
    console.log(`Hello, ${name}!`);
    setTimeout(() => {
        console.log("Discussion completed.");
        callback();
    }, 1000);
}

function farwell() {
    console.log("Goodbye!");
}
```

## Usage
  1. Clone the repository:
     ```
     git clone https://github.com/ElochukwuOrji/upSkillTask6-JavaScript.git
     ```
  2. Run the script:
     ```
     node script.js
     ```

## Expected Output
```
Hi, my name is Elochukwu Orji
Coding
Hello, Bruce!
Discussion completed.
Goodbye!
```

## Author
Elochukwu Orji
