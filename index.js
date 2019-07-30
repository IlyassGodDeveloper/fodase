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

client.on("ready", () => {
    console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`); 
    client.user.setPresence({ game: { name: config.Status, type: 'STREAMING', url: 'https://www.twitch.tv/fumante1533'}});
  });

let status = [
  { name: `Sexo pra você`, type: 'STREAMING', url: 'https://www.twitch.tv/fumante1533'},
  { name: `Prazer na cama`, type: 'STREAMING', url: 'https://www.twitch.tv/fumante1533'},
  { name: `Meu prefixo é: g!`, type: 'STREAMING', url: 'https://www.twitch.tv/fumante1533'},
  { name: `Toda molhadinha pra você`, type: 'STREAMING', url: 'https://www.twitch.tv/fumante1533'},
  { name: `Amor para você`, type: 'STREAMING', url: 'https://www.twitch.tv/fumante1533'},
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