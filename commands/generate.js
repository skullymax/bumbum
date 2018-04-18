function doMagic8BallVoodoo() {
    var rand = ['daviddrumgoole@outlook.com:immortal09',
    'gaztime:hartson10',
    'mrod2172@gmail.com:mj2172',
    'prozelda2@hotmail.com:Devil9001',
    'nonstartwinkle12@yahoo.com:rhirhim2000',
    'bambuleila@mail.ru:legenda',
    'ackitskim@yahoo.com:ackitsk1m',
    'wyrmslayer1337@gmail.com:abc1379a',
    'Molly.h@hotmail.se:fluffis5',
    'e.j.93@hotmail.com:gennio01',
    'slipknot11095@yahoo.com:streetlife420',
    'cedricloubier1@gmail.com:fidji2015',
    'lehman_lynn@sbcglobal.net:cubsblue34',
    'amar95353@gmail.com:meirobot12',
    'lucasamaralevangelista@gmail.com:carnemelada1',
    'jeanlouis.gomes@gmail.com:iverson25',
    'k3nny9710@hotmail.com:killerstuff10'];

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
