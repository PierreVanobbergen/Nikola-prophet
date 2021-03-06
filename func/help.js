const { MessageEmbed, Message, Client } = require('discord.js');

/**
 *
 * @param {Client} bot
 * @param {Message} msg
 */
function help(bot, msg) {
    let commandChar = msg.content.trim().split(' ')[0].substr(0, 1);
    const embed = new MessageEmbed()
        .setAuthor('Prophet Nikola', '', 'https://github.com/PierreVanobbergen')
        .setColor('#f58a42')
        .setThumbnail('https://cdn.pixabay.com/photo/2015/05/11/15/40/prophet-762636_960_720.jpg')
        .setTitle('Prophet Nikola Commands')
        .setDescription("Here's the power that the Prophet currently has")
        .addFields(
            { name: `**${commandChar}niko <member>**`, value: 'Display the words of Holiness for someone' },
            {
                name: `**${commandChar}playniko <member>**`,
                value: '(Broken) Join the voice channel and say the holy sentence to someone',
            },
            {
                name: `**${commandChar}wizz <member>**`,
                value: 'Wizz someone (Only works if you have the correct admin rights)',
            },
            { name: `**${commandChar}purge**`, value: 'Clean a chat with the power of the holy flamethrower' },
            { name: `**${commandChar}random <choice1> <choice2> ...**`, value: 'Choose between the options' },
            {
                name: `**${commandChar}partpoll \"<title>\" <max people> <hours>**`,
                value: 'Create a participation poll, anyone who react to the message will be added to the list',
            },
            {
                name: `**${commandChar}commandChar <character>**`,
                value: 'Replace the command character by an other one',
            },
        );
    msg.channel.send(embed);
}

module.exports = {
    name: 'help',
    usage: 'niko <user>',
    execute: help,
};
