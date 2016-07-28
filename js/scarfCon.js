function Scarf(team, name, imageLocation) {
	this.team = team;
	this.scarfName = name;
	this.image = imageLocation;
	this.upVotes = 0;
}

Scarf.prototype.upvote = function() {
	this.upVotes++;
	imgSelector(scarfBox);
}

var chainsaw = new Scarf("Timbers", "Chainsaw Border", "pics/ptfcs1.jpg");
var sawblade = new Scarf("Timbers", "Saw Blade", "pics/ptfcs2.jpg");
var tartan = new Scarf("Timbers", "The Tartan", "pics/ptfcs3.jpg");
var rnChamp = new Scarf("Timbers", "Champions 15 RoughNeck", "pics/ptfc1.jpg");
var argyle = new Scarf("Timbers", "Argyle", "pics/ptfc2.jpg");
var whiteGreen = new Scarf("Timbers", "White and Green", "pics/ptfc3.jpg");


var scarfBox = [];
scarfBox.push(chainsaw, sawblade, tartan, rnChamp, argyle, whiteGreen);
