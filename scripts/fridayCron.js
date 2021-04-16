const Discord = require('discord.js');

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

const discordClient = new Discord.Client();

discordClient.on('ready', async () => {
  const channel = discordClient.channels.cache.find(ch => ch.name === 'memes-shit');
  await channel.send({ files: ['./BonjourNousSommesVendredi.mp4'] });

  process.exit()
});

discordClient.login(DISCORD_TOKEN);
