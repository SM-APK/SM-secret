// Password Check
function checkPassword() {
    let password = document.getElementById("passwordInput").value;
    if (password === "shashikant mahi") { 
        document.getElementById("passwordPopup").style.display = "none";
        
        let welcomeBox = document.getElementById("welcomeAnimation");
        let welcomeText = document.getElementById("welcomeText");

        welcomeBox.style.display = "block"; // Welcome box ko dikhana

        // Pehle "Welcome TO SM Website" Show Hoga
        welcomeText.innerText = "Welcome TO SM Website";

        // 5 Sec Baad "Loading..." Show Karega
        setTimeout(() => {
            welcomeText.innerText = "Loading...";
        }, 5000);

        // 10 Sec Baad Website Open Hogi
        setTimeout(() => {
            welcomeBox.style.display = "none"; // Hide animation
            document.getElementById("mainContent").classList.remove("hidden"); // Website dikhana
            showPhotos(); // Photos animation chalu karna
        }, 10000);
    } else {
        alert("Wrong Password!");
    }
}



// Show Photos One by One
function showPhotos() {
    let photos = document.querySelectorAll(".animated-photo");
    photos.forEach((photo, index) => {
        setTimeout(() => {
            photo.classList.add("show-photo");
        }, index * 3000); // 3 sec delay between each photo
    });
}

const toggleSwitch = document.getElementById("modeToggle");
const modeText = document.getElementById("modeText");

toggleSwitch.addEventListener("change", function() {
    if (this.checked) {
        document.body.classList.add("dark-mode");
        modeText.textContent = "Dark";
    } else {
        document.body.classList.remove("dark-mode");
        modeText.textContent = "Light";
    }
});
