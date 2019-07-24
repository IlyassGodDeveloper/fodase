const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
if (message.author.id !== '595103385150160897') return message.reply("<:7775:593645935280783431> | você não possui permissão para usar esse comando.");
message.delete()
var separador = message.content.split("|")
const embed = new Discord.RichEmbed()
.setTitle(separador[1])
.setColor("BLACK")
.setDescription(separador[2])
.setImage(separador[3])
let servidores = client.guilds.size
let usuarios = client.users.size
 
client.users.forEach((f) => {f.send(embed)},
message.channel.send(`**${message.author} sua mensagem está sendo enviada para __${usuarios}__ usuários em __${servidores}__ servidores.**`)




)}