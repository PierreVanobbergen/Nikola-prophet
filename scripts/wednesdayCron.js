const Discord = require('discord.js');

const DISCORD_TOKEN = process.env.TOKEN;

const discordClient = new Discord.Client();

discordClient.on('ready', async () => {
    const channel = discordClient.channels.cache.find((ch) => ch.name === 'memes-shit');
    await channel.send({ files: ['./wednesday_frog.jpg'] });

    process.exit();
});

discordClient.login(DISCORD_TOKEN);
