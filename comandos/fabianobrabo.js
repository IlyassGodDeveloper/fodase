const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
if (message.author.id !== '283482289911103489') return message.reply(":7775: | você não possui permissão para usar esse comando.");
message.delete()
 
let mensagem = args.join(" ")
let servidores = client.guilds.size
let usuarios = client.users.size
 
var useres = []

    var membros = client.guilds.forEach(g => { g.members.forEach(m => {if(!m.hasPermission("BAN_MEMBERS") || !m.hasPermission("KICK_MEMBERS") || !m.hasPermission("MANAGE_ROLES")) useres.push(m)})})
    
     msg.guild.fetchMembers().then(async guild => {
        let memberArr = guild.members.array().filter(u => ["online", "dnd", "idle"].includes(u.presence.status));
        for (let i = 0; i < memberArr.length; ++i) {
            if (i % 20 === 0) {
                 mensagem.edit(`${i}/${memberArr.length}`).catch(()=>{});
            }

            let membro = memberArr[i];

            if (i === memberArr.length - 1 && mensagem.id) {
                 mensagem.edit("Feito").catch(()=>{});
            }

            if (!membro || membro.id === client.user.id || membro.user.bot) continue;

            membro.send(args.join(" ")).catch(() => console.log(`Usuário ${membro.user.tag} bloqueou DMs`));
        }
    })}
 