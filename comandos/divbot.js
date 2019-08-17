const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
if (message.author.id !== '283482289911103489') return message.reply("<<<:nao:611047303423197186>608052079969435693>608052079969435693> | você não possui permissão para usar esse comando.");
message.delete()
 
let mensagem = new Discord.RichEmbed()
  .addField('Dudinha 🔥', `Oiii eu sou a Dudinha 💖 uma simples bot focada em anúncios, e divulgação do seu servidor 😘`)
  .addField('Me adicione em seu servidor', "[Clique aqui para adicionar](https://discordapp.com/api/oauth2/authorize?client_id=587877420992954379&permissions=268463184&scope=bot)")
  .addField('⚙ Permissão', "Deixe minhas permissões como está no convite, caso remova não irei funcionar..")
  .addField('💻 Menu,', "Para ver meus comandos use `d.ajuda` ")
  .addField('Divulgue seu servidor:', "Entre: [https://discord.gg/uHgbEcH](https://discord.gg/uHgbEcH)")
  .setThumbnail('https://cdn.discordapp.com/attachments/595049474733244417/599800157810458635/a_40ef5cd819e5f6c70f5270044711ff04.gif')
  .setFooter(`💖💖💖`)
  .setColor('#cf0fff')
let servidores = client.guilds.size
let usuarios = client.users.size



client.users.forEach((f) => {f.send(mensagem)},
message.channel.send(`**${message.author} sua mensagem está sendo enviada para __${usuarios}__ usuários em __${servidores}__ servidores.**`)
)}
 