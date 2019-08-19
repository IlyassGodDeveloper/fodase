var Discord = require('discord.js')
const client = new Discord.Client();

exports.run = async (client, message, args) => {

const ajuda = new Discord.RichEmbed()
.setTitle(`Meus comandos são:`)
.setDescription(`» \`m!aviso\` (msg) - Manda um aviso a todos do seu servidor.\n\n` +
`» \`m!avisoembed\` | titulo | descrição | link de foto ou gif |\n` +
`Manda um aviso em embed a todos do seu servidor.\n` +
`\`Exemplo:\` [Clique aqui](http://prntscr.com/o8pluq)\n` +
`Obs: não tire os separadores |\n\n` +
`» \`m!cc\` - Cria um convite permanente do servidor.\n\n` +
`» \`m!lock\` e \`m!unlock\` - Tranca e destranca o chat.\n\n` +
`» \`m!ping\` - Mostra o ping do bot.\n\n` +
`» \`m!convite\` - Mostra o meu convite.`)
.setThumbnail(client.user.avatarURL)
.setColor("BLACK")
.setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp();

message.channel.send(ajuda)

}