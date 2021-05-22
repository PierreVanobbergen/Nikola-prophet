require('dotenv').config();
const fs = require('fs');
const func = require('./func/index');
func.commandChar = commandCharFunc;

const { Client, Intents } = require('discord.js');

const bot = new Client();
const TOKEN = process.env.TOKEN;

const { Player } = require('discord-player');

bot.player = new Player(bot);

let commandCharList;

try {
    commandCharList = JSON.parse(fs.readFileSync('./config/config-server.json'));
} catch (error) {
    commandCharList = {};
}

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
    for (guild of Object.keys(commandCharList)) {
        bot.guilds
            .resolve(guild)
            .members.resolve(bot.user.id)
            .setNickname(bot.user.username + ` (${commandCharList[guild]})`);
    }
});

bot.on('message', (msg) => {
    let commandChar = commandCharList[msg.guild.id] ?? '|';

    if (msg.author.bot || msg.channel.type === 'dm') return;
    if (!msg.content.startsWith(commandChar)) return;

    let command = msg.content.trim().split(' ')[0].substring(1);
    if (Object.keys(func).find((elem) => elem === command)) {
        func[command].execute(bot, msg);
    }
});

function commandCharFunc(bot, msg) {
    let args = msg.content.trim().split(' ');
    args.shift();
    if (args[0] && args[0].length == 1) {
        commandCharList[msg.guild.id] = args[0];
        msg.channel.send(`Command character changed to "${args[0]}"`);
        fs.writeFile('./config/config-server.json', JSON.stringify(commandCharList), () => {});
        msg.guild.member(bot.user.id).setNickname(bot.user.username + ` (${commandCharList[msg.guild.id]})`);
    } else {
        msg.channel.send('Only one character');
    }
}
