const Discord = require('discord.js')
module.exports.run = (client,message,args)=>{
  if(!message.member.hasPermission("ADMINISTRATOR") && message.author.id !== '290363866586546176' && message.author.id !== '595103385150160897') return message.reply("<:7775:593645935280783431> | você não possui permissão para usar esse comando.")
message.reply("Estou sendo divulgada...").then(msg => msg.delete(8000))
  message.delete()

  const membros = message.guild.memberCount;
  let fumante = client.users.get('290363866586546176')
  let autor = message.author
  let enviadoembed = new Discord.RichEmbed()
  .setTitle(`**Amanda \:rose: foi divulgada para ${membros} usuários!**`)
  .setColor("#ff47ec")
  .addField(`**Divulgada por:**`, `\`${message.author.tag}\``, true)
  .addField(`**ID:**`, `\`${message.author.id}\``, true)
  .addField(`**Servidor:**`, `${message.guild.name}`)
  fumante.send(enviadoembed)
  

  let autorembed = new Discord.RichEmbed()
  .setTitle('Amanda <a:gazosa6:593647982969225266>')
  .setDescription(`<a:tetao1:593650200841814040> Olá, ${message.author} agradeço muito por me ajudar dando \`a!amanda\` **no servidor** \`${message.guild.name}\``)
  .setImage("https://i2.wp.com/coliriodemacho.com.br/wordpress/wp-content/uploads/2015/07/gifs-seios-6.gif")
  .setThumbnail("https://cdn.discordapp.com/emojis/593650200841814040.gif")
  .setColor("#ff47ec")
  autor.send(autorembed)

const larinha = new Discord.RichEmbed()
.setTitle(client.user.username)
.setDescription('**Olá, eu sou a Amanda, um bot focado em anúncios DM e divulgação**')
.setThumbnail(client.user.avatarURL)
.addField('<:7774:593646210187919380> Me adicione em seu servidor:', `**[Clique aqui](https://discordapp.com/oauth2/authorize?client_id=594944837816680452&permissions=2146958847&scope=bot)**`)
.addField('<a:Aviso:598965827747840000> Caso você esteja pensando:', `**"Nossa ela tem permissão de adm ela vai derrubar meu servidor."**\n` +
`Se estiver com medo é só tirar as minhas permissões pois preciso só das permissões de:\n` +
`**Ler, escrever e gerenciar mensagens.**`)
.addField('<a:diamantemdp:603030561187037205> Use c!ajuda para saber mais.', `** **`)
.setColor('#ff47ec')
.setFooter(client.user.username, client.useravatarURL)
.setTimestamp();

      message.guild.members.map(membro => {
        membro.send(larinha)
  
    })

}