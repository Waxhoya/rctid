var which = [0,1,2];
function imgSelector(array) {
	var picDelivered = 3; // Change the array length of pictures returned
	which = [];

	for (i = 0; i < picDelivered-1; i++){
		var picSelect = Math.floor(Math.random() * scarfBox.length);
		if (which.indexOf(picSelect)){
			i -= 1;
			continue;
		} else {
			which.push(picSelect);
		}
	}
	picOne = document.getElementById("firstPic");
	picTwo = document.getElementById("secondPic");
	picThree = document.getElementById("thirdPic");
	picOne.innerHTML("<img src='"+array[which[0]].image+"' />");
}
picOne = document.getElementById("firstPic");
picTwo = document.getElementById("secondPic");
picThree = document.getElementById("thirdPic");

picOne.addEventListener("click", scarfBox[which[0]].upvote)
picTwo.addEventListener("click", scarfBox[which[1]].upvote)
picThree.addEventListener("click", scarfBox[which[2]].upvote)
