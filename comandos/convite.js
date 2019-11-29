const Discord = require("discord.js")

exports.run = (bot,message,args) => {
    let embed = new Discord.RichEmbed()

    .setTitle("🤖 Convite do bot")
    .setColor("BLACK")
    .setDescription(`**Clique [aqui](https://discordapp.com/oauth2/authorize?client_id=649989944529649684&scope=bot&permissions=11272) para adicionar o bot em seu servidor.**`)
    .setFooter(`${bot.user.username}`, bot.user.avatarURL)
    .setTimestamp()

    message.channel.send(embed);
}

exports.help = {
    name: "convite"
}