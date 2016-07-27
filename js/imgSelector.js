function imgSelector(array) {
	var picDelivered = 3; // Change the array length of pictures returned
	var which = [];

	for (i = 0; i < picDelivered-1; i++){
		var picSelect = Math.floor(Math.random() * scarfBox.length);
		if (which.indexOf(picSelect)){
			i -= 1;
			continue;
		} else {
			which.push(picSelect);
		}
	return which;
	}
}
