document.addEventListener("DOMContentLoaded", function () {
    const categories = ["Personal", "Work", "Shopping","Promise", "Health","Fitness", "Education", "Finance"];
    const categoryDropdown = document.getElementById("categoryDropdown");

    if (categoryDropdown) {
        categories.forEach(category => {
            let option = document.createElement("option");
            option.value = category;
            option.textContent = category;
            categoryDropdown.appendChild(option);
        });
    } else {
        console.error("Dropdown kategori tidak ditemukan.");
    }
});

