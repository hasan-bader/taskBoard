document.addEventListener('DOMContentLoaded', () => {
	let butonSub = document.getElementById('butonSub');
	let creator = document.getElementById('creator');
	let buttonClose = document.getElementsByClassName('close');
	let messageBoard = document.getElementById('messageBoard');
	butonSub.addEventListener('click', draw);
	butonRes.addEventListener('click', clear);
	window.addEventListener('load', redraw);
});
let TASK_DOM = {};
let delBut = document.getElementsByClassName('close');
let taskArray = [];
let returnedArray = [];

function generate() {
	stage.innerHTML = '';
	for (let i = 0; i < returnedArray.length; i++) {
		let div = document.createElement('div');
		stage.append(div);
		div.className = 'card mb-3 col-3';
		div.id = 'note' + returnedArray[i].id;
		let butX = document.createElement('button');
		butX.innerHTML = '<i class="far fa-trash-alt"></i>';
		butX.addEventListener('click', function () {
			deleteTask(returnedArray[i].id);
		});
		butX.className = 'close';
		div.append(butX);
		let div2 = document.createElement('div');
		div.append(div2);
		div2.className = 'card-header';
		div2.append(returnedArray[i].Name);
		let div3 = document.createElement('div');
		div.append(div3);
		div3.className = 'card-body';
		div3.append(returnedArray[i].Detail);
		let div4 = document.createElement('div');
		div.append(div4);
		div4.className = 'date-body';
		div4.innerHTML = '<i class="far fa-calendar"></i>';
		div4.append(returnedArray[i].Date);
		let div5 = document.createElement('div');
		div.append(div5);
		div5.className = 'date-body';
		div5.innerHTML = '<i class="far fa-clock"></i>';
		div5.append(returnedArray[i].Time);
	}
}
//TIME
let today = new Date();
let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
new Date().getTime() 
Date.now()
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;
let today2 = year + "-" + month + "-" + day;