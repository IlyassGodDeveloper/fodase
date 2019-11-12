const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
  if (message.author.id == "617111229386850389")
    return message.reply("você esta na blacklist.");
  if (message.author.id == "1") return message.reply("você esta na blacklist.");

  message.channel.send(
    "<:gadokkkj:636322696103198761> Um gado foi detectado, meninas favor evacuar a área."
  );
  message.delete();
};
