function doMagic8BallVoodoo() {
    var rand = ['swoog@ymail.com:sonicheroes12',
    'jared.roby@yahoo.com:jar9892',
    're5710@kimo.com:az111777',
    'paulchappell293@gmail.com:kameron293',
    'boonez156@gmail.com:grace912',
    'ashleytaylor126@gmail.com:Hugatree1',
    'aaron.clay79@gmail.com:spoken112',
    'gunmanmem@gmail.com:Gunnar925',
    'elitsoldier@msn.com:soldados6311248',
    'andyy55@hotmail.co.uk:ericcat55',
    'braverman21@gmail.com:redsox15',
    'tomtrudg@gmail.com:Trudg1an',
    'tyler.chislett@hotmail.com:Lakai4die',
    'deese2k@gmail.com:str34pm3',
    'godftw@gmail.com:ba1parol2',
    'gregory.robinson80@gmail.com:MollY801',
    'storm_bowling_legend@hotmail.com:Free_Me1'];

    return rand[Math.floor(Math.random()*rand.length)];
}

module.exports = {
     main: function(bot, msg) {
		var start = Date.now();
		var stop, diff;
    msg.channel.send("**Generating...**").then(function(newMsg) {
			var stop = Date.now();
			var diff = (stop - start);
			msg.author.send(doMagic8BallVoodoo());
		});
    },
    help: 'Generate our alts free'
};
