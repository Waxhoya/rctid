function Scarf(team, name, imageLocation) {
	this.team = team;
	this.image = imageLocation;
	this.upVotes = 0;
	this.label = name;
	this.y = 0;
}

Scarf.prototype.upvote = function() {
	this.y++;
	imgSelector(scarfBox);
}

var chainsaw = new Scarf("Timbers", "Chainsaw Border", "pics/ptfcs1.jpg");
var rnChamp = new Scarf("Timbers", "Champions 15 RoughNeck", "pics/ptfc1.jpg");
var argyle = new Scarf("Timbers", "Argyle", "pics/ptfc2.jpg");
var sawblade = new Scarf("Timbers", "Saw Blade", "pics/ptfcs2.jpg");
var whiteGreen = new Scarf("Timbers", "White and Green", "pics/ptfc3.jpg");
var tartan = new Scarf("Timbers", "The Tartan", "pics/ptfcs3.jpg");
var rctid = new Scarf("Timbers", "Rose City Til I Die", "pics/ptfc4.jpg");
var champs = new Scarf("Timbers", "2015 Champs", "pics/ptfc5.jpg");
var soccerCity = new Scarf("Timbers", "Soccer City USA", "pics/ptfc6.jpg");
var camoTimbers = new Scarf("Timbers", "Camo Timbers", "pics/ptfc7.jpg");
var casTimber = new Scarf("Timbers", "Cascade Timbers", "pics/ptfc8.jpg");
var mlsChamps = new Scarf("Timbers", "MLS Champions", "pics/ptfc9.jpg");
var spreadLove = new Scarf("Timbers", "Spread The Love", "pics/ptfc10.jpg");

var scarfBox = [];
scarfBox.push(chainsaw, sawblade, tartan, rnChamp, argyle, whiteGreen, soccerCity, champs, rctid, mlsChamps, camoTimbers, spreadLove, casTimber);
