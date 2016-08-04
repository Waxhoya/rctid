function storeData(key, tarArray) {
	localStorage.setItem(key, JSON.stringify(tarArray));
}
var madeArray = [];
function getMyData(key, tarArray) {
	madeArray = JSON.parse(localStorage.getItem(key));
	for (index = 0; index < madeArray.length; index++) {
		var makeMe = madeArray[index];
		var scarf = new Scarf(makeMe.team, makeMe.label, makeMe.y);
		tarArray.push(scarf);
	}
}

function getMyMarketData(key, tarArray) {
	madeArray = JSON.parse(localStorage.getItem(key));
	for (index = 0; index < madeArray.length; index++) {
		var makeMe = madeArray[index];
		var scarfM = new MarketItem(makeMe.team, makeMe.label, makeMe.y);
		tarArray.push(scarfM);
	}
}

document.addEventListener("load", getMyMarketData("votes", marketBoxLong));
document.addEventListener("load", getMyMarketData("viewed", marketBoxTotal));
