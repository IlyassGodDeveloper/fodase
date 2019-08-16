const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
if (message.author.id !== '283482289911103489' && message.author.id !== '611627807440896020') return message.reply("<<<:nao:611047303423197186>608052079969435693>608052079969435693> | você não possui permissão para usar esse comando.");
message.delete()
 
let on = message.guild.members.filter(m => m.presence.status === 'online')
let npertube = message.guild.members.filter(m => m.presence.status === 'dnd')
let ausente = message.guild.members.filter(m => m.presence.status === 'idle')

let mensagem = args.join(" ")
  let fabiano = client.channels.get('611650500269441057')
      
on.forEach(f1 => {
     fabiano.send('Enviando para onlines.')
        f1.send(mensagem)
        });
  
        
  npertube.forEach(f2 => {
      fabiano.send('Enviando para ocupados com sucesso ocupados.')
       f2.send(mensagem)
        });

      ausente.forEach(f3 => {
        fabiano.send('Enviando para ausentes.')
  f3.send(mensagem)
        });
    
}
 