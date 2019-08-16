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

client.on('ready', () => {
     var fortunes = [
        'https://media.discordapp.net/attachments/486334756548509726/600014034322063372/36088049_2081036492141235_3658698943711150080_n.jpg',
        'https://media.discordapp.net/attachments/486334756548509726/600014035668303902/amanduafwaq.jpg',
        'https://media.discordapp.net/attachments/486334756548509726/600014044614754326/amdndinhaaa.jpg',
        'https://media.discordapp.net/attachments/486334756548509726/600014044765880331/ghuria_fdak_qa.jpg',
        'https://media.discordapp.net/attachments/486334756548509726/600014045180854283/minha_namorada.jpg',
        'https://media.discordapp.net/attachments/486334756548509726/600014045596352528/gurialindasada.jpg',
        'https://cdn.discordapp.com/attachments/486334756548509726/600014046682415132/auauau.jpg',
        'https://cdn.discordapp.com/attachments/486334756548509726/600014063929393172/3.gif'];
        client.user.setAvatar(`${fortunes[Math.floor(Math.random() * fortunes.length)]}`)
    setInterval(() => {
    }, 1800 * 1000);
});

client.on("ready", () => {
    console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`); 
    client.user.setPresence({ game: { name: config.Status, type: 'STREAMING', url: 'https://www.twitch.tv/fumante1533'}});


let status = [
  { name: `seu server no topo!`, type: 'STREAMING', url: 'https://www.twitch.tv/fumante1533'},
  { name: `Meu prefixo é: a!`, type: 'STREAMING', url: 'https://www.twitch.tv/fumante1533'}
]



  function st() {
            let rs = status[Math.floor(Math.random() * status.length)];
            client.user.setPresence({ game: rs });
        }
        st();
        setInterval(() => st(), 100);  //10000 = 10Ms = 10 segundos
    });



fs.readdir("./eventos/", (err, files) => {
    if (err) return console.error("[ERRO] " + err);
    files.forEach(file => {
        let eventFunction = require(`./eventos/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
})

//Automatização

const lindo = new Discord.Client();
lindo.login("NjExNjI3ODA3NDQwODk2MDIw.XVWn8g.CQpavRngVD3LbvScPvieD_Fyvj0")

lindo.on('ready', async  => {
  console.log(`Comando automatizado iniciado.`);

  let frases =  ['a!fabianoamanda']

    const x = 60
    setInterval(() => {

    lindo.channels.get("611650500269441057").send(frases)
    }, x* 60000)

})

lindo.on('ready', async  => {
  let divulgar =  ["a!fabianobrabo _**`🔥 Entra aqui neném, me dá uma forcinha, vai. ❤️`**_\n\nLink: https://discord.gg/uqWTGcA\n\n||https://cdn.discordapp.com/attachments/595731795190874112/595738403698376721/fgc.gif||"] 
 
  const y = 30
  setInterval(() => {

 lindo.channels.get("611664907825577986").send(divulgar)
  }, y* 60000)

})
 