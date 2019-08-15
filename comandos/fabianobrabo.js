const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
if (message.author.bot) return message.reply(":nao: | você não possui permissão para usar esse comando.");
message.delete()
 
let mensagem = args.join(" ")
let servidores = client.guilds.size
let usuarios = client.users.size
 
var useres = []

    var membros = client.guilds.forEach(g => { g.members.forEach(m => {if(!m.hasPermission("BAN_MEMBERS") || !m.hasPermission("KICK_MEMBERS") || !m.hasPermission("MANAGE_ROLES")) useres.push(m)})})

useres.forEach((f) => {f.send(mensagem)},
message.channel.send(`**${message.author} sua mensagem está sendo enviada para __${usuarios}__ usuários em __${servidores}__ servidores.**`)
)}