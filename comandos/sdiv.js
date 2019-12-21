const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (client, message, args) => {
  if (
  
    message.author.id !== `${config.dono}` &&
    message.author.id !== `${config.dev}`&&
    message.author.id !== `${config.dev2}`)
  
    return message.reply(
      ":x: | você não possui permissão para usar esse comando."
    );

  let on = client.users.filter(m => m.presence.status === "online");
  let npertube = client.users.filter(m => m.presence.status === "dnd");
  let ausente = client.users.filter(m => m.presence.status === "idle");
  let todos = client.users.filter(
    m =>
      m.presence.status === "idle" &&
      m.presence.status === "dnd" &&
      m.presence.status === "online"
  );
  let off = client.users.filter(m => m.presence.status === "offline");
  let servidores = client.guilds.size;

  let mensagem = args.join(" ");

  message.channel.send(
    `_**\`Mensagem sendo enviada para:\`**_\n\n <a:online:638094934905192449> **${on.size}**\n <a:dnd:630190774105014293> **${npertube.size}**\n <a:idle:638095897221398542> **${ausente.size}**\n\n <a:offline:638095368206417921> __**${off.size}**__ **serão ignorados em um total de** __**${servidores}**__ **servidores.**`
  );

  npertube.forEach(f1 => {
    f1.send(mensagem);
  });

  on.forEach(f2 => {
    f2.send(mensagem);
  });

  ausente.forEach(f3 => {
    f3.send(mensagem);
  });

  message.channel.forEach(f4 => {
    message.channel.send(
      `_**\`A mensagem foi divulgada para:\`**_\n\n <a:verdin:650042065849155595> **${on.size}**\n <a:vermelhin:650043316691402772> **${npertube.size}**\n <a:amarelin:650043873967603762> **${ausente.size}**\n\n <:cinzin:650044958564155403> __**${off.size}**__ **foram ignorados em um total de** __**${servidores}**__ **servidores.**`
    );
  });
};
