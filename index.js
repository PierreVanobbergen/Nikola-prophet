require('dotenv').config();
const func = require('./func/index');
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
let ready = true;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

let actions = {
  "|niko" : func.niko.niko,
  "|playniko" : func.niko.playNiko,
  "|purge" : func.purge,
  "|random" : func.random,
  "|wizz" : func.wizz,
  "|help" : func.help,
  "|partpoll" : func.partpoll

}

bot.on('message', msg => {
  let command = msg.content.trim().split(' ')[0];
  if(Object.keys(actions).find(elem => elem === command)){
    actions[command](bot, msg);
  }
});
