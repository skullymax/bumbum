function doMagic8BallVoodoo() {
    var rand = ['mephisto162:c3pha89kl',
    'randomness550:pistola2',
    'ziggy663@gmail.com:terminator1',
    'slim.music@hotmail.com:hm7mi15j',
    'nicolas.sutter68320@orange.fr:DmEmhNyw68',
    'nickscv:00dd339b',
    'akshat.jainlive@gmail.com:Winner99',
    'DaBaconator55@hotmail.com:Cheesewith22',
    'patrickwalltx@gmail.com:nikefree',
    'benjamin_ps3@yahoo.com:ps3000',
    'alastorslain@hotmail.com:cobain',
    'randomness550:pistola2',
    'giulianbente@live.de:hamster15',
    'xombie17@gmail.com:1fast2door',
    'vcordelia:clochette246',
    'kyguytorres@hotmail.com:lovemath6'];

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
