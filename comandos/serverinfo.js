 const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  if (message.author.id == "617111229386850389") return message.reply("você esta na blacklist.");
  if (message.author.id == "1") return message.reply("você esta na blacklist.");
    const url = `${message.guild.iconURL}?size=2048`;
    const urlPara_Embed = url.replace('.jpg', '.png');
    let online = message.guild.members.filter(a => a.presence.status == "online").size;
    let ocupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
    let ausente = message.guild.members.filter(a => a.presence.status == "idle").size;
    let offline = message.guild.members.filter(a => a.presence.status == "offline").size;
    let bott = message.guild.members.filter(a => a.user.bot).size;
    let totalmembros = message.guild.memberCount;
    let canaistexto = message.guild.channels.filter(a => a.type === "text").size;
    let canaisvoz = message.guild.channels.filter(a => a.type === "voice").size;
    const moment = require('moment')
    moment.locale("pt-BR")
    var embed = new Discord.RichEmbed()
        .setColor("PINK")
        .setDescription(`▪**Servidor \`\`\ ${message.guild.name}\`\`\:** \n\n  <a:sapo:617162383374286851> **__DONO do servidor:__**\n<@${message.guild.owner.id}> \n\n    <a:estrelafofa:629805994221895735> **__Atividade dos membros:__**\n  <:595713996468781112:617530201693224997> **Membros:** **\`\`${totalmembros}\`\`\ ** \n  <a:online:629805115615870989> **Onlines:** **\`\`${online}\`\`\ ** <a:rodinha:617168251948105728> **Ausentes:** **\`\`${ausente}\`\`\ ** \n <a:dnd2:618663009845510148> **Ocupados:** **\`\`${ocupado}\`\`\ ** <a:612359594148233217:618663009971077140> **Offlines:** **\`\`${offline}\`\`\ ** \n <:274789236421427200:617530201743818764> **Bots:** **\`\`${bott}\`\`\ ** \n \n <a:amorr:617161182398251008> **__Canais:__** \n **<a:txt:629802634156572736>Total de canais:** **\`\`${canaistexto + canaisvoz}\`\` **\n <:texto:617555131805728768> **Texto:** **\`\`${canaistexto}\`\` ** 🔊**Voz:** **\`\`${canaisvoz}\`\`** \n\n  **<a:estrelona:629803437273513994> __Cargos:__** \n **<a:estrelonaroxa:629804540320808980> Total de cargos:** **\`\`${message.guild.roles.size}\`\`**  \n\n `)
        .setThumbnail(urlPara_Embed)
        .setFooter(`${message.author.tag}`, (message.author.avatarURL))
    message.channel.send(embed).then(msg => {msg.delete(9000)})


}
module.exports.help = {
    name: "serverinfo"
}
