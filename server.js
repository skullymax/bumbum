const Discord = require('discord.js');
const bot = new Discord.Client();

const config = require("./config.json")

bot.on('ready', () => {
  bot.user.setGame('c:help for commands');
  console.log(`Kitilen initilized.`);
});

function doMagic8BallVoodoo() {
    var rand = ['zphoebus@hotmail.com:phreak9969', 'nealmu@gmail.com:raya99', 'red.double.blade@gmail.com:pizzaman123', 'joshua.alan.baker@gmail.com:theone', 'swoog@ymail.com:sonicheroes12', 'earthyelves@gmail.com:tambo3', 'swoog@ymail.com:sonicheroes12', '', '', '', '', '', '', '', '', '', ''];

    return rand[Math.floor(Math.random()*rand.length)];
}


  if (command === "help") {
    msg.channel.sendMessage(":calling: It seems you have requested help. Check your DMs.");
    msg.author.sendMessage("**Commands:** /generate")
  }

  if (command === "avatar") {
    msg.reply(msg.author.avatarURL);
  }

  if (command === "generate") {
    msg.reply("Generating...")
    msg.author.sendMessage(doMagic8BallVoodoo())
  }

  if (command === "invite") {
    msg.reply("It seems you want to invite me to your server. Check your DMs. ")
    msg.author.sendMessage("https://discordapp.com/oauth2/authorize?client_id=434814153107177484&scope=bot&permissions=66137103")
  }


});

bot.login(config.token);
