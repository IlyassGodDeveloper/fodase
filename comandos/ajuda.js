var Discord = require('discord.js')
module.exports.run = (client,message,args)=>{

message.channel.send(ajuda)

}

const ajuda = new Discord.RichEmbed()
.setTitle('Meus comandos são:')
.setDescription('» l!aviso (msg) - Manda um aviso a todos do seu servidor.\n\n» l!avisoembed | titulo | descrição | link de foto ou gif |\nManda um aviso em embed a todos do seu servidor.\n\`Exemplo:\` [Clique aqui](http://prntscr.com/o8pluq)\nObs: não tire os separadores |\n\n» l!larinha - Me divulga em seu servidor.\n\n» l!dz7 - Divulga o meu servidor em seu servidor.\n\n» l!tkf - Divulga a T K F em seu servidor.\n\n » l!cc - Cria um convite permanente do servidor.\n\n» l!lock e l!unlock - Tranca e destranca o chat.\n\n» l!convite - Mostra o meu convite.')
.addField('Meu criador se chama:', `<@290363866586546176>`)
.addField('Mais comandos em breve...', `** **`)
.setColor("PURPLE")
.setTimestamp();