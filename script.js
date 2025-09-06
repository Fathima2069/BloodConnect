// ✅ Show alert when clicking the top "Join as a Donor" button
document.querySelector("button").addEventListener("click", function () {
  alert("Thank you for joining as a donor!");
});

// ✅ Function to update total donor count
function updateDonorCount() {
  const count = document.querySelectorAll("ul li").length;
  document.getElementById("donorCount").innerHTML = `<strong>Total Donors:</strong> ${count}`;
}

// Run count once when page loads
updateDonorCount();

// ✅ Handle form submission (Add donor)
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // stop page reload

  const name = event.target[0].value;
  const bloodGroup = event.target[1].value;

  // Create new donor list item with delete button (trash icon)
  const li = document.createElement("li");
  li.innerHTML = `${name} - <span>${bloodGroup}</span> <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>`;

  // Add to donor list
  document.querySelector("ul").appendChild(li);

  // Reset form fields
  event.target.reset();

  // Show thank you message
  const msg = document.getElementById("thankyou");
  msg.style.display = "block";

  // Hide thank you after 3 seconds
  setTimeout(() => {
    msg.style.display = "none";
  }, 3000);

  // Update donor count
  updateDonorCount();

  // Highlight new donor
  li.classList.add("highlight");
  setTimeout(() => {
    li.classList.remove("highlight");
  }, 2000);
});

// ✅ Delete donor with confirmation (works with 🗑️ icon)
document.querySelector("ul").addEventListener("click", function (event) {
  if (event.target.closest(".delete-btn")) {
    const donorName = event.target.closest("li").textContent.replace("🗑️", "").trim();
    if (confirm(`Are you sure you want to delete ${donorName}?`)) {
      event.target.closest("li").remove(); // remove donor
      updateDonorCount(); // update count
    }
  }
});

// 🔍 Search donors
document.getElementById("search").addEventListener("keyup", function () {
