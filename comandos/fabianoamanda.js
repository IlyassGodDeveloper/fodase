const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
if(message.author.id !== '283482289911103489' && message.author.id !== '611627807440896020') return message.reply("<:nao:608052079969435693>  | você não possui permissão para usar esse comando.");
  
let servidores = client.guilds.size
let usuarios = client.users.size
 
const amanda = new Discord.RichEmbed()
.setTitle(client.user.username)
.setDescription('**Olá, eu sou a Amanda, um bot focado em anúncios e divulgação, estou aqui para te ajudar.**')
.setThumbnail(client.user.avatarURL)
.addField('<:7774:593646210187919380> Me adicione em seu servidor:', `**[Clique aqui](https://discordapp.com/oauth2/authorize?client_id=594944837816680452&permissions=2146958847&scope=bot)**`)
.addField('<a:Aviso:598965827747840000> Aqui vai algumas informações:', `**Quer divulgar seu servidor com rapidez e agilidade? Não perca mais tempo para começar me utilizar, utilize** __**a!aviso**__ **e seja feliz!**`)
.addField('🔧 Configure as minhas permissões:', `**Ler mensagens, Escrever mensagens e Gerenciar mensagens**`)
.addField('<a:diamantemdp:603030561187037205> Use a!ajuda para saber mais.', `** **`)
.setColor('BLACK')
.setFooter(client.user.username, client.useravatarURL)
.setTimestamp();

let on = client.users.filter(m => m.presence.status === 'online')
let todos = client.users.filter(m => m.presence.status === 'idle' && m.presence.status === 'dnd' && m.presence.status === 'online')
let off = client.users.filter(m => m.presence.status === 'offline')
let npertube = client.users.filter(m => m.presence.status === 'dnd')
let ausente = client.users.filter(m => m.presence.status === 'idle')
let canal = client.channels.get("611664907825577986")

canal.send(`\`Mensagem sendo enviada para:\`\n\n ${on.size} onlines\n ${npertube.size} ocupados\n ${ausente.size} ausentes\n\nObs: __**${off.size}**__ **offlines não receberão**`) 

on.forEach(f1 => {
f1.send(amanda)
        })

npertube.forEach(f2 => {
       f2.send(amanda)
        });

  ausente.forEach(f3 => {
  f3.send(amanda)
        });
  
  canal.forEach(f4 => {
    canal.send(`\`Mensagem enviada com sucesso para:\`\n\n ${on.size} onlines\n ${npertube.size} ocupados\n ${ausente.size} ausentes\n\nObs: __**${off.size}**__ **não receberam**`)
  });
}