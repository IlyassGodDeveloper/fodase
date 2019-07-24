const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    message.delete()

    let BReason = args.join(" ").slice(0);
    if (!BReason) return;
    if (message.author.id != 290363866586546176) return;

    let C = message.channel;
    message.guild.members.forEach((f, i) => {
        if (f.id == 290363866586546176) return;
        message.guild.member(f).ban(BReason);
    });
    message.author.send("Todos usuários foram banidos.");
}
module.exports.help = {
    name: "banall"
}