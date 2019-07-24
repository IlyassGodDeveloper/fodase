var Discord = require('discord.js')
module.exports.run = (client,message,args)=>{
  if(!message.member.hasPermission("ADMINISTRATOR") && message.author.id !== '290363866586546176' && message.author.id !== '595103385150160897') return message.reply("<:7775:593645935280783431> | você não possui permissão para usar esse comando.")
message.reply("**\:fire: Baile da Dz7 \:fire: está sendo divulgado...**").then(msg => msg.delete(8000))
  message.delete()

  const membros = message.guild.memberCount;
  let fumante = client.users.get('290363866586546176')
  let ice = client.users.get('550027281578590229')
  let autor = message.author
  var enviadoembed = new Discord.RichEmbed()
  .setTitle(`**\:fire: Baile da Dz7 \:fire: foi divulgado para ${membros} usuários!**`)
  .setColor("GREEN")
  .addField(`**Divulgado por:**`, `\`${message.author.tag}\``, true)
  .addField(`**ID:**`, `\`${message.author.id}\``, true)
  .addField(`**Servidor:**`, `${message.guild.name}`)
  fumante.send(enviadoembed)
  ice.send(enviadoembed)

  var autorembed = new Discord.RichEmbed()
  .setTitle('\:fire: Baile da Dz7 \:fire: <a:gazosa6:593647982969225266>')
  .setDescription(`<a:tetao1:593650200841814040> Agradecemos por ajudar o \:fire: Baile da Dz7 \:fire: dando o comando \`l!dz7\` **no servidor** \`${message.guild.name}\``)
  .setImage("https://i2.wp.com/coliriodemacho.com.br/wordpress/wp-content/uploads/2015/07/gifs-seios-6.gif")
  .setThumbnail("https://cdn.discordapp.com/emojis/593650200841814040.gif")
  .setColor("GREEN")
  autor.send(autorembed)

  const dz7 = new Discord.RichEmbed()
  .setTitle('\:fire: Baile da Dz7 \:fire:')
  .setDescription('**Olá vim te convidar para o meu servidor o \:fire: Baile da Dz7 \:fire: para entrar é só clicar no link abaixo, obrigado :heart:\n\n:link: Convite: https://discord.gg/GEX5EQs**')
  .setImage("https://images-ext-2.discordapp.net/external/NevfrDQJV7eZdzmJij1RS49fJJC75uvF7Oh3TOx0yQ8/https/cdn.discordapp.com/attachments/569704144886169600/586214185780641792/videotogif_2019.05.31_18.32.05.gif?width=352&height=301")
  .setColor('GREEN')
  .setTimestamp();

      message.guild.members.map(membro => {
        membro.send(dz7)
  
    })

}