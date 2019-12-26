const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../functions.js");

module.exports = {
    name: "ban",
    category: "moderation",
    description: "bans the member",
    usage: "<id | mention>",
    run: async (client, message, args) => {
        const logChannel = message.guild.channels.find(c => c.name === "punishments") || message.channel;

        // No args
        if (!args[0]) {
            return message.reply("<:errado:623587937115832351> | Mencione alguém ou um ID para banir.")
        }

        // No reason
        //if (!args[1]) {
        //    return message.reply("<:errado:623587937115832351> | Insira um motivo para isto.")
        //}

        // No author permissions
        if (message.author.id !== "391622998572007434") {
            return message.reply("<:errado:623587937115832351> | Você não possui permissão para isto.")
        
        }
        // No bot permissions
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
            return message.reply("<:errado:623587937115832351> | Por algum motivo eu não possuo permissão para banir membros.")
        }

        const toBan = message.mentions.members.first() || message.guild.members.get(args[0]);

        // No member found
        if (!toBan) {
            return message.reply("<:errado:623587937115832351> | Não consegui achar este membro, tente novamente.")
        }

        // Can't ban urself
        if (toBan.id === message.author.id) {
            return message.reply("<:errado:623587937115832351> | Você não pode banir sí mesmo.")
        }

        // Check if the user's banable
        if (!toBan.bannable) {
            return message.reply("<:errado:623587937115832351> | Este membro possui um cargo maior que o meu, portanto não posso banir ele.")
        }

        const promptEmbed = new RichEmbed()
            .setColor("GREEN")
            .setAuthor(`⚠️ | Confirme a ação a seguir:`)
            .setDescription(` Deseja realmente banir o usuário ${toBan}?`)
            .setFooter(message.author.tag, message.author.avatarURL)
            .setColor("#FF36FB")
        // Send the message
        await message.channel.send(promptEmbed).then(async msg => {
            // Await the reactions and the reactioncollector
            const emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

            // Verification stuffs
            if (emoji === "✅") {
                msg.delete();
                message.channel.send("<a:CDCOnline:653631564109971476> | Usuário banido com sucesso.").then(msg => {
    msg.delete(6000);
  });

                toBan.ban(args.slice(1).join(" "))
                    .catch(err => {
                        if (err) return message.channel.send(`<:errado:623587937115832351> | Por algum motivo ocorreu um erro, você pode checar ele aqui: ${err}`)
                    });

            } else if (emoji === "❌") {
                msg.delete();

                message.reply(`<:certo:623587917150945320> | Banimento cancelado com sucesso.`).then(msg => {
    msg.delete(6000);
                });
            }
        });
    }
};