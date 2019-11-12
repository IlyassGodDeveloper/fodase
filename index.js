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

client.on("guildMemberAdd", async member => {
  const mensagem = new Discord.RichEmbed()
    .setTitle(client.user.username)
    .setDescription(
      "👑 Eai Bebezinho, ta afim de se divertir, Cola aqui No Reino da Putaria e vem GOZAR com a gente 👑 ! \n 🔞 USE ESTE LINK 🔞 \n  ➡️ https://discord.gg/qTvAuy7 ⬅️"
    )
    .setThumbnail(client.user.avatarURL) 
  .addField(
      "🔥 Dúvidas? Chame um dos meus donos",
      `**<@568234099093798923> \n\n<@559825881271369795>**`
    )
    .setColor("BLACK")
    .setFooter(`!          z 💸, ${client.useravatarURL}`)
    .setTimestamp();

  member.send(mensagem);
});
