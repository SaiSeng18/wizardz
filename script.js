let isOpen = false;
let isDarkTheme = false;
let navOverlay = document.querySelector(".nav-overlay");
let theme = document.querySelector(".theme");

function setIsOpen() {
	isOpen = !isOpen; // Toggle isOpen (true becomes false, and vice versa)

	if (isOpen) {
		navOverlay.classList.add("active");
	} else {
		navOverlay.classList.remove("active");
	}
}

function toggleTheme() {
	isDarkTheme = !isDarkTheme;

	document.body.classList.toggle("dark-theme", isDarkTheme);
}
