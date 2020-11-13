const { Message, Client } = require("discord.js");

function niko(bot, msg) {
    if (msg.mentions.users.size == 0) {
        msg.channel.send('Did I ever say that I consider you as a God ?');
    }
    else {
        for (let mention of msg.mentions.users) {
            msg.channel.send('Did I ever say that I consider you as a God ? <@' + mention[0] + '>');
        }
    }
}
/**
 * 
 * @param {Client} bot 
 * @param {Message} msg 
 */
function playNiko(bot, msg) {
    msg.member.voice.channel.leave();
    let voiceChannel = msg.member.voice.channel;
    voiceChannel.join().then(connection => {
        const dispatcher = connection.play('../DidIEverSay.wav');
        dispatcher.on("finish", end => {
            voiceChannel.leave();
        });
    }).catch(err => {console.log(err); voiceChannel.leave()});
}

module.exports = {
    niko,
    playNiko
}