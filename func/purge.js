function purge(bot, msg) {
    let cpt = 0;
    let fn = setInterval(() => {
        if (cpt < 5) {
            msg.channel.send('https://giphy.com/gifs/5nsiFjdgylfK3csZ5T');
            cpt++;
        } else {
            clearInterval(fn);
            msg.channel.send('𝕋𝕙𝕚𝕤 𝕔𝕙𝕒𝕟𝕟𝕖𝕝 𝕙𝕒𝕤 𝕓𝕖𝕖𝕟 𝕡𝕦𝕣𝕘𝕖𝕕 𝕓𝕪 𝕥𝕙𝕖 ℍ𝕆𝕃𝕐 𝔽𝕃𝔸𝕄𝔼𝕋ℍℝ𝕆𝕎𝔼ℝ!\n𝕐𝕠𝕦 𝕔𝕒𝕟 𝕟𝕠𝕨 𝕨𝕣𝕚𝕥𝕖 𝕚𝕟 𝕡𝕖𝕒𝕔𝕖.');
        }
    }, 1000);
}

module.exports = {
    name: 'purge',
    usage: 'niko <user>',
    execute: purge,
};
