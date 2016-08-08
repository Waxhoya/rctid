var madeArray = []

function storeData(key, tarArray) {
	localStorage.setItem(key, JSON.stringify(tarArray));
}

function getMyData(key, tarArray) {
	madeArray = JSON.parse(localStorage.getItem(key));
	for (index = 0; index < madeArray.length; index++) {
		var makeMe = madeArray[index];
		var scarf = new Scarf(makeMe.team, makeMe.label, makeMe.y);
		tarArray.push(scarf);
	}
}

function clearData() {
	localStorage.clear();
	alert("localStorage has been removed");
	return null;
}


document.addEventListener("load", getMyData("votes", marketBoxLong));

document.addEventListener("load", getMyData("viewed", marketBoxTotal));
