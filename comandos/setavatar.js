const Discord = require("discord.js");
const bot = new Discord.Client();
module.exports.run = (bot, message, args, discord) => {
    if (//message.author.id !== "568234099093798923" &&
      // message.author.id !== "559825881271369795" &&
       message.author.id !== `${config.dono}` && message.author.id !== `${config.dev}` message) return message.reply(":x:FAIL, você não possui permissão!");
  let avatar = args.join(" ")
    bot.user.setAvatar(avatar);
    message.channel.send(`Set my avatar to ${args.join(' ')}!`);
}