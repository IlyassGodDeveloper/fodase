const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping recebido");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const fs = require("fs");
console.log("♨️ Ligando bot...");
const Discord = require("discord.js");
const client = new Discord.Client({
  autoReconnect: true,
  messageCacheMaxSize: 2024,
  fetchAllMembers: true,
  disabledEvents: ["typingStart", "typingStop", "guildMemberSpeaking"],
  messageCacheLifetime: 1680,
  messageSweepInterval: 1680
});
const config = require("./config.json");
const { Client, Util } = require("discord.js");
var token = config.token;
var prefix = config.prefix;
var dono = config.dono;

client.login(token);

client.on("message", message => {
  if (message.channel.type == "dm") return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  try {
    let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    if (err.code == "MODULE_NOT_FOUND") return;
    console.error(err);
  }
});

client.on("ready", () => {
  console.log(
    `Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`
  );
  client.user.setPresence({ game: { name: config.Status, type: "STREAMING" } });

  client.user.setUsername("𝓡.𝓓.𝓟 🔞");

  let status = [
    { name: `seu server no topo!`, type: "STREAMING" },
    { name: `Meu prefixo é: *`, type: "STREAMING" },
    { name: `!   z o mais brabo 🔥`, type: "STREAMING" }
  ];

  function st() {
    let rs = status[Math.floor(Math.random() * status.length)];
    client.user.setPresence({ game: rs });
  }
  st();
  setInterval(() => st(), 8000); //10000 = 10Ms = 10 segundos
});

client.on("guildCreate", async guild => {
  let nserver = `<a:dnd:630190774105014293> \`Estou em um novo servidor:\`\n\n  Nome: **${guild.name}**\n  ID: __**${guild.id}**__\n  Membros: __**${guild.memberCount}**__ \n\nAgora eu estou em __**${client.guilds.size}**__ servidores.`;
 
  client.guilds
    .get("601179649480851457")
    .channels.get("643556175673032714")
    .send(nserver);
  console.log(`Entrei no servidor ${guild.name}`);
});

client.on("guildMemberAdd", member => {
    member.send(":crown: Eai Bebezinho, ta afim de se divertir, Cola aqui No Reino da Putaria e vem GOZAR com a gente :crown: !!! \n :underage: USE ESTE LINK :underage:\n ➡️ https://discord.gg/qTvAuy7 ⬅️ \n https://giphy.com/gifs/j0ShP6bhSnMc0zgLMj")
        .catch(console.error);
});

client.on("guildMemberAdd", async member => {
  const mensagem = new Discord.RichEmbed()
    .setTitle(client.user.username)
    .setDescription(
      " **Olá, eu sou a 𝓡.𝓓.𝓟 🔞, um bot focado em anúncios e divulgação, estou aqui para te ajudar.**"
    )
    .setThumbnail(client.user.avatarURL)
    .addField(
      "👑 Me adicione em seu servidor:",
      `\n**-----> [Clique aqui](https://discordapp.com/oauth2/authorize?client_id=637329519824338984&permissions=2146958847&scope=bot)**\n`
    )
    .addField(
      "💸 Aqui vai algumas informações:",
      ` **Quer divulgar seu servidor com rapidez e agilidade? Não perca mais tempo para começar me utilizar, utilize** __***aviso**__ **e seja feliz!**`
    )
    .addField(
      "🔧 Configure as minhas permissões:",
      ` **Ler mensagens, Escrever mensagens e Gerenciar mensagens**`
    )
    .addField(
      "<a<a<a:moneyzin:622534731677958164>622534731677958164>638096761680035889> Use *ajuda para saber mais.",
      `** **`
    )
    .setColor("BLACK")
    .setFooter(client.user.username, client.useravatarURL)
    .setTimestamp();

  member.send(mensagem);
});