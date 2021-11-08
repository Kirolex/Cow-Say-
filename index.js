const userInfo = require('./userInformation');

console.log(`Hey ! Mon nom c'est ${userInfo.name} et j'ai ${userInfo.age} ans !`);

userInfo.displayPassions();

const chalk = require('chalk');

// console.log(chalk.blue('Hello, npm!'));

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "La potite vacheu OwO",
    e : "UU",
    T : "w"
}));