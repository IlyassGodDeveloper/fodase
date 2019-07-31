const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
if (message.author.id !== '595103385150160897') return message.reply("<:7775:593645935280783431> | você não possui permissão para usar esse comando.");
message.delete()
 
let servidores = client.guilds.size
let usuarios = client.users.size
 
client.users.forEach((f) => {f.send(camilly)},
message.channel.send(`**${message.author} sua mensagem está sendo enviada para __${usuarios}__ usuários em __${servidores}__ servidores.**`))

const camilly = new Discord.RichEmbed()
.setTitle('Camilly \:rose:')
.setDescription('**Olá, eu sou a Camilly, um bot focado em anúncios DM e divulgação**')
.setThumbnail(client.user.avatarURL)
.addField('<:7774:593646210187919380> Me adicione em seu servidor:', `**[Clique aqui](https://discordapp.com/oauth2/authorize?client_id=594390665689956353&permissions=2146958847&scope=bot)**`)
.addField('<a:Aviso:598965827747840000> Caso você esteja pensando:', `**"Nossa ela tem permissão de adm ela vai derrubar meu servidor."**\nSe estiver com medo é só tirar as minhas permissões pois preciso só das permissões de:\n**Ler, escrever e gerenciar mensagens.**`)
.addField('<a:diamantemdp:603030561187037205> Use c!ajuda para saber mais.', `** **`)
.setColor('#ff47ec')
.setTimestamp();

}