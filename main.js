//Exercise 1

if(1 + 1 > 4) {console.log("True fact!");} 
else {console.log("LIES!")}

//Exercise 2

var likesDogs = true; 
if(likesDogs = true) {console.log("You're a dog person!")}
else {console.log("You're a cat person!")}

//Exercise 3
let person = {
    name: "kathleen", 
    perferredLanguage: "spanish"}

if (person.perferredLanguage === "english") {
    console.log(`Hello, ${person.name}!`);
} else if (person.perferredLanguage === "spanish") {
    console.log(`Hello, ${person.name}!`); 
} else if (person.perferredLanguage === "french") {
    console.log(`Hello, ${person.name}}!`)
}

//Exercise 4
let grade = 99

if (grade >= 0 && grade <= 69) {
    console.log("You got a F");
} 
else if (grade > 70 && grade < 76) {
    console.log("You got a D");
}
else if (grade > 77 && grade < 84) {
    console.log("You got a C");
}
else if(grade > 84 && grade < 92) {
    console.log("You got a B"); 
}
else if (grade > 93 && grade < 100) {
    console.log("You got an A")
}