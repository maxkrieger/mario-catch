var jsfxr = require("./jsfxr");
var files = {
	pipe: [2, , 0.2, , 0.1753, 0.64, , -0.5261, , , , , , 0.5522, -0.564, , , , 1, , , , , 0.5],
	water: [3,,0.0252,,0.2807,0.7841,,-0.6869,,,,,,,,,,,1,,,0.0523,,0.5],
	score0: [0,,0.0818,0.5164,0.2858,0.4,,,,,,0.501,0.614,,,,,,1,,,,,0.5],
	score1: [0,,0.0818,0.5164,0.2858,0.5,,,,,,0.501,0.614,,,,,,1,,,,,0.5],
	score2: [0,,0.0818,0.5164,0.2858,0.6,,,,,,0.501,0.614,,,,,,1,,,,,0.5],
	jump: [0,,0.1192,,0.2331,0.3712,,0.2254,,,,,,0.3291,,,,,0.6154,,,0.156,,0.5],
	heart: [1,,0.0975,,0.489,0.2047,,0.1759,,,,,,,,,,,1,,,,,0.5],
	bomb: [3,,0.375,0.4182,0.4879,0.1486,,-0.2694,,,,-0.6367,0.8223,,,,0.1528,-0.0754,1,,,,,0.5],
	sizzle: [3,,0.1292,,0.1886,0.3136,,0.2947,,,,,,0.2962,,,,,0.6539,,,,,0.5]
};
module.exports = {
	play: function(f) {
		files[f].play();
	}
};

Object.keys(files).forEach(function(nm) {
	var audio = new Audio();
	audio.src = jsfxr(files[nm]);
	files[nm] = audio;
});
