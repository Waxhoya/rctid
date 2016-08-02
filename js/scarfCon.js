function Scarf(team, name, imageLocation) {
	this.team = team;
	this.image = imageLocation;
	this.upVotes = 0;
	this.label = name;
	this.y = 0;
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

function rebuildScarfBox () {
	for (index=0; index < scarfBox.length; index++) {
		scarfBox[index].y = 0;
	}
	voteAgain();
}

scarfBox.push(chainsaw, sawblade, tartan, rnChamp, argyle, whiteGreen, soccerCity, champs, rctid, mlsChamps, camoTimbers, spreadLove, casTimber);


/* Smaller Obj to hold user sats */
function marketItem(name, imageLocation) {
	this.image = imageLocation;
	this.label = name;
	this.y = 0;
}

/* Holds long term user vote Data */
var marketBoxLong = [];

var chainsawLongData = new marketItem("Chainsaw Border", "pics/ptfcs1.jpg");
var rnChampLongData = new marketItem("Champions 15 RoughNeck", "pics/ptfc1.jpg");
var argyleLongData = new marketItem("Argyle", "pics/ptfc2.jpg");
var sawbladeLongData = new marketItem("Saw Blade", "pics/ptfcs2.jpg");
var whiteGreenLongData = new marketItem("White and Green", "pics/ptfc3.jpg");
var tartanLongData = new marketItem("The Tartan", "pics/ptfcs3.jpg");
var rctidLongData = new marketItem("Rose City Til I Die", "pics/ptfc4.jpg");
var champsLongData = new marketItem("2015 Champs", "pics/ptfc5.jpg");
var soccerCityLongData = new marketItem("Soccer City USA", "pics/ptfc6.jpg");
var camoTimbersLongData = new marketItem("Camo Timbers", "pics/ptfc7.jpg");
var casTimberLongData = new marketItem("Cascade Timbers", "pics/ptfc8.jpg");
var mlsChampsLongData = new marketItem("MLS Champions", "pics/ptfc9.jpg");
var spreadLoveLongData = new marketItem("Spread The Love", "pics/ptfc10.jpg");

marketBoxLong.push(chainsawLongData, sawbladeLongData, tartanLongData, rnChampLongData, argyleLongData, whiteGreenLongData, soccerCityLongData, champsLongData, rctidLongData, mlsChampsLongData, camoTimbersLongData, spreadLoveLongData, casTimberLongData);


/* Holds long term View Data */
var marketBoxTotal = [];

var chainsawTotal = new marketItem("Chainsaw Border", "pics/ptfcs1.jpg");
var rnChampTotal = new marketItem("Champions 15 RoughNeck", "pics/ptfc1.jpg");
var argyleTotal = new marketItem("Argyle", "pics/ptfc2.jpg");
var sawbladeTotal = new marketItem("Saw Blade", "pics/ptfcs2.jpg");
var whiteGreenTotal = new marketItem("White and Green", "pics/ptfc3.jpg");
var tartanTotal = new marketItem("The Tartan", "pics/ptfcs3.jpg");
var rctidTotal = new marketItem("Rose City Til I Die", "pics/ptfc4.jpg");
var champsTotal = new marketItem("2015 Champs", "pics/ptfc5.jpg");
var soccerCityTotal = new marketItem("Soccer City USA", "pics/ptfc6.jpg");
var camoTimbersTotal = new marketItem("Camo Timbers", "pics/ptfc7.jpg");
var casTimberTotal = new marketItem("Cascade Timbers", "pics/ptfc8.jpg");
var mlsChampsTotal = new marketItem("MLS Champions", "pics/ptfc9.jpg");
var spreadLoveTotal = new marketItem("Spread The Love", "pics/ptfc10.jpg");

marketBoxTotal.push(chainsawTotal, sawbladeTotal, tartanTotal, rnChampTotal, argyleTotal, whiteGreenTotal, soccerCityTotal, champsTotal, rctidTotal, mlsChampsTotal, camoTimbersTotal, spreadLoveTotal, casTimberTotal);
