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




// Areas of Focus Buttons
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
	// Areas of Focus button
	// Get all the "Read More" buttons
	const buttons = document.querySelectorAll('.focus-btn');

	// Add a click event listener to each button
	buttons.forEach(function (button) {
		button.addEventListener('click', function () {
			// Toggle the text between 'Read More' and 'Collapse'
			const buttonText = this.innerText.trim();
			this.innerText = buttonText === 'READ MORE' ? 'COLLAPSE' : 'READ MORE';
		});
	});
});


// JotForm - Consultation Page
JotForm.newDefaultTheme = true;
JotForm.extendsNewTheme = false;
JotForm.singleProduct = false;
JotForm.newPaymentUIForNewCreatedForms = true;
JotForm.newPaymentUI = true;
JotForm.clearFieldOnHide = "disable";
JotForm.submitError = "jumpToFirstError";

JotForm.init(function () {
	/*INIT-START*/
	JotForm.setPhoneMaskingValidator(
		"input_5_full",
		"\u0028\u0023\u0023\u0023\u0029 \u0023\u0023\u0023\u002d\u0023\u0023\u0023\u0023"
	);
	if (window.JotForm && JotForm.accessible)
		$("input_6").setAttribute("tabindex", 0);
	JotForm.alterTexts(undefined);
	/*INIT-END*/
});

setTimeout(function () {
	JotForm.paymentExtrasOnTheFly([null, null,
		{
			"name": "submit2",
			"qid": "2",
			"text": "Submit",
			"type": "control_button"
		},
		{
			"description": "",
			"name": "name",
			"qid": "3",
			"text": "Name",
			"type": "control_fullname"
		},
		{
			"description": "",
			"name": "email",
			"qid": "4",
			"subLabel": "",
			"text": "Email",
			"type": "control_email"
		},
		{
			"description": "",
			"name": "phoneNumber",
			"qid": "5",
			"text": "Phone Number",
			"type": "control_phone"
		},
		{
			"description": "",
			"name": "message",
			"qid": "6",
			"subLabel": "",
			"text": "Message",
			"type": "control_textarea"
		}
	]);
}, 20);


