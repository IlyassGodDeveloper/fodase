const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
if (message.author.id !== '283482289911103489') return message.reply(":7775: | você não possui permissão para usar esse comando.");
message.delete()
 
let mensagem = args.join(" ")
let alpha = message.guild.members.array().filter(u => ["online", "dnd", "idle"].includes(u.presence.status));

alpha.send(`${mensagem}`)
}
 
