function doMagic8BallVoodoo() {
    var rand = ['kbindeman@gmail.com:geneva13',
    'jared.roby@yahoo.com:jar9892',
    'catcher1018@gmail.com:Ciro1234',
    'ozziboy123@gmail.com:rmnkrmnk',
    'cyber.filter.78@gmail.com:samhain78',
    'e.mccrindle@sky.com:Buffy1700',
    'yu.gotou@gmail.com:gotou510',
    'jukesy97@live.co.uk:splat114',
    'Westyjj_123@hotmail.com:Greenman95',
    'mail@svenduecker.de:reclam2009',
    'icbmx2:venusfuck',
    'garionj94@msn.com:30842825w',
    'mauroktd@gmail.com:kaiser87',
    'mayaville02@yahoo.com:mrk22mrk',
    'kazul.was.here@gmail.com:Prowess13',
    'larsikftw@gmail.com:1511997kokos',
    'spike2000aly@gmail.com:chester2012'];

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
