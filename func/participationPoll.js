const { Message, Client } = require("discord.js");
/**
 * 
 * @param {Client} bot 
 * @param {Message} msg 
 */
function partPoll(bot, msg) {
    let options = msg.content.trim().split(' ');
    options.shift();
    options = options.join(' ').split('"').filter((value) => value.length > 0 && value != " ");
    let numbers = options[1].trim().split(" ");
    options.pop();
    options = options.concat(numbers);
    let newMsg = new Message(bot, { content: options[0] }, msg.channel);
    msg.delete();
    msg.channel.send(newMsg).then(async value => {
        value.react('👍');
        let collector = value.createReactionCollector(filter, { max: parseInt(options[1]) + 1, time: parseInt(options[2]) * 1000 * 60 * 60, dispose: true });
        collector.on('collect', async (reaction, collector) => {
            let name = "<@" + collector.id + ">";
            if (!collector.bot) {
                await reaction.message.reactions.resolve("👍").users.remove(bot.user.id);
                reaction.message.edit(reaction.message.content + "\n- " + name);
                setTimeout(async () => {
                    let upd = options[0];
                    let speReact = value.reactions.cache.find((react) => react.emoji.name === "👍");
                    let users = await speReact.users.fetch();
                    users.forEach((user) => {
                        if (!user.bot) {
                            upd += "\n- <@" + user.id + ">";
                        }
                    });
                    reaction.message.edit(upd);
                }, 10000)
            }
        });
        collector.on("remove", async (reaction, collector) => {
            if (!collector.bot) {
                let name = "<@" + collector.id + ">";
                console.log(reaction.users.cache);
                if (!Object.keys(reaction.users.cache).length) {
                    reaction.message.react("👍");
                }
                    let replaced = reaction.message.content.replace(new RegExp(escapeRegex("\n- " + name), "gi"), "");
                    reaction.message.edit(replaced);
            }
        })
    });
}
const filter = (reaction, user) => {
    return '👍' === reaction.emoji.name;
}
function escapeRegex(string) {
    return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
module.exports = {
    name: "partpoll",
    usage: "partpoll <user>",
    execute : partPoll
}