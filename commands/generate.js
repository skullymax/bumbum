function doMagic8BallVoodoo() {
    var rand = ['jeanlouis.gomes@gmail.com:iverson25',
    'jonathan.nguyen1233@yahoo.com:009221jon',
    'iceheartthewarrior@gmail.com:lilpest12',
    'cainmaxi@mail.com:Droid7717!',
    'cj-magic@web.de:41324132.',
    'marcuszenkerrygaard@gmail.com:Marcus1701',
    'mrspieleplayer@gmail.com:naruto20099',
    'sarahschoenberg@yahoo.de:Johanna2508',
    'albion118@gmail.com:tr1f0rc3',
    'knightaaron16@yahoo.com:knight123',
    'ahsfreitag94@yahoo.com:Iamthestupid1!',
    'aukava323@mail.ru:124ata44',
    'gabriel_gonzalezmendez@hotmail.com:gabriel14121998',
    'brian722@gmail.com:falcon22',
    'tormentruler@yahoo.com:dogofevil0',
    'excsniper@gmail.com:7539518624'];

    return rand[Math.floor(Math.random()*rand.length)];
}

module.exports = {
     main: function(bot, msg) {
		var start = Date.now();
		var stop, diff;
    msg.channel.send("**Generating...**").then(function(newMsg) {
			var stop = Date.now();
			var diff = (stop - start);
	    msg.author.send("Join to official discord https://discord.gg/VAwQKQG");
			msg.author.send(doMagic8BallVoodoo());
		});
    },
    help: 'Generate our alts free'
};
