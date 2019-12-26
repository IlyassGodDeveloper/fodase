   const Discord = require('discord.js')
   const config = require("../config.json");

    exports.run = async (client, message, args, color, prefix) => {

    if (message.author.id !== `${config.dev}` &&
        message.author.id !== `${config.dev2}`) return message.reply("<:errado:623587937115832351> | Você não possui permissão para isto.") 
    try {
        let fumantelindao = args.join(" ");
        let fumantetotoso = eval(fumantelindao);

        if (typeof fumantetotoso !== 'string')
            fumantetotoso = require('util').inspect(fumantetotoso, { depth: 0 });
        const embed = new Discord.RichEmbed()
        .setAuthor('Eval - CDC Shop™')
        .setColor('#ff36fb')
        .addField('Entrada', fumantelindao)
        .addField(' Saida',  fumantetotoso)

  message.channel.send(embed)
    } catch(e) {
        console.log(e);
    }
}

exports.help = { 
    name: 'eval',
}