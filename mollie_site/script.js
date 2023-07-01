// FAQ Page
const faqs = document.querySelectorAll(".faq");
for (const item of faqs) {
	const curr_faq = item.childNodes;
	console.log(curr_faq);
	const question = curr_faq[1];
	const answer = curr_faq[3];
	const icon = question.querySelector(".icon-main");
	icon.addEventListener("click", function () {
		answer.classList.toggle("non-active");
		const i = icon.querySelector("i");
		i.classList.toggle("fa-xmark");
		i.classList.toggle("fa-plus");
	});
};

//Modalities (About Page)
const focus = document.querySelectorAll(".mod");
for (const item of focus) {
	const curr_focus = item.childNodes;
	console.log(curr_focus);
	const question = curr_focus[1];
	const answer = curr_focus[3];
	const icon = question.querySelector(".mod-icon");
	icon.addEventListener("click", function () {
		answer.classList.toggle("non-active");
		const i = icon.querySelector("i");
		i.classList.toggle("fa-xmark");
		i.classList.toggle("fa-plus");
	});
};

// footer pop ups
function showPopup(element, title) {
	const popupContainer = document.getElementById('popup-container');
	const popupHeading = document.getElementById('popup-heading');
	const popupText = document.getElementById('popup-text');
	const closeBtn = document.getElementById('popup-close');

	popupHeading.textContent = title;

	const contentUrl = `${title.toLowerCase().replace(/\s/g, '-')}.html`;
	fetch(contentUrl)
		.then(response => response.text())
		.then(data => {
			popupText.innerHTML = data;
		})
		.catch(error => {
			console.error('Error loading content:', error);
			popupText.innerHTML = 'Error loading content.';
		});

	popupContainer.style.display = 'flex';

	// Function to close the popup
	function closePopup() {
		popupContainer.style.display = 'none';
	}

	// Close the popup when clicking outside of it
	window.addEventListener('click', function (event) {
		if (event.target === popupContainer) {
			closePopup();
		}
	});

	// Close the popup when the 'x' button is clicked
	closeBtn.addEventListener('click', function () {
		closePopup();
	});
};



// Consultation Page
$(document).ready(function () {
	$('#consultationForm').submit(function (e) {
		e.preventDefault();

		var firstName = $('#firstName').val();
		var lastName = $('#lastName').val();
		var email = $('#email').val();
		var message = $('#message').val();

		// Send the form data to the server
		$.ajax({
			url: '/send_email',
			method: 'POST',
			data: {
				firstName: firstName,
				lastName: lastName,
				email: email,
				message: message
			},
			success: function (response) {
				// Handle successful response from the server
				alert(response); // Display a success message or perform any other action
			},
			error: function (error) {
				// Handle error response from the server
				console.log(error); // Log the error or perform any other action
			}
		});
	});
});




// Areas of Focus button
// Get the button element
// Get all the "Read More" buttons
const buttons = document.querySelectorAll('.focus-btn');

// Add a click event listener to each button
buttons.forEach(function (button) {
	button.addEventListener('click', function () {
		// Check the current text of the button
		const buttonText = this.innerText.trim();

		// Toggle the text between 'Read More' and 'Collapse'
		if (buttonText === 'Read More') {
			this.innerText = 'Collapse';
		} else {
			this.innerText = 'Read More';
		}
	});
});
