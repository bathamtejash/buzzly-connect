const emailDomains = [
  "@gmail.com",
  "@yahoo.com",
  "@outlook.com",
  "@hotmail.com",
  "@icloud.com",
  "@proton.me",
  "@college.edu"
];

const emailInput = document.getElementById("email");
const emailBox = document.getElementById("emailSuggestions");


emailInput.addEventListener("input", () => {
  const text = emailInput.value;
  emailBox.innerHTML = ""; 

  
  if (!text.includes("@")) {
    emailBox.style.display = "none";
    return;
  }

  const [name, typedDomain] = text.split("@");

  
  const matches = emailDomains.filter(d =>
    d.startsWith("@" + typedDomain)
  );

 
  if (matches.length === 0) {
    emailBox.style.display = "none";
    return;
  }

 
  matches.forEach(domain => {
    const li = document.createElement("li");
    li.textContent = name + domain;

    li.onclick = () => {
      emailInput.value = li.textContent;
      emailBox.style.display = "none";
    };

    emailBox.appendChild(li);
  });

  emailBox.style.display = "block";
});

document.addEventListener("click", (event) => {
  if (event.target !== emailInput) {
    emailBox.style.display = "none";
  }
});
