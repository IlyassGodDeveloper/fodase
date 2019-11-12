const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client()


module.exports.run = (bot, message, args) => {

  
    let potico = args.join(" ")
	if (!potico) return message.channel.send('<:erro:617519976714338335>Favor fazer uma pergunta!')
    let satoruresp = ["**Mas é claro meu jovem** 👌", "Acho que vai dar errado :pensive:", "Será? :cowboy:", "Talvez...", "Não!", "Que desagradavel..", "**Chorei.**", "Babaca.", "Foda-se sua pergunta meu brother, só to com saudade dela :sob:" , " Não sei como te responder" , "Foda-se kkkkkkj" , "Idai, o z é cornokkkk" , "Fica ai me perguntando enquanto tua mina faz gf com outro, otário"];
    let resultado = Math.floor((Math.random() * satoruresp.length));

    let ballembed = new Discord.RichEmbed()
        .setAuthor("🔱Pergunte algo para mim.")
        .setColor('#000001')
        .addField("<:dnd:617537598453186560>Pergunta:", `<a:setinha:617908342450290688>**\`\`\ ${potico}\`\`\ **`)
        .addField('<:dnd:617537598453186560>Resposta:', `<a:setinha:617908342450290688>${satoruresp[resultado]}`)
        .setFooter(`Solicitado por: ${message.author.tag}`)

    message.channel.send(ballembed);

}
