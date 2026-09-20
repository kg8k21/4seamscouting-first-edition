const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const rows = [...document.querySelectorAll("#playerTableBody tr")];
let activeFilter = "all";

function applyFilters() {
  const term = searchInput.value.trim().toLowerCase();

  rows.forEach((row) => {
    const playerText = row.textContent.toLowerCase();
    const matchesSearch = playerText.includes(term);
    const position = row.dataset.position;
    const matchesFilter = activeFilter === "all" || position === activeFilter;

    row.style.display = matchesSearch && matchesFilter ? "" : "none";
  });
}

searchInput.addEventListener("input", applyFilters);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    applyFilters();
  });
});
