const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR") && message.author.id !== '595103385150160897' && message.author.id !== '283482289911103489') return message.reply("<:7775:593645935280783431> | você não possui permissão para usar esse comando.")
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
   
    message.channel.send("*\`Mensagem enviada para\`\* ***`" + membros + "`*** *\`membros\`\*")
    message.channel.send("**`Mensagem a ser enviada:`**")
}
module.exports.help = {
name: "avisoembed"
}