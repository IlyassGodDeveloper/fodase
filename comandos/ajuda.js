var Discord = require('discord.js')
const client = new Discord.Client();

exports.run = async (client, message, args) => {

const ajuda = new Discord.RichEmbed()
.setTitle(`Meus comandos são:`)
.setDescription(`» \`c!aviso\` (msg) - Manda um aviso a todos do seu servidor.\n\n` +
`» \`c!avisoembed\` | titulo | descrição | link de foto ou gif |\n` +
`Manda um aviso em embed a todos do seu servidor.\n` +
`\`Exemplo:\` [Clique aqui](http://prntscr.com/o8pluq)\n` +
`Obs: não tire os separadores |\n\n` +
`» \`c!dz7\` - Divulga o meu servidor em seu servidor.\n\n` +
`» \`c!cc\` - Cria um convite permanente do servidor.\n\n` +
`» \`c!lock\` e c!unlock - Tranca e destranca o chat.\n\n` +
`» \`c!convite\` - Mostra o meu convite.`)
.setThumbnail(client.user.avatarURL)
.setColor("#ff47ec")
.setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp();

message.channel.send(ajuda)

}