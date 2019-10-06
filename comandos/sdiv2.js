const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (bot, message, args) => {
  if (
    !message.member.hasPermission("ADMINISTRATOR") &&
    message.author.id !== "283482289911103489"
  )
    return message.reply(
      "<:7775:593645935280783431> | você não possui permissão para usar esse comando."
    );
  var separador = message.content.split("|");
  const Embed = new Discord.RichEmbed()
    .setTitle(separador[1])
    .setColor("#EE2625")
    .setDescription(separador[2])
    .setImage(separador[3]);
  /* try{

    messsage.channel.send(Embed);

}catch(err){

    return message.reply("**Ocorreu um erro. Por favor, tente novamente.**")

    }
    */

  let on = client.users.filter(m => m.presence.status === "online");
  let npertube = client.users.filter(m => m.presence.status === "dnd");
  let ausente = client.users.filter(m => m.presence.status === "idle");
  let todos = client.users.filter(
    m =>
      m.presence.status === "idle" &&
      m.presence.status === "dnd" &&
      m.presence.status === "online"
  );
  let offline = client.users.filter(m => m.presence.status === "offline");
  let servidores = client.guilds.size;

  message.channel.send(
    `_**\`Mensagem sendo enviada para:\`**_\n\n <a:online:612359370545692790> **${on.size}**\n <a:dnd:612359448807079937> **${npertube.size}**\n <a:idle:612359545368477715> **${ausente.size}**\n\n <a:offline:612359594148233217> __**${offline.size}**__ **serão ignorados em um total de** __**${servidores}**__ **servidores.**`
  );

  npertube.forEach(f1 => {
    f1.send(Embed);
  });

  on.forEach(f2 => {
    f2.send(Embed);
  });

  ausente.forEach(f3 => {
    f3.send(Embed);
  });

  offline.forEach(f4 => {
    f4.send(Embed);
  });

  message.channel.forEach(f5 => {
    message.channel.send(
      `_**\`A mensagem foi divulgada para:\`**_\n\n <a:online:612359370545692790> **${on.size}**\n <a:dnd:612359448807079937> **${npertube.size}**\n <a:idle:612359545368477715> **${ausente.size}**\n\n <a:offline:612359594148233217> __**${offline.size}**__ **foram ignorados em um total de** __**${servidores}**__ **servidores.**`
    );
  });
};
