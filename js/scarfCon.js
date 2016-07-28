function Scarf(team, name, imageLocation) {
	this.team = team;
	this.scarfName = name;
	this.image = imageLocation;
	upVotes = 0;
}

Scarf.prototype.upvote = function() {
	this.upvote++;
	imgSelector(scarfBox);
}

var chainsaw = new Scarf("Timbers", "Chainsaw Border", "ptfcs1.jpg");
var sawblade = new Scarf("Timbers", "Saw Blade", "ptfcs2.jpg");
var tartan = new Scarf("Timbers", "The Tartan", "ptfcs3.jpg");
var rnChamp = new Scarf("Timbers", "Champions 15 RoughNeck", "ptfc1.jpg")
var argyle = new Scarf("Timbers", "Argyle", "ptfc2.jpg")
var whiteGreen = new Scarf("Timbers", "White and Green", "ptfc3.jpg")


var scarfBox = [];
scarfBox.push(chainsaw, sawblade, tartan, rnChamp, argyle, whiteGreen);
