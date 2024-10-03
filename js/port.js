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
