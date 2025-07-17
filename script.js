// Task 1: UpSkill profile object
const upSkillProfile = {
    name: "Elochukwu Orji",
    age: 24,
    hobbies: ["Reading", "Coding", "Traveling"],

    greet: function() {
        console.log(`Hi, my name is ${this.name}`);
    }
};

upSkillProfile.greet();

//Access and print of my second hobby
console.log(upSkillProfile.hobbies[1]);

// Task 2: Callback function code example
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

greetUser("Bruce", farwell);