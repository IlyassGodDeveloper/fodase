const Discord = require("discord.js")


module.exports.run = (bot, message, args, discord) => {
  if (message.author.id == "") return message.reply("você esta na blacklist.");
  if (message.author.id !== "391622998572007434" &&
     message.author.id !== "559825881271369795" &&
     message.author.id !== "634366099970064384")
             if (message.author.id !== "568234099093798923") return message.reply(":x:FAIL, você não possui permissão!");
    let newname = args.join(' ')
    bot.user.setUsername(newname)
  
    message.channel.send(`Novo nick:\n ${newname}!`).then(m => {
      message.delete(100)
      m.delete(10000)
    })
}

module.exports.help = {
  name: "setnick"
}