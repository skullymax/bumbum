const Discord = require('discord.js');
const client = new Discord.Client();

// 'client.on('message')' commands are triggered when the
// specified message is read in a text channel that the bot is in.

var help = new Discord.RichEmbed().setTitle("_+-=^EyzAlts^=-+_").setDescription(`**Server Prefix:** \n\n**Fun Commands :**\nyoutube-roulette.\n\n**Useful Commands :**\nadd, subtract, multiply, divide, factorial, sqrt, random, exponent, pythagorean, addvideo, say, repeat, level, prefix, invite, and ping.\n\n**Moderation Commands :** lockdown, warn, mute, purge, ban, kick, unban.`).setColor("#00fff6").setThumbnail("https://cdn.discordapp.com/attachments/313339485725130752/318545971187417091/ayy.png").setFooter("Version 0.0.1 | By LittleWhole").setTimestamp();
client.login(BotID);
client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}!`);
    client.user.setGame(`/help | By skullymax`)
    client.user.setStatus('online');
   });

var preview = "**Free Alt** ashar.wallace.word@gmail.com:66ry46"

client.on('message', message => {
  if (message.content === '/free') {
      message.author.sendMessage(preview);
}
});

var RoleID = ''
var RoleText = "Use key /use {secretkey}"
var BotID = "NDM0ODE0MTUzMTA3MTc3NDg0.DbTz-g.T70Ug3NPY6sLXKVscIMlV6kVIgc"

client.on('message', message => {
  if (message.content === '/use') {
    message.member.addRole(RoleID)
  .then(console.log)
  .catch(console.error);
    message.reply(RoleText)
    message.member.removeRole('')
    message.member.addRole('Starter')

}
});

var help = "**Commands: `/help /free `More Commands soon.**"

client.on('message', message => {
  if (message.content === '/help') {
      message.channel.sendMessage(help);
}
});

var info = "Buy key from here:"

client.on('message', message => {
  if (message.content === '/useinfo') {
      message.channel.sendMessage(info);
}
});

client.login(BotID);
