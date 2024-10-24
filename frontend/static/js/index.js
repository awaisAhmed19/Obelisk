// Cache DOM elements
const page_Link = document.getElementById("link-button");
const service_list = document.getElementById("services_list");
const service_list_mobile = document.getElementById("service_list_mobile");
const service_footer_button = document.getElementById("service-footer-button");
const linkContainer = document.getElementById("links-container-id");
const hamburger = document.getElementById("hamburger-button");
const currentYear = document.getElementById("year");

// Toggle visibility for dropdown and mobile menu
function toggleClass(element, className) {
	element.classList.toggle(className);
}

// Add hover functionality for dropdown
function handleHover(show) {
	return () => {
		service_list.classList.toggle("show", show);
	};
}

// Navbar mouse events
page_Link.addEventListener("mouseenter", handleHover(true));
page_Link.addEventListener("mouseleave", handleHover(false));
service_list.addEventListener("mouseenter", handleHover(true));
service_list.addEventListener("mouseleave", handleHover(false));

// Toggle dropdown on click
page_Link.addEventListener("click", (e) => {
	e.preventDefault();
	toggleClass(service_list, "show");
});

// Mobile hamburger toggle
hamburger.addEventListener("click", (e) => {
	e.preventDefault();
	toggleClass(hamburger, "active");
	toggleClass(linkContainer, "active");
});

// Footer service toggle
service_footer_button.addEventListener("click", (e) => {
	e.preventDefault();
	toggleClass(service_list_mobile, "show");
});

// Set copyright year dynamically
currentYear.textContent = new Date().getFullYear();
