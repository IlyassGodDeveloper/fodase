const Discord = require("discord.js");
const client = new Discord.Client();

module.exports.run = (bot, message, args) => {
  if (message.author.id == "617111229386850389")
    return message.reply("você esta na blacklist.");
  if (message.author.id == "1") return message.reply("você esta na blacklist.");
  let member = message.mentions.users.first();
  let author = message.author.username;

  member.send(
    `😈 Você foi convidado(a) a participar de um **GF** com o(a) ${message.author.username}`
  );
  message.channel.send(
    `🔥 ${member} Olha seu privado bb`
  );
  message.delete();
};
