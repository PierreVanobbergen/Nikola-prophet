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

module.exports = {
    name: "niko",
    usage: "niko <user>",
    execute : niko
}