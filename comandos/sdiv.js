const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if (
    message.author.id !== "568234099093798923" &&
    message.author.id !== "559825881271369795"
  )
    return message.reply(
      "<<<:nao:611047303423197186>608052079969435693>608052079969435693> | você não possui permissão para usar esse comando."
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
      `_**\`A mensagem foi divulgada para:\`**_\n\n <a:online:638094934905192449> **${on.size}**\n <a:dnd:630190774105014293> **${npertube.size}**\n <a:idle:638095897221398542> **${ausente.size}**\n\n <a:online:638094934905192449> __**${off.size}**__ **foram ignorados em um total de** __**${servidores}**__ **servidores.**`
    );
  });
};
