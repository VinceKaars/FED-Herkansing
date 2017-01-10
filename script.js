var section = document.querySelector('body');
var button = document.querySelector('.switch > button');
var read1 = document.querySelector('.overlay');
var button2 = document.querySelector('.buttonn2');
var read2 = document.querySelectorAll('.overlay')[1];
var button3 = document.querySelector('.buttonn3');
var read3 = document.querySelectorAll('.overlay')[2];
var button4 = document.querySelector('.buttonn4');
var read4 = document.querySelectorAll('.overlay')[3];
var button5 = document.querySelector('.buttonn5');
var read5 = document.querySelectorAll('.overlay')[4];
var button6 = document.querySelector('.buttonn6');

var night = function () {
	section.classList.toggle('dark')
}

var readfirst = function () {
	read1.classList.toggle('read')
}

var readsecond = function () {
	read2.classList.toggle('read')
}

var readthird = function () {
	read3.classList.toggle('read')
}

var readfourth = function () {
	read4.classList.toggle('read')
}

var readfifth = function () {
	read5.classList.toggle('read')
}

button.addEventListener('click', night);
button2.addEventListener('click', readfirst);
button3.addEventListener('click', readsecond);
button4.addEventListener('click', readthird);
button5.addEventListener('click', readfourth);
button6.addEventListener('click', readfifth);