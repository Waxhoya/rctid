
var voteCount = 0;

function resultTable(array) {

	var flip1 = document.getElementById("scarfPic1").className = "hidden";
	var flip2 = document.getElementById("scarfPic2").className = "hidden";
	var flip3 = document.getElementById("scarfPic3").className = "hidden";
	var flop = document.getElementById("resultSpot").className = "fade-in shown";

	var table = document.getElementById("resultSpot");
	var header = table.createTHead();
	for (index = 1; index <= array.length; index++){
		var row = header.insertRow();
		var team = row.insertCell();
		var votes = row.insertCell();
		console.log(tartan.upVotes);
		team.innerHTML = "<h6>"+array[index].scarfName+"</h6>";
		team.innerHTML = "<p>"+array[index].upVotes+"</p>";
	}
}
