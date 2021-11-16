const fs = require("fs");
const readline = require("readline");
let value;

console.log(`is it run`);

fs.writeFile("README.md", "* ", function(error) {
    if(error) throw error;  
});

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
    // TODO: Log the answer in a database
    // console.log(`Thank you for your valuable feedback: ${answer}`);
    fs.appendFile("README.md", answer + "\n", function(error) {
        if(error) throw error; 
    });
    rl.close();
});

rl.question('What do you think of Node.js? ', (answer) => {
    // TODO: Log the answer in a database
    // console.log(`Thank you for your valuable feedback: ${answer}`);
    fs.appendFile("README.md", answer + "\n", function(error) {
        if(error) throw error; 
    });
    rl.close();
});