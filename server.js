const Discord = require('discord.js');
const bot = new Discord.Client();

const config = require("./config.json")

bot.on('ready', () => {
  bot.user.setGame('c:help for commands');
  console.log(`Kitilen initilized.`);
});

function doMagic8BallVoodoo() {
    var rand = ['zphoebus@hotmail.com:phreak9969', 'nealmu@gmail.com:raya99', 'red.double.blade@gmail.com:pizzaman123', 'joshua.alan.baker@gmail.com:theone', 'swoog@ymail.com:sonicheroes12', 'earthyelves@gmail.com:tambo3', 'swoog@ymail.com:sonicheroes12'];

    return rand[Math.floor(Math.random()*rand.length)];
}

function coinToss() {
    var rand = ['You flipped the coin, it lands on tails.', 'I flipped the coin, it lands on tails.', 'You flipped the coin, it lands on heads.', 'I flipped the coin, it lands on heads.'];
    return rand[Math.floor(Math.random()*rand.length)];
}

bot.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(config.prefix)) return;

  let command = msg.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  console.log(command);

  let args = msg.content.split(" ").slice(1);

  if (command === "") {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p+c);

    msg.channel.sendMessage(total).catch(console.error);
  }

  if (command === "help") {
    msg.channel.sendMessage(":calling: It seems you have requested help. Check your DMs.");
    msg.author.sendMessage("Thanks for using the help command, this command will help you know the current commands. c:ping and c:pong are commands used to check if the bot is online. c:say allows you to make the bot say whatever you want it to say. c:calculateadd is an adding calculator. c:8ball is a fun command where you can ask the magic 8 ball a question and it will reply. c:invite makes the bot DM you an invite link to invite the bot to your server. And c:objection, c:holdit and c:takethat are AA commands.")
  }

  if (command === "avatar") {
    msg.reply(msg.author.avatarURL);
  }

  if (command === "generate") {
     msg.reply("**Generating...**")
    msg.author.sendMessage(doMagic8BallVoodoo())
  }

  if (command === "invite") {
    msg.reply("It seems you want to invite me to your server. Check your DMs. ")
    msg.author.sendMessage("https://discordapp.com/oauth2/authorize?client_id=434814153107177484&scope=bot&permissions=66137103")
  }

  if (command === "") {
    msg.channel.sendMessage(coinToss())
  }

});

bot.login(config.token);
