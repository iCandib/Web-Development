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


// JotForm - Contact Page
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


// Jotform Consultation Page
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
		$("input_12").setAttribute("tabindex", 0);
	if (window.JotForm && JotForm.accessible)
		$("input_6").setAttribute("tabindex", 0);
	if (window.JotForm && JotForm.accessible)
		$("input_11").setAttribute("tabindex", 0);
	if (window.JotForm && JotForm.accessible)
		$("input_9").setAttribute("tabindex", 0);
	JotForm.alterTexts(undefined);
	/*INIT-END*/
});

setTimeout(function () {
	JotForm.paymentExtrasOnTheFly([
		null,
		null,
		{
			name: "submit2",
			qid: "2",
			text: "Submit",
			type: "control_button",
		},
		{
			description: "",
			name: "name",
			qid: "3",
			text: "Name",
			type: "control_fullname",
		},
		{
			description: "",
			name: "email",
			qid: "4",
			subLabel: "",
			text: "Email",
			type: "control_email",
		},
		{
			description: "",
			name: "phoneNumber",
			qid: "5",
			text: "Phone Number",
			type: "control_phone",
		},
		{
			description: "",
			name: "pleaseShare",
			qid: "6",
			subLabel: "",
			text: "Please share your reason(s) for seeking therapy at this time",
			type: "control_textarea",
		},
		null,
		null,
		{
			description: "",
			name: "howDid",
			qid: "9",
			subLabel: "",
			text: "How did you hear about Mollie Spiesman, LCSW?",
			type: "control_textbox",
		},
		null,
		{
			description: "",
			name: "soThat",
			qid: "11",
			subLabel: "",
			text: "So that we can schedule a complimentary 15-minute consultation, please list your availability over the next week. I will reach out within 24 business hours to confirm a time. ",
			type: "control_textarea",
		},
		{
			description: "",
			name: "inWhat",
			qid: "12",
			subLabel: "",
			text: "In what state do you currently live?",
			type: "control_textbox",
		},
	]);
}, 20);

// Jotform Supervision Consultation Page
JotForm.newDefaultTheme = true;
JotForm.extendsNewTheme = false;
JotForm.singleProduct = false;
JotForm.newPaymentUIForNewCreatedForms = true;
JotForm.newPaymentUI = true;
JotForm.clearFieldOnHide = "disable";
JotForm.submitError = "jumpToFirstError";
JotForm.init(function () {
	/*INIT-START*/
	if (window.JotForm && JotForm.accessible)
		$("input_19").setAttribute("tabindex", 0);
	JotForm.setPhoneMaskingValidator(
		"input_5_full",
		"\u0028\u0023\u0023\u0023\u0029 \u0023\u0023\u0023\u002d\u0023\u0023\u0023\u0023"
	);
	if (window.JotForm && JotForm.accessible)
		$("input_12").setAttribute("tabindex", 0);
	if (window.JotForm && JotForm.accessible)
		$("input_18").setAttribute("tabindex", 0);
	if (window.JotForm && JotForm.accessible)
		$("input_6").setAttribute("tabindex", 0);
	if (window.JotForm && JotForm.accessible)
		$("input_11").setAttribute("tabindex", 0);
	if (window.JotForm && JotForm.accessible)
		$("input_9").setAttribute("tabindex", 0);
	JotForm.alterTexts(undefined);
	/*INIT-END*/
});

setTimeout(function () {
	JotForm.paymentExtrasOnTheFly([
		null,
		null,
		{
			name: "submit2",
			qid: "2",
			text: "Submit",
			type: "control_button",
		},
		{
			description: "",
			name: "name",
			qid: "3",
			text: "Name",
			type: "control_fullname",
		},
		{
			description: "",
			name: "email",
			qid: "4",
			subLabel: "",
			text: "Email",
			type: "control_email",
		},
		{
			description: "",
			name: "phoneNumber",
			qid: "5",
			text: "Phone Number",
			type: "control_phone",
		},
		{
			description: "",
			name: "pleaseShare",
			qid: "6",
			subLabel: "",
			text: "Please share your reason(s) for seeking supervision at this time.",
			type: "control_textarea",
		},
		null,
		null,
		{
			description: "",
			name: "howDid",
			qid: "9",
			subLabel: "",
			text: "How did you hear about Mollie Spiesman, LCSW?",
			type: "control_textbox",
		},
		null,
		{
			description: "",
			name: "soThat",
			qid: "11",
			subLabel: "",
			text: "So that we can schedule a brief call, please list your availability over the next week. I will reach out within 24 business hours to confirm a time. ",
			type: "control_textarea",
		},
		{
			description: "",
			name: "inWhat",
			qid: "12",
			subLabel: "",
			text: "In what state(s) are you licensed?",
			type: "control_textbox",
		},
		null,
		null,
		null,
		null,
		null,
		{
			description: "",
			name: "whereDo",
			qid: "18",
			subLabel: "",
			text: "Where do you currently work? Please provide a website if applicable.",
			type: "control_textarea",
		},
		{
			description: "",
			name: "licenseCredentials",
			qid: "19",
			subLabel: "",
			text: "License Credentials",
			type: "control_textbox",
		},
	]);
}, 20);