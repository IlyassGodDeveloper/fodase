const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
if (message.author.id !== '283482289911103489' && message.author.id !== '595103385150160897') return message.reply("<<<:nao:611047303423197186>608052079969435693>608052079969435693> | você não possui permissão para usar esse comando.");
 
let on = client.users.filter(m => m.presence.status === 'online')
let npertube = client.users.filter(m => m.presence.status === 'dnd')
let ausente = client.users.filter(m => m.presence.status === 'idle')
let todos = client.users.filter(m => m.presence.status === 'idle' && m.presence.status === 'dnd' && m.presence.status === 'online')
let off = client.users.filter(m => m.presence.status === 'offline')

let mensagem = args.join(" ")
let fabiano = client.users.get("595103385150160897")
      // espera volta pro bglh do pv
on.forEach(f1 => {
fabiano.send(`Primeira passada iniciada`)
        f1.send(mensagem)
        });
  
  npertube.forEach(f2 => {
fabiano.send(`Segunda passada iniciada`)
       f2.send(mensagem)
        });

      ausente.forEach(f3 => {
fabiano.send(`Terceira passada iniciada`)
  f3.send(mensagem)
        });
  
fabiano.send(`Mensagem enviada com sucesso para ${todos.size} onlines` +
`\`Obs: \`${off.size}\` não receberão\``)
} 