const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
if (message.author.id !== '595103385150160897') return message.reply("<:7775:593645935280783431> | você não possui permissão para usar esse comando.");
message.delete()
 
let servidores = client.guilds.size
let usuarios = client.users.size
 
client.users.forEach((f) => {f.send(larinha)},
message.channel.send(`**${message.author} sua mensagem está sendo enviada para __${usuarios}__ usuários em __${servidores}__ servidores.**`)




)}

const larinha = new Discord.RichEmbed()
.setTitle('Larinha \:rose: <a:ricardo:593650614400188446>')
.setDescription('**Olá, eu sou a Larinha, um bot focado em anúncios DM e divulgação**')
.setThumbnail("https://cdn.discordapp.com/avatars/557013415290470421/af0f1090d7500c9efea0ccd0ab217d95.png?size=2048")
.addField('<:7774:593646210187919380> Me adicione em seu servidor:', `**[Clique aqui](https://discordapp.com/oauth2/authorize?client_id=594324696099717122&permissions=2146958847&scope=bot)**`)
.addField('Caso você esteja pensando:', `"Nossa ela tem permissão de adm ela vai derrubar meu servidor."\nSe estiver com medo é só tirar as minhas permissões pois preciso só das permissões de:\nLer e escrever mensagens.`)
.addField('Use l!ajuda para saber mais.', `** **`)
.setColor('#ff47ec')
.setTimestamp();