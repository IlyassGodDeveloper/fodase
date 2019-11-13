const Discord = require('discord.js');

module.exports.run = async (lep, message, args) => {
if (message.author.id == "617111229386850389") return message.reply("você esta na blacklist.");
  let User = message.mentions.users.first();
  if (!User) return message.reply('Usuário não encontrado!')

  let rendom = ["https://cdn.nekos.life/kiss/kiss_143.gif", 
                "https://cdn.nekos.life/kiss/kiss_079.gif",
                "https://cdn.nekos.life/kiss/kiss_125.gif"
               ]
  var rand = rendom[Math.floor(Math.random() * rendom.length)];


  let msa = message.author;
  let embed = new Discord.RichEmbed()
  .setTitle("__Ai que lindo! 🥰__")
    .setThumbnail(`https://cdn.discordapp.com/emojis/614633181785882658.gif?v=1`)
    .setDescription(`${msa} acaba de beijar a(o) ` + User + ".")
    .setColor("#ff0000")
    .setImage(rand)
    .setFooter(`${message.author.tag}`, "https://cdn.discordapp.com/attachments/591171753653436416/606659923727876107/videotogif_2019.08.01_22.09.36.gif")

  message.channel.send(embed).then(msg => {msg.delete(90000)})

}

module.exports.help = {
  name: "kiss"
}
