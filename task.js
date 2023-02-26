function deleteTask(id) {
	let delBut = document.getElementById('note' + id);
	delBut.remove();
	returnedArray.splice(id);
	localStorage.removeItem(id);
	returnedArray.length = 0;
	redraw();
}

function buildTask() {
	if (checkValid === false) {
		return;
	}
	for (let t = -1; t < returnedArray.length; t++) {
		TASK_DOM = {
			id: t + 2,
			Name: document.getElementById('taskName').value,
			Date: document.getElementById('dueDate').value,
			Detail: document.getElementById('taskDetail').value,
			Time: document.getElementById('timepicker').value,
			status: 'active'
		};
	}
	returnedArray.push(TASK_DOM);

	for (let i = 0; i < returnedArray.length; i++) {
		localStorage.setItem(JSON.stringify(returnedArray[i].id), JSON.stringify(returnedArray[i]));
	}
}

function redraw() {
	if (localStorage.length < 1) {
		return;
	}
	if (returnedArray.length > 1) {
		return;
	}
	for (let i = 0; i < localStorage.length; i++) {
		let key = localStorage.key(i);
		let item = JSON.parse(localStorage.getItem(key));
		returnedArray.push(item);
	}
	returnedArray.reverse();
	generate();
}

function draw() {
   validate();
	if (checkValid === false) {
		returnedArray.length = 0;
		return;
	}
	buildTask();
	setTimeout(() => {
		generate();
	}, 750);
}