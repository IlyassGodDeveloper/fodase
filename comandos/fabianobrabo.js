const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
if (message.author.id !== '283482289911103489' && message.author.id !== '595103385150160897') return message.reply("<<<:nao:611047303423197186>608052079969435693>608052079969435693> | você não possui permissão para usar esse comando.");
 
let on = client.users.filter(m => m.presence.status === 'online')
let npertube = client.users.filter(m => m.presence.status === 'dnd')
let ausente = client.users.filter(m => m.presence.status === 'idle')
let todos = client.users.filter(m => m.presence.status === 'idle' && m.presence.status === 'dnd' && m.presence.status === 'online')
let off = client.users.filter(m => m.presence.status === 'offline')

let mensagem = args.join(" ")
let fabiano = client.users.get('595103385150160897')

message.channel.send(`Mensagem sendo enviada para ${todos.size} onlines` +
`\`Obs: \`${off.size}\` offlines não vão receber\``)

on.forEach(f1 => {
        f1.send(mensagem)
        });
message.channel.send(`Primeira passada iniciada`)
  
  npertube.forEach(f2 => {
       f2.send(mensagem)
        });
message.channel.send(`Segunda passada iniciada`)

      ausente.forEach(f3 => {
  f3.send(mensagem)
        });
message.channel.send(`Terceira passada iniciada`)
  
message.channel.send(`Mensagem enviada com sucesso para ${todos.size} onlines`)
} 