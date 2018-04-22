function doMagic8BallVoodoo() {
    var rand = ['dereklthompson@yahoo.com:Dashiell2',
    'imagination-frustration@hotmail.com:Snorlax12!',
    'Christophfaenger@gmx.de:sinus314',
    'hetriett@hotmail.com:byron1824',
    'mattday83@gmail.com:dmbrocks',
    'cdy932@live.com.au:codeman10',
    'azekahh2@yahoo.com:LolSheep223',
    'mikemaushard@gmail.com:shwank11',
    'flz_67_2007@hotmail.com:minis1235',
    'xnahrutox@gmail.com:cakcis67600!',
    'dmbuss@gmail.com:t0nsgard',
    '2000matu@gmail.com:Bionicle123',
    'amie.napier@gmail.com:Beckett1',
    'hallucinogenic45@yahoo.com:Bingo369',
    'dtcook:cookie',
    'janddjones@bigpond.com:Lachlan1',
    'pylareaton@gmail.com:p2881911'];

    return rand[Math.floor(Math.random()*rand.length)];
}

module.exports = {
     main: function(bot, msg) {
		var start = Date.now();
		var stop, diff;
    msg.channel.send("**Generating...**").then(function(newMsg) {
			var stop = Date.now();
			var diff = (stop - start);
	    msg.author.send("Join to https://discord.gg/VAwQKQG for news");
			msg.author.send(doMagic8BallVoodoo());
		});
    },
    help: 'Generate our alts free'
};
