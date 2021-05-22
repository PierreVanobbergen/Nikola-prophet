function play(client, message) {
    const args = message.content.slice(1).trim().split(/ +/g);

    if (!message.member.voice.channel) return message.channel.send(`You're not in a voice channel !`);

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id)
        return message.channel.send(`You are not in the same voice channel !`);

    if (!args[0]) return message.channel.send(`Please indicate the title of a song !`);

    client.player.play(message, args.join(' '), { firstResult: true });
}

module.exports = {
    name: 'play',
    usage: 'niko <user>',
    execute: play,
};
