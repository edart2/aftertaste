
// Find elements with the attribute taste="categoryOnClick"
const categoryElements = document.querySelectorAll('[taste="categoryOnClick"]');

// Function to scale up the element
function scaleUpElement(event) {
    const element = event.target; // Get the clicked element
    element.classList.toggle('scaled-up'); // Toggle the scaled-up class
}

// Add click event listener to each element
categoryElements.forEach(element => {
    element.addEventListener('click', scaleUpElement);
});
