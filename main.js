
//1. Target the element we're trying to listen for the event on
//2. Tell a function to run when that event happens
//3. Create the function 

var buttonEl = document.querySelector('.btnLike');
var likes = 0;

buttonEl.addEventListener('click', updateButton)

function updateButton() {
	likes++;

	if (likes === 1) {
		buttonEl.innerHTML = likes+ ' like';
	}
	else {
	buttonEl.innerHTML = likes+' likes';
	}
}

//create another button that when pressed, resets the like counter back to 0

var resetButtonEl = document.querySelector('.btnReset');

resetButtonEl.addEventListener('click', updateLikes)

function updateLikes() {
	likes = 0;
	buttonEl.innerHTML = likes+' likes';
}









