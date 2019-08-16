const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
if (message.author.id !== '283482289911103489' && message.author.id !== '611627807440896020') return message.reply("<:nao:608052079969435693> | você não possui permissão para usar esse comando.");
message.delete()
 
let on = message.guild.members.filter(m => m.presence.status === 'online')
let npertube = message.guild.members.filter(m => m.presence.status === 'dnd')
let ausente = message.guild.members.filter(m => m.presence.status === 'idle')

let mensagem = args.join(" ")
  let fabiano = client.users.get('283482289911103489')
      
on.forEach(f1 => {
        f1.send(mensagem)
        });
        fabiano.send('Primeira passada iniciada!')
        
  npertube.forEach(f2 => {
       f2.send(mensagem)
        });
      fabiano.send('Segunda passada iniciada!')

      ausente.forEach(f3 => {
          f3.send(mensagem)
      fabiano.send('Terceira passada iniciada!')
        });
    
}