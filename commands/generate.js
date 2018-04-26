function doMagic8BallVoodoo() {
    var rand = ['mahabh9943@gmail.com:michael04',
    'finn.hiddenuchiha@gmail.com:mischief',
    'rohmstark@yahoo.com:Wishwash01',
    'kay.harrmann@gmx.de:Ball47480',
    'magloor@gmail.com:capatryk512',
    'gbisharat95@gmail.com:Azerty95120',
    'frankalvarez41@yahoo.com:alvarez562',
    'allesroutine@hotmail.com:knarren12',
    'beachbomber@yahoo.com:hegsted',
    'allesroutine@hotmail.com:knarren12',
    'tumpkin_1@yahoo.com:cardians33',
    'christofj@arcor.de:anno1927',
    'mitu0620@gmail.com:mitu2687',
    'coolcrash360@yahoo.com:snakecjccc5',
    'bryan_ng_2004@yahoo.com.sg:sampoleh1',
    'nicolashoffmann0508@gmx.de:auto12345'];

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
