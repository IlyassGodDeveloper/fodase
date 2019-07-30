const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  message.delete()
  let guild = client.guilds.get('589671894060498995')
  
    const membro = message.mentions.members.first() || guild.members.get(args[0]);
    const role = guild.roles.find(r => r.name == args.slice(1).join(' '));
    membro.addRole(role)

}
module.exports.config = { 
  name: 'fumantecargo',
  aliases: []
}