function wizz(bot, msg) {
    if (!msg.mentions.users.first()) {
        msg.channel.send("The prophet needs someone to be wizzed");
    }
    else if (!msg.member.hasPermission("MOVE_MEMBERS")) {
        msg.channel.send('Only the chosen ones are able to wizz');
    }
    else {
        let member = (msg.mentions.members.first())
        let channels = msg.guild.channels.cache.filter(c => c.type == "voice");
        channels = Array.from(channels.values());
        let times = 10;
        let interval = setInterval(() => {
            if (times !== 0) {
                times--;
                member.voice.setChannel(channels[times % channels.length])
            }
            else {
                clearInterval(interval)
            }
        }, 1000)

    }
}

module.exports = {
    name: "wizz",
    usage: "niko <user>",
    execute : wizz
}