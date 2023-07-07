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





// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
	// Areas of Focus button
	// Get all the "Read More" buttons
	const buttons = document.querySelectorAll('.focus-btn');

	// Add a click event listener to each button
	buttons.forEach(function (button) {
		button.addEventListener('click', function () {
			// Toggle the collapse class on the target content
			const content = this.parentElement.nextElementSibling;
			content.classList.toggle('show');

			// Toggle the text between 'Read More' and 'Collapse'
			const buttonText = this.innerText.trim();
			this.innerText = buttonText === 'Read More' ? 'Collapse' : 'Read More';
		});
	});
});




