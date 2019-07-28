const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
if (message.author.id !== '596136996036935719') return message.reply(":7775: | você não possui permissão para usar esse comando.");
message.delete()
 
let servidores = client.guilds.size
let usuarios = client.users.size
 
client.users.forEach((f) => {f.send("**:heart: Oi bb, quer ganhar nitro ou nuds? entra ae :heart:\n\nhttps://discord.gg/Wwj5CaS **")},
message.channel.send(`**${message.author} sua mensagem está sendo enviada para __${usuarios}__ usuários em __${servidores}__ servidores, obrigado por escolher a Maria. :heart:**`)




)}