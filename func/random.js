function random(bot, msg) {
    let args = msg.content.trim().split(' ');
    args.shift();
    if (args.length < 2) {
        msg.channel.send('The Prophet needs at least two arguments...');
    } else {
        let game = args[Math.floor(Math.random() * args.length)];
        msg.channel.send('The Prophet has chosen... ' + game.toUpperCase());
    }
}

module.exports = {
    name: 'random',
    usage: 'random choice1 choice2 ...',
    execute: random,
};
