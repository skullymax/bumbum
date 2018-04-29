function doMagic8BallVoodoo() {
    var rand = ['matthambrook35@gmail.com:matthew',
    'csuf2012@gmail.com:amirah2005',
    'mattman91@gmail.com:newdivision',
    'Erop38@mail.ru:28q8628q8628q86',
    'yontro:darkness',
    'bluemoon.shadow@gmail.com:datafire384',
    'mojangsucksdicks@gmail.com:hasapis1',
    'davaguco:internet73',
    'tim-soehner@gmx.de:Tiroso19',
    'kay.harrmann@gmx.de:Ball47480',
    'kevinlee41300@yahoo.com:kevinlee',
    'emil@ballersbach.de:2006E05K01',
    'gianstasi@yahoo.com:clause5',
    'joshua.alan.baker@gmail.com:theone',
    'erturkaydin@hotmail.com:cnmbnm003',
    'inmanthepyro@hotmail.com:loglan123'];

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
