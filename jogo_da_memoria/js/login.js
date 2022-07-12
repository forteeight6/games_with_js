const input = document.querySelector(".login_input");
const button = document.querySelector(".login_button");
const form = document.querySelector('.login-form');

/*
function validateInput() {
	
}
*/

/*
const validateInput = (event) => {
	// console.log(event.target);
	//  console.log(event.target.value);
}
*/

/*
const validateInput = ({ target }) => {
	if (target.value.length > 2) {
		button.removeAttribute('disabled');
	} else {
		button.setAttribute('disabled', '');
	}
}
*/

const validateInput = ({ target }) => {
	if (target.value.length > 2) {
		button.removeAttribute('disabled');
		return;
	}
	
	button.setAttribute('disabled', '');
}


const handleSubmit = (event) => {
	event.preventDefault();
	// console.log('logando ...');
	// console.log(input.value);
	localStorage.setItem('player', input.value);
	window.location = "pages/game.html"
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);