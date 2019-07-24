const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR") && message.author.id !== '595103385150160897' && message.author.id !== '290363866586546176') return message.reply("<:7775:593645935280783431> | você não possui permissão para usar esse comando.")
    var separador = message.content.split("|")
    const Embed = new Discord.RichEmbed()
    .setTitle(separador[1])
    .setColor("BLACK")
    .setDescription(separador[2])
    .setImage(separador[3])
    message.channel.send(Embed)
    /* try{

    messsage.channel.send(Embed);

}catch(err){

    return message.reply("**Ocorreu um erro. Por favor, tente novamente.**")

    }
    */
   const membros = message.guild.memberCount;
   try{
    message.guild.members.map(membro => {
         membro.send(Embed).catch(() => {});
    })
}catch(err){

    return message.reply("**:chegay: *\`Ocorreu um erro ao enviar a mensagem. Tente novamente.\`\*")

   }
    message.channel.send("*\`Mensagem enviada para\`\* ***`" + membros + "`*** *\`membros\`\*")
    message.channel.send("**`Mensagem a ser enviada:`**")
}
module.exports.help = {
name: "avisoembed"
}