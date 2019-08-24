const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
if (message.author.id !== '283482289911103489' && message.author.id !== '379779296979582987') return message.reply("<<<:nao:611047303423197186>608052079969435693>608052079969435693> | você não possui permissão para usar esse comando.");

let on = client.users.filter(m => m.presence.status === 'online')
let npertube = client.users.filter(m => m.presence.status === 'dnd')
let ausente = client.users.filter(m => m.presence.status === 'idle')
let todos = client.users.filter(m => m.presence.status === 'idle' && m.presence.status === 'dnd' && m.presence.status === 'online')
let off = client.users.filter(m => m.presence.status === 'offline')
let servidores= client.guilds.size

let mensagem = args.join(" ")

message.channel.send(`_**\`Mensagem sendo enviada para:\`**_\n\n <a:online:612359370545692790> **${on.size}**\n <a:dnd:612359448807079937> **${npertube.size}**\n <a:idle:612359545368477715> **${ausente.size}**\n\n <a:offline:612359594148233217> __**${off.size}**__ **serão ignorados em um total de** __**${servidores}**__ **servidores.**`) 

on.forEach(f1 => {
f1.send(mensagem)
        })

npertube.forEach(f2 => {
       f2.send(mensagem)
        });

  ausente.forEach(f3 => {
  f3.send(mensagem)
        });
  
  message.channel.forEach(f4 => {
   message.channel.send(`_**\`A mensagem foi divulgada para:\`**_\n\n <a:online:612359370545692790> **${on.size}**\n <a:dnd:612359448807079937> **${npertube.size}**\n <a:idle:612359545368477715> **${ausente.size}**\n\n <a:offline:612359594148233217> __**${off.size}**__ **foram ignorados em um total de** __**${servidores}**__ **servidores.**`)
  });
}