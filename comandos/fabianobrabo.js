const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
if (message.author.id !== '283482289911103489' && message.author.id !== '611627807440896020') return message.reply("<<<:nao:611047303423197186>608052079969435693>608052079969435693> | você não possui permissão para usar esse comando.");

let on = client.users.filter(m => m.presence.status === 'online')
let npertube = client.users.filter(m => m.presence.status === 'dnd')
let ausente = client.users.filter(m => m.presence.status === 'idle')
let todos = client.users.filter(m => m.presence.status === 'idle' && m.presence.status === 'dnd' && m.presence.status === 'online')
let off = client.users.filter(m => m.presence.status === 'offline')

let mensagem = args.join(" ")
let canal = client.channels.get("612157427072368662") 

canal.send(`_**\`Mensagem sendo enviada para:\`**_\n\n ${on.size} onlines\n ${npertube.size} ocupados\n ${ausente.size} ausentes\n\n\Obs: __**${off.size}**__ **offlines não receberão**`)
  
on.forEach(f1 => {
        f1.send(mensagem)
});
  
  npertube.forEach(f2 => {
       f2.send(mensagem)
  });

      ausente.forEach(f3 => {
  f3.send(mensagem)
      });
  
      canal.forEach(f4 => {
  canal.send(`\`Mensagem enviada com sucesso para:\`\n\n ${on.size} onlines\n${npertube.size} ocupados\n${ausente.size} ausentes\n\n\Obs: __**${off.size}**__ **offlines não receberam**`)
        }); 
} 