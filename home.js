const suggestions = [
  "Home",
  "Explore",
  "Notifications",
  "Messages",
  "Bookmarks",
  "Dev Tips",
  "Campus Festival (fictional)",
  "Open-source Projects",
  "UI Components",
  "Study Notes",
  "Micro-interactions"
];


const input = document.getElementById("searchInput");
const box = document.getElementById("suggestions");


input.addEventListener("keyup", () => {
  const text = input.value.toLowerCase().trim();
  box.innerHTML = "";

  if (!text) {
    box.style.display = "none";
    return;
  }

  const matches = suggestions.filter(item =>
    item.toLowerCase().includes(text)
  );

  if (matches.length === 0) {
    box.style.display = "none";
    return;
  }

  matches.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = item;

    listItem.onclick = () => {
      input.value = item;
      box.style.display = "none";
    };

    box.appendChild(listItem);
  });

  box.style.display = "block";
});


document.addEventListener("click", e => {
  if (!input.contains(e.target)) {
    box.style.display = "none";
  }
});
