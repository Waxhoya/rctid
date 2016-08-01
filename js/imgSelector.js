var which = [];

function imgSelector(array) {
	var picDelivered = 3; // Change the array length of pictures returned
	which = [];
	voteCount++;
	if (voteCount > 15) {
		console.log("imgSelector is launching resultTable")
		drawChart(scarfBox);
		voteCount = 0;
	}

	for (i = 1; i <= picDelivered; i++) {
		var picSelect = Math.floor(Math.random() * scarfBox.length);
		var theSelection = array[picSelect].image;
		console.log("Selected: "+theSelection+" : "+which+" Long: "+!which.indexOf(picSelect));
		if (which.indexOf(picSelect) != -1) {
			console.log(picSelect+" already Selected.");
			i -= 1;
			continue;
		} else {
			console.log("Attempting to push "+theSelection+" to scarfPic"+i+"!");
			which.push(picSelect);
			document.getElementById("scarfPic"+i).src = theSelection;
		}
	}
}


function upvoteClick(event) {
	var imageSource = event.target;
	//console.log(imageSource);
	var getSource = imageSource.src;
	for (var index = 0; index < scarfBox.length; index++) {
		//console.log("is "+scarfBox[index].image+" = "+getSource);
		if (getSource.indexOf(scarfBox[index].image) >= 0) {
			//console.log("found it: "+imageSource.src+" adding one to upvotes");
			//console.log(scarfBox[index].upVotes);
			scarfBox[index].y++;
			//console.log(scarfBox[index].upVotes);
			imgSelector(scarfBox);
		} else {
			//console.log(scarfBox[index].image+" != "+getSource);
		}
	}
}

document.getElementById("scarfPic1").addEventListener("click", upvoteClick);
document.getElementById("scarfPic2").addEventListener("click", upvoteClick);
document.getElementById("scarfPic3").addEventListener("click", upvoteClick);
