var picTwo = document.getElementById("secondPic");
var picOne = document.getElementById("firstPic");
var picThree= document.getElementById("thirdPic");
var which = [0,1,2];

picOne.addEventListener("click", scarfBox[which[0]].upvote)
picTwo.addEventListener("click", scarfBox[which[1]].upvote)
picThree.addEventListener("click", scarfBox[which[2]].upvote)

function imgSelector(array) {
	var picDelivered = 3; // Change the array length of pictures returned
	which = [];

	for (i = 0; i < picDelivered-1; i++){
		var picSelect = Math.floor(Math.random() * scarfBox.length);
		console.log("Picture Chosen:"+picSelect)
		if (which.indexOf(picSelect)){
			i -= 1;
			continue;
		} else {
			which.push(picSelect);
		}
	}
	picOne.src=""+(scarfBox[which[0]].image);
	picTwo.src=""+(scarfBox[which[1]].image);
	picThree.src=""+(scarfBox[which[2]].image);

}
