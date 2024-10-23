// Navbar logic for service buttons
const page_Link = document.getElementById("link-button");
const service_list = document.getElementById("services_list");
const linkContainer = document.getElementById("links-container-id");
const hamburger = document.getElementById("hamburger-button");

// Function to toggle dropdown visibility
function toggleDropdown(e) {
	e.preventDefault();
	service_list.classList.toggle("show");
}

// Show the dropdown on mouse enter
page_Link.addEventListener("mouseenter", () => {
	service_list.classList.add("show");
});

// Hide the dropdown on mouse leave, but keep it open when hovering over the dropdown itself
page_Link.addEventListener("mouseleave", () => {
	if (!service_list.matches(":hover")) {
		service_list.classList.remove("show");
	}
});

// Keep the dropdown open when hovering over it
service_list.addEventListener("mouseenter", () => {
	service_list.classList.add("show");
});

// Hide the dropdown when leaving the dropdown
service_list.addEventListener("mouseleave", () => {
	service_list.classList.remove("show");
});

//mobile controls
function toggle_ham(e) {
	e.preventDefault();
	hamburger.classList.toggle("active");
	linkContainer.classList.toggle("active");
}

// Toggle dropdown on click
hamburger.addEventListener("click", toggle_ham);
page_Link.addEventListener("click", toggleDropdown);

// Copy right time block
document.getElementById("year").textContent = new Date().getFullYear();
