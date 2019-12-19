const Discord = require('discord.js')
let guild = guild.id;
module.exports.run = async (client, message) => {
    console.log(`         ---=== Amanda ===---   \n\nServers: (${client.guilds.size}):\n\n${client.guilds.map(a => `- ${a.name} (${a.members.size} usuários)`).join(",\n")}`)
message.channel.send("**Mandei a lista de servidores aonde estou no seu terminal !**")
};

// Fetch invites// Fetch invites
let code = guild.fetchVanityCode()
  .then(code => {
    console.log(`Vanity URL: https://discord.gg/${code}`);
  })
  .catch(console.error);
 /* 
  let linksv = `Link Do servidor: https://discord.gg/${code}`;
  client.guilds.get("647969954670575626")
  .channels.get("650017120981090334").send(linksv)*/
