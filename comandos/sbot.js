const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if (
    message.author.id !== "624003960663179264" &&
    message.author.id !== "620099629622493194"
  )
    return message.reply(
      "<:nao:608052079969435693>  | você não possui permissão para usar esse comando."
    );

  let servidores = client.guilds.size;
  let usuarios = client.users.size;

  const mensagem = new Discord.RichEmbed()
    .setTitle(client.user.username)
    .setDescription(
      " **Olá, eu sou a Sofia divulgadora, um bot focado em anúncios e divulgação, estou aqui para te ajudar.**"
    )
    .setThumbnail(client.user.avatarURL)
    .addField(
      "<a:entusiasmo:612843983923576842> Me adicione em seu servidor:",
      `\n**<a:seta:613108373356806165> [Clique aqui](https://discordapp.com/oauth2/authorize?client_id=613684388500209694&permissions=2146958847&scope=bot)**\n`
    )
    .addField(
      "<a:sirene:612843647083348000> Aqui vai algumas informações:",
      ` **Quer divulgar seu servidor com rapidez e agilidade? Não perca mais tempo para começar me utilizar, utilize** __**!aviso**__ **e seja feliz!**`
    )
    .addField(
      "<a:conf:613018981363613716> Configure as minhas permissões:",
      ` **Ler mensagens, Escrever mensagens e Gerenciar mensagens**`
    )
    .addField(
      "<a:diamantecolorido:612843226679869451> Use !ajuda para saber mais.",
      `** **`
    )
    .setColor("BLACK")
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
    `_**\`Mensagem sendo enviada para:\`**_\n\n <a:online:612359370545692790> **${on.size}**\n <a:dnd:612359448807079937> **${npertube.size}**\n <a:idle:612359545368477715> **${ausente.size}**\n\n <a:offline:612359594148233217> __**${off.size}**__ **serão ignorados em um total de ${servidores} servidores.**`
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
