const fs = require('fs');

let commandList = {}

const commandFiles = fs.readdirSync('./func').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    if (file == "index.js") continue;
    const command = require(`./${file}`);
    commandList[command.name] = command
}

module.exports = commandList