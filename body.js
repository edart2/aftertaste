document.addEventListener("DOMContentLoaded", function() {
    var categoryOnClickElements = document.querySelectorAll('[taste="categoryOnClick"]');
    
    categoryOnClickElements.forEach(function(element) {
        element.addEventListener("click", function() {
            element.style.display = "none";
        });
    });
});
