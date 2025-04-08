document.addEventListener("DOMContentLoaded", function () {
    const modeToggle = document.getElementById("modeToggle");
    const modeText = document.getElementById("modeText");
    const body = document.body;

    // Check if dark mode is already enabled
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        modeToggle.checked = true;
        modeText.textContent = "Dark";
    }

    modeToggle.addEventListener("change", function () {
        if (modeToggle.checked) {
            body.classList.add("dark-mode");
            modeText.textContent = "Dark";
            localStorage.setItem("darkMode", "enabled");
        } else {
            body.classList.remove("dark-mode");
            modeText.textContent = "Light";
            localStorage.setItem("darkMode", "disabled");
        }
    });
});

function checkPassword() {
    let password = document.getElementById("passwordInput").value;
    if (password === "smahi143") { 
        document.getElementById("passwordPopup").style.display = "none";
        
        let welcomeBox = document.getElementById("welcomeAnimation");
        let welcomeText = document.getElementById("welcomeText");

        welcomeBox.style.display = "block";
        welcomeText.innerText = "Mahi ji ye website sirf tumhare liye hai";

        setTimeout(() => {
            welcomeText.innerText = "Mahi ji Dark mode me dekhna 🌙";
        }, 3000);

        setTimeout(() => {
            welcomeText.innerText = "Loading...";
        }, 8000);

        setTimeout(() => {
            welcomeBox.style.display = "none";
            document.getElementById("mainContent").classList.remove("hidden");
        }, 10000);
    } else {
        alert("Wrong Password!");
    }
}

// 🌟 Mahi Video Toggle
const mahiVideoToggle = document.getElementById("mahiVideoToggle");
const mahiVideoContainer = document.getElementById("mahiVideoContainer");

if (mahiVideoToggle) {
    mahiVideoToggle.addEventListener("change", function () {
        mahiVideoContainer.style.display = this.checked ? "block" : "none";
    });
}

// 🎬 Edited Video Toggle
const editVideoToggle = document.getElementById("editVideoToggle");
const editVideoContainer = document.getElementById("editVideoContainer");

if (editVideoToggle) {
    editVideoToggle.addEventListener("change", function () {
        editVideoContainer.style.display = this.checked ? "block" : "none";
    });
}

// 📸 Scroll Animation (Fix Extra Photos on Toggle OFF)
const hiddenPhotos = document.querySelectorAll(".hidden-photo");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-photo");
            entry.target.classList.remove("hidden-photo");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

hiddenPhotos.forEach(photo => observer.observe(photo));

// 🌸 Mahi Photo Toggle
const mahiPhotoToggle = document.getElementById("mahiPhotoToggle");
const mahiPhotoContainer = document.getElementById("mahiPhotoContainer");

// Initially hide the photo container
mahiPhotoContainer.style.display = "none"; // Ensure it's hidden by default

if (mahiPhotoToggle) {
    mahiPhotoToggle.addEventListener("change", function () {
        // Toggling the photo container visibility
        mahiPhotoContainer.style.display = this.checked ? "block" : "none";
    });
}

// 👀 Scroll Animation for Mahi's Photos
const mahiPhotos = document.querySelectorAll(".mahi-animated-photo");

window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY + window.innerHeight;

    mahiPhotos.forEach((photo) => {
        let photoPosition = photo.offsetTop + (photo.offsetHeight / 2);

        // Add animation class when photo comes into view
        if (scrollPosition > photoPosition) {
            photo.classList.add("mahi-show-photo");
        } else {
            photo.classList.remove("mahi-show-photo");
        }
    });
});

// 📸 Scroll Animation (Fix Extra Photos on Toggle OFF) - Ensure only one observer
const photoObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("mahi-show-photo");
            entry.target.classList.remove("hidden-photo");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

mahiPhotos.forEach(photo => {
    photoObserver.observe(photo);
});
// Ghibli Art Photo Toggle Functionality
const togglePhotoVisibility = document.getElementById("togglePhotoVisibility");
const photoContainer = document.getElementById("photoContainer");

// Initially hide the Ghibli Art Section
const ghibliArtSection = photoContainer.querySelector(".ghibli-art-section");
ghibliArtSection.style.display = "none"; // Hide Ghibli Art by default

if (togglePhotoVisibility) {
    togglePhotoVisibility.addEventListener("change", function () {
        // Show or hide Ghibli Art Section based on toggle state
        ghibliArtSection.style.display = this.checked ? "flex" : "none";
    });
}

// 🌙 Dark Mode Toggle
const toggleSwitch = document.getElementById("modeToggle");
if (toggleSwitch) {
    toggleSwitch.addEventListener("change", function () {
        if (this.checked) {
            document.body.classList.add("dark-mode");
            modeText.textContent = "Dark";
        } else {
            document.body.classList.remove("dark-mode");
            modeText.textContent = "Light";
        }
    });
}
