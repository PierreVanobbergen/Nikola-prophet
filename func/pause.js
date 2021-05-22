module.exports = {
    name: 'pause',
    usage: '{prefix}pause',

    execute(client, message) {
        if (!message.member.voice.channel)
            return message.channel.send(`- You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id)
            return message.channel.send(`- You are not in the same voice channel !`);

        if (!client.player.getQueue(message))
            return message.channel.send(`- No music currently playing !`);

        if (client.player.getQueue(message).paused)
            return message.channel.send(`- The music is already paused !`);

        const success = client.player.pause(message);

        if (success) message.channel.send(`- Song ${client.player.getQueue(message).playing.title} paused !`);
    },
};
