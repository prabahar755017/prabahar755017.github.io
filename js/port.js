// Placeholder for any JavaScript functionality you want to add
console.log("Portfolio website is loaded!");
function openModal(title, description, image) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('modalImage').src = image;
    document.getElementById('projectModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
}

function closeModal() {
    const modal = document.getElementById("projectModal");
    modal.style.display = "none"; // Hide the modal
}

// Close the modal when the user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Toggle the mobile menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// Smooth scroll to section and highlight the active menu link
function navigateToSection(event, sectionId) {
    event.preventDefault();  // Prevent default link behavior

    // Scroll smoothly to the section
    const section = document.getElementById(sectionId);
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

    // Highlight the active menu link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => link.classList.remove('active'));  // Remove active class from all
    event.target.classList.add('active');  // Add active class to the clicked link

    // Close mobile menu (if open) after click
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.remove('show');
}

