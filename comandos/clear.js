const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (message.author.id == "617111229386850389")
    return message.reply("você esta na blacklist.");
  
  if (message.author.id == "1") return message.reply("você esta na blacklist.");
  if (!message.member.hasPermission("MANAGE_CHANNELS"))
 if ( !message.author.id !== "568234099093798923" )
    return message.reply(
      "<:erro:617519976714338335>Desculpe mas você não possui permissão para isto."
    );
  if (!args[0]) return message.channel.send("Use: +clear `1 à 100`");
  message.channel.bulkDelete(args[0]).then(() => {});

  let embed = new Discord.RichEmbed()
    .setTitle("Chat limpo!")
    .setDescription(`:wrench: **Limpei:** \`\`\`\n${args[0]} mensagens.\`\`\``)
    .setFooter(`Por ${message.author.tag}`);
  message.channel.send(embed).then(msg => {
    msg.delete(5000);
  });
};

module.exports.help = {
  name: "limpar"
};
