function clear() {
	localStorage.clear();
	taskArray.length = 0;
	returnedArray.length = 0;
}

function validate() {
	if (!taskName.value || !taskDetail.value || !dueDate.value) {
		creator.classList.add('was-validated');
		checkValid = false;
	} else {
		creator.classList.add('needs-validation');
		checkValid = true;
	}
	checkTimeForValid();
}

function checkTimeForValid() {
	let date = new Date();
	let myDate = dueDate.value;
	let myTime = +timepicker.value;
	let myDateUpdate = new Date(myDate);
	let myTimeUpdate = date.getTime();
	if (myDateUpdate < date || !myDateUpdate == date) {
		checkValid === false;
		if (today2 == dueDate.value) {
			checkValid === true;		
		}
	} else {
		checkValid === true;
	}
}