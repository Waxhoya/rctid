 function Scarf(team, name, imagelocation) {
	this.team = team;
	this.scarfName = name;
	this.image = imageLocation;
	upVotes = 0;
}

Scarf.prototype.upvote = function() {
	this.upvote++;
	imgSelector(scarfBox);
}

var chainsaw = new Scarf("Timbers", "Chainsaw Border", pics/ptfcs1.jpg);
var sawblade = new Scarf("Timbers", "Saw Blade", pics/ptfcs2.jpg);
var tartan = new Scarf("Timbers", "The Tartan", pics/ptfcs3.jpg);

var scarfBox = [];
scarfBox.push(chainsaw, sawblade, tartan);
