const http = require('http');
const express = require('express');
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
console.log("♨️ Ligando bot...")
const Discord = require('discord.js');
const client = new Discord.Client({
    autoReconnect: true,
    messageCacheMaxSize: 2024,
    fetchAllMembers: true,
    disabledEvents: ['typingStart', 'typingStop', 'guildMemberSpeaking'],
    messageCacheLifetime: 1680,
    messageSweepInterval: 1680
});
const config = require("./config.json")
const { Client, Util } = require('discord.js');
var token = config.token
var prefix = config.prefix
var dono = config.dono

client.login(token)

client.on("message", (message) => {

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
    
})

client.on('guildCreate', guild => {
  const moment = require('moment')
  moment.locale('pt-BR')
    let canal = client.channels.get('597361712517218304')
    let icon = guild.iconURL || "https://loritta.website/assets/img/unknown.png"
    let embedentrada = new Discord.RichEmbed()
    .setAuthor(`${client.user.username}`, client.user.avatarURL)
    .setThumbnail(icon)
    .setTitle(`**Entrei em um servidor novo** \`${guild.name}\``, true)
    .addField(`**Nome do servidor**`, `\`${guild.name}\``, true)
    .addField(`**Id do servidor**`, `\`${guild.id}\``, true)
    .addField('**Membros:**', `\`${guild.memberCount}\``, true)
    .addField('**Região do servidor:**', `\`${guild.region}\``, true)
    .addField('**Dono**', `${guild.owner}`, true)
    .addField('**Id do dono**', `\`${guild.ownerID}\``, true)
    .addField('**Criado em**', `\`${moment.utc(guild.createdAt).format('lll')}\``, true)
    .setColor('RANDOM')

    canal.send(embedentrada)
});

client.on('guildDelete', guild => {
    let canal = client.channels.get('597361717214969868')
    let icon = guild.iconURL || "https://loritta.website/assets/img/unknown.png"
    let embedsaida = new Discord.RichEmbed()
    .setAuthor(`${client.user.username}`, client.user.avatarURL)
    .setThumbnail(icon)
    .setTitle(`**Acabei de sair de um servidor <:7775:593645935280783431>** \`${guild.name}\``, true)
    .addField(`**Nome do servidor**`, `\`${guild.name}\``, true)
    .addField(`**Id do servidor**`, `\`${guild.id}\``, true)
    .addField('**Membros:**', `\`${guild.memberCount}\``, true)
    .addField('**Região do servidor:**', `\`${guild.region}\``, true)
    .addField('**Dono**', `${guild.owner}`, true)
    .addField('**Id do dono**', `\`${guild.ownerID}\``, true)
    .setColor('RANDOM')

    canal.send(embedsaida)
});

    client.user.setStatus('dnd')

client.on("ready", () => {
    console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`); 
    client.user.setPresence({ game: { name: config.Status, type: 'STREAMING', url: 'https://www.twitch.tv/fumante1533'}});
  });

let status = [
  { name: `Sexo pra você`, type: 'STREAMING', url: 'https://www.twitch.tv/fumante1533'},
  { name: `Prazer na cama`, type: 'STREAMING', url: 'https://www.twitch.tv/fumante1533'},
  { name: `Aids pro barry`, type: 'STREAMING', url: 'https://www.twitch.tv/fumante1533'},
  { name: `Toda molhadinha pra você`, type: 'STREAMING', url: 'https://www.twitch.tv/fumante1533'},
  { name: `Frogg e barry meus cafetões`, type: 'STREAMING', url: 'https://www.twitch.tv/fumante1533'},
  { name: `Meu criador: Fumante`, type: 'STREAMING', url: 'https://www.twitch.tv/fumante1533'}
]



setInterval(function() {
let randomStatus = status[Math.floor(Math.random() * status.length)];
client.user.setPresence({ game: randomStatus });
}, 7000)

   
fs.readdir("./eventos/", (err, files) => {
    if (err) return console.error("[ERRO] " + err);
    files.forEach(file => {
        let eventFunction = require(`./eventos/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
})
