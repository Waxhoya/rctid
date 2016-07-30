function resultTable() {
	var flip = document.getElementByID("scarfPic3").className = "hidden";
	var flop = document.getElementByID("resultSpot").className = "fade-in shown";

	var table = document.getElementById("resultSpot");
	var header = table.createTHead();
	var row = header.insertRow(0);
	var cell = row.insertCell(0);
	console.log(tartan.upVotes);
	cell.innerHTML = "<b>"+tartan.upVotes+"</b>";


}
document.getElementById("scarfPic3").addEventListener("click", resultTable);
