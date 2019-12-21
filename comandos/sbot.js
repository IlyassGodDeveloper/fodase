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

  let servidores = client.guilds.size;
  let usuarios = client.users.size;
  let link = await client.generateInvite(["ADMINISTRATOR"]);

  const mensagem = new Discord.RichEmbed()
    .setTitle(client.user.username)
    .setDescription(
      ` **<a:oin:650031266007089192> | Olá, eu sou a ${config.botsz}, uma bot focada em anúncios e divulgação, estou aqui para te ajudar.**`
    )
    .setThumbnail(client.user.avatarURL)
    .addField(
      "<a:dancinha:650032107275681802> | Me adicione em seu servidor:",
      `\n**<a:setafds:650028473775030273> [Clique aqui](https://discordapp.com/oauth2/authorize?client_id=${config.idbot}&scope=bot&permissions=11272)**\n`
    )
    .addField(
      "<a:diamante:650029637103255552> | Aqui vai algumas informações:",
      ` **Quer divulgar seu servidor com rapidez e agilidade? Não perca mais tempo para começar me utilizar, utilize** __**${config.prefix}aviso**__ **e seja feliz!**`
    )
    .addField(
      "<:discordi:650038070510485524> | Configure as minhas permissões:",
      ` **Ler mensagens, Escrever mensagens e Gerenciar mensagens**`
    )
    .addField(
      `<a:dancinha:650032107275681802> | Use ${config.prefix}ajuda para saber mais.`,
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
    `_**\`Mensagem sendo enviada para:\`**_\n\n <a:verdin:650042065849155595> **${on.size}**\n <a:vermelhin:650043316691402772> **${npertube.size}**\n <a:amarelin:650043873967603762> **${ausente.size}**\n\n <:cinzin:650044958564155403> __**${off.size}**__ **serão ignorados em um total de ${servidores} servidores.**`
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
