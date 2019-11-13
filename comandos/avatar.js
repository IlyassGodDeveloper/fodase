const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (message.author.id == "617111229386850389")
    return message.reply("você esta na blacklist.");
  if (message.author.id == "1") return message.reply("você esta na blacklist.");
  let member =
    message.mentions.users.first() || bot.users.get(args[0]) || message.author;
  let avatar = member.displayAvatarURL;
  if (avatar.endsWith(".gif")) {
    avatar = `${member.displayAvatarURL}?size=2048`;
  }
  let embed = new Discord.RichEmbed()
    .setAuthor(`Foto de perfil da(o) ${member.tag}: `, avatar)
    .setDescription(`<:hypesquad:617530201466732561>[**LINK**](${avatar})`)
    .setFooter(`${message.author.tag}`)
    .setTimestamp()
    .setColor([0]).setImage(avatar);
    

  message.delete(20);
  message.channel.send(embed)
};

module.exports.help = {
  name: "avatar"
};
