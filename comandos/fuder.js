const Discord = require('discord.js');

module.exports.run = async (lep, message, args) => {
if (message.author.id == "617111229386850389") return message.reply("você esta na blacklist.");
  let User = message.mentions.users.first();
  if (!User) return message.reply('Usuário não encontrado!')

  let rendom = ["https://cdn.boob.bot/Gifs/1910.gif",
    "https://cdn.boob.bot/Gifs/18F3.gif",
    "https://cdn.boob.bot/Gifs/161B.gif",
    "https://cdn.boob.bot/Gifs/17BE.gif"]
  var rand = rendom[Math.floor(Math.random() * rendom.length)];


  let msa = message.author;
  let embed = new Discord.RichEmbed()
    .setTitle("Delicia rs 😈🔥")
    .setDescription(`${msa} chamou o(o) ` + User + ` para fuder gostoso 😈`)
    .setColor("#ff0000")
    .setImage(rand)
    .setFooter(`${message.author.tag}`, "https://cdn.discordapp.com/attachments/591171753653436416/606659923727876107/videotogif_2019.08.01_22.09.36.gif")

  message.channel.send(embed).then(msg => {msg.delete(9000)})

}

module.exports.help = {
  name: "fuder"
}
