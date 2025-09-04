// Show thank you message
const msg = document.getElementById("thankyou");
msg.style.display = "block";

// Hide after 3 seconds
setTimeout(() => {
  msg.style.display = "none";
}, 3000);
li.classList.add("highlight");
setTimeout(() => {
  li.classList.remove("highlight");
}, 2000);
// Search filter
document.getElementById("search").addEventListener("keyup", function() {
  const filter = this.value.toLowerCase();
  const donors = document.querySelectorAll("ul li");
  donors.forEach(donor => {
    if (donor.textContent.toLowerCase().includes(filter)) {
      donor.style.display = "";
    } else {
      donor.style.display = "none";
    }
  });
});
function updateDonorCount() {
  const donors = document.querySelectorAll("ul li");
  document.getElementById("donorCount").textContent = "Total Donors: " + donors.length;
}

// Update count on page load
updateDonorCount();

// Update count when new donor is added
document.querySelector("form").addEventListener("submit", function() {
  updateDonorCount();
});
// Search filter
document.getElementById("search").addEventListener("keyup", function() {
  const filter = this.value.toLowerCase();
  const donors = document.querySelectorAll("ul li");
  donors.forEach(donor => {
    if (donor.textContent.toLowerCase().includes(filter)) {
      donor.style.display = "";
    } else {
      donor.style.display = "none";
    }
  });
});
function updateDonorCount() {
  const count = document.querySelectorAll("ul li").length;
  document.getElementById("donorCount").innerHTML = `<strong>Total Donors:</strong> ${count}`;
}
updateDonorCount();
// Blood group filter
document.getElementById("filter").addEventListener("change", function() {
  const selected = this.value.toLowerCase();
  const donors = document.querySelectorAll("ul li");
  donors.forEach(donor => {
    if (selected === "all" || donor.textContent.toLowerCase().includes(selected)) {
      donor.style.display = "";
    } else {
      donor.style.display = "none";
    }
  });
});


