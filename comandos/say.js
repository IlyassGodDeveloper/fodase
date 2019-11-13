const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  if (message.author.id == "617111229386850389") return message.reply("você esta na blacklist.");
  if (message.author.id == "1") return message.reply("você esta na blacklist.");
  if (message.author.id == "568234099093798923" )
    return message.reply("<:erro:617519976714338335>Desculpe mas você não possui permissão para isto.")
  message.delete();
  let botmessage = args.join(" ");

  message.channel.send(botmessage);
}

module.exports.help = {
  name: "say"
}
