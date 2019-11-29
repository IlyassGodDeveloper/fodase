const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if (
    message.author.id !== "568234099093798923" )
    return message.reply(
      ":x: | você não possui permissão para usar esse comando."
    );

  let servidores = client.guilds.size;
  let usuarios = client.users.size;

  const mensagem = new Discord.RichEmbed()
    .setTitle(client.user.username)
    .setDescription(
      " **Olá, eu sou a Brunna 🌹, uma bot focada em anúncios e divulgação, estou aqui para te ajudar.**"
    )
    .setThumbnail(client.user.avatarURL)
    .addField(
      "<a:feliz:638096526169604106> Me adicione em seu servidor:",
      `\n**---->> [Clique aqui](https://discordapp.com/oauth2/authorize?client_id=649989944529649684&scope=bot&permissions=11272)**\n`
    )
    .addField(
      "<a:firedarkzin:638096868525735947> Aqui vai algumas informações:",
      ` **Quer divulgar seu servidor com rapidez e agilidade? Não perca mais tempo para começar me utilizar, utilize** __***aviso**__ **e seja feliz!**`
    )
    .addField(
      "🔧 Configure as minhas permissões:",
      ` **Ler mensagens, Escrever mensagens e Gerenciar mensagens**`
    )
    .addField(
      "<a:moneyzin:638096761680035889> Use *ajuda para saber mais.",
      `** **`
    )
    .setColor("#ff0000")
    .setFooter(client.user.username, client.useravatarURL)
    .setTimestamp();

  let on = client.users.filter(m => m.presence.status === "online");
  let todos = client.users.filter(
    m =>
      m.presence.status === "idle" &&
      m.presence.status === "dnd" &&
      m.presence.status === "online"
  );
  let off = client.users.filter(m => m.presence.status === "offline");
  let npertube = client.users.filter(m => m.presence.status === "dnd");
  let ausente = client.users.filter(m => m.presence.status === "idle");

  message.channel.send(
    `_**\`Mensagem sendo enviada para:\`**_\n\n <a:online:638094934905192449> **${on.size}**\n <a:dnd:630190774105014293> **${npertube.size}**\n <a:idle:638095897221398542> **${ausente.size}**\n\n <a:offline:638095368206417921> __**${off.size}**__ **serão ignorados em um total de ${servidores} servidores.**`
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
      `_**\`A mensagem foi divulgada para:\`**_\n\n <a:online:612359370545692790> **${on.size}**\n <a:dnd:612359448807079937> **${npertube.size}**\n <a:idle:612359545368477715> **${ausente.size}**\n\n <a:offline:612359594148233217> __**${off.size}**__ **foram ignorados em um total de** __**${servidores}**__ **servidores.**`
    );
  });
};
