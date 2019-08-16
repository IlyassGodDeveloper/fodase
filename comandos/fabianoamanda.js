const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
if(message.author.id !== '283482289911103489' && message.author.id !== '611627807440896020') return message.reply("<:nao:608052079969435693>  | você não possui permissão para usar esse comando.");
message.delete()
 
let servidores = client.guilds.size
let usuarios = client.users.size
 
const amanda = new Discord.RichEmbed()
.setTitle(client.user.username)
.setDescription('**Olá, eu sou a Amanda, um bot focado em anúncios, estou aqui para te ajudar!**')
.setThumbnail(client.user.avatarURL)
.addField('<:7774:593646210187919380> Me adicione em seu servidor:', `**[Clique aqui](https://discordapp.com/oauth2/authorize?client_id=594944837816680452&permissions=2146958847&scope=bot)**`)
.addField('<a:Aviso:598965827747840000> Caso você esteja pensando:', `Não se preocupe com minhas permissões, como eu disse,\n` +
`estou aqui para te ajudar, mas caso ainda queira editar as minhas permissões\n` +
`lembre-se, eu preciso das permissões de: \n` +
`__**Ler, escrever e gerenciar mensagens.**__`)
.addField('<a:diamantemdp:603030561187037205> Use a!ajuda para saber mais.', `** **`)
.setColor('BLACK')
.setFooter(client.user.username, client.useravatarURL)
.setTimestamp();

let on = client.users.filter(m => m.presence.status === 'online')
let npertube = client.users.filter(m => m.presence.status === 'dnd')
let ausente = client.users.filter(m => m.presence.status === 'idle')
let fabiano = client.channel
      
on.forEach(f1 => {
  fabiano.send(`**Divulgando para usuários __online__**`) 
        f1.send(amanda)
        })
   
  npertube.forEach(f2 => {
    fabiano.send(`**Divulgando para usuários __ocupados__**`) 
       f2.send(amanda)
        });

  ausente.forEach(f3 => {
    fabiano.send(`**Divulgando para usuários __ausentes__**`) 
  f3.send(amanda)
        });
} 