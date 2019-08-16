const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
if (message.author.id !== '283482289911103489' && message.author.id !== '611627807440896020') return message.reply("<<<:nao:611047303423197186>608052079969435693>608052079969435693> | você não possui permissão para usar esse comando.");
message.delete()
 
let on = client.users.filter(m => m.presence.status === 'online')
let npertube = client.users.filter(m => m.presence.status === 'dnd')
let ausente = client.users.filter(m => m.presence.status === 'idle')

let mensagem = args.join(" ")
let fabiano = client.channels.get('611664907825577986')
      
on.forEach(f1 => {
     fabiano.send('**Divulgando para usuários __online__**')
        f1.send(mensagem)
        });
  
        
  npertube.forEach(f2 => {
      fabiano.send('**Divulgando para usuários __ocupados__**')
       f2.send(mensagem)
        });

      ausente.forEach(f3 => {
        fabiano.send('**Divulgando para usuários __ausentes__**')
  f3.send(mensagem)
        });
    
}
 