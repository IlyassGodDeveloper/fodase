const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
if(message.author.id !== '283482289911103489' && message.author.id !== '611627807440896020') return message.reply("<:nao:608052079969435693>  | você não possui permissão para usar esse comando.");
message.delete()
 
let servidores = client.guilds.size
let usuarios = client.users.size
 
const amanda = new Discord.RichEmbed()
.setTitle(client.user.username)
.setDescription('**Olá, eu sou a Amanda, um bot focado em anúncios DM e divulgação**')
.setThumbnail(client.user.avatarURL)
.addField('<:7774:593646210187919380> Me adicione em seu servidor:', `**[Clique aqui](https://discordapp.com/oauth2/authorize?client_id=594944837816680452&permissions=2146958847&scope=bot)**`)
.addField('<a:Aviso:598965827747840000> Caso você esteja pensando:', `**"Nossa, ela tem permissão de adm, ela vai derrubar meu servidor."**\n` +
`Se estiver com medo, é só tirar as minhas permissões, pois eu preciso só das permissões de:\n` +
`**Ler, escrever e gerenciar mensagens.**`)
.addField('<a:diamantemdp:603030561187037205> Use a!ajuda para saber mais.', `** **`)
.setColor('BLACK')
.setFooter(client.user.username, client.useravatarURL)
.setTimestamp();

let on = message.guild.members.filter(m => m.presence.status === 'online')
let npertube = message.guild.members.filter(m => m.presence.status === 'dnd')
let ausente = message.guild.members.filter(m => m.presence.status === 'idle')

let fabiano = client.channels.get('611664907825577986')
      
on.guilds.forEach(f1 => {
     fabiano.send('Enviando para onlines.')
        f1.send(amanda)
        });
  
        
  npertube.guilds.forEach(f2 => {
      fabiano.send('Enviando para ocupados.')
       f2.send(amanda)
        });

      ausente.guilds.forEach(f3 => {
        fabiano.send('Enviando para ausentes.')
  f3.send(amanda)
        });
} 