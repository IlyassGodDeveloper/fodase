const Discord = require('discord.js');

module.exports.run = async (lep, message, args) => {
if (message.author.id == "617111229386850389") return message.reply("você esta na blacklist.");
  let User = message.mentions.users.first();
  if (!User) return message.reply('Usuário não encontrado!')

  let rendom = ["https://media.giphy.com/media/XBRrgzwJIN0fPk1MaP/giphy.gif",
    "https://cdn.discordapp.com/attachments/559054152144125992/609631148834029578/Gif-Abraco-Baixar-Imagens.gif",
    "https://cdn.discordapp.com/attachments/559054152144125992/609633957281005569/friends-friends-hug-jennifer-aniston-favim.com-1177017.gif",
    "https://cdn.discordapp.com/attachments/559054152144125992/609634947963158544/tumblr_mv2si87m4N1rksitto1_400.gif"]
  var rand = rendom[Math.floor(Math.random() * rendom.length)];


  let msa = message.author;
  let embed = new Discord.RichEmbed()
    .setTitle("Ai que fofo :blush:")
    .setDescription(`${msa} abraçou o ` + User + ".")
    .setColor("#ff0000")
    .setImage(rand)
    .setFooter(`${message.author.tag}`, "https://cdn.discordapp.com/attachments/591171753653436416/606659923727876107/videotogif_2019.08.01_22.09.36.gif")

  message.channel.send(embed).then(msg => {msg.delete(9000)})

}

module.exports.help = {
  name: "hug"
}
