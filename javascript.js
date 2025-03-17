document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting
        showPopup();
    });
});

function showPopup() {
    let popup = document.createElement("div");
    popup.textContent = "Successfully submitted!";
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.background = "#28a745";
    popup.style.color = "#fff";
    popup.style.padding = "20px";
    popup.style.borderRadius = "10px";
    popup.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
    popup.style.zIndex = "1000";
    popup.style.fontSize = "18px";
    popup.style.fontWeight = "bold";
    
    document.body.appendChild(popup);

//     setTimeout(() => {
//         popup.remove(); // Remove popup after 2 seconds
//     }, 2000);
}


// document.addEventListener("DOMContentLoaded", function () {
//     document.addEventListener("mousemove", createSmoke);
//     document.addEventListener("touchmove", createSmoke); // Fix for mobile
// });

// function createSmoke(event) {
//     let x = event.clientX || event.touches[0].clientX;
//     let y = event.clientY || event.touches[0].clientY;

//     let smoke = document.createElement("div");
//     smoke.classList.add("smoke");
//     smoke.style.left = `${x}px`;
//     smoke.style.top = `${y}px`;

//     document.body.appendChild(smoke);

//     setTimeout(() => {
//         smoke.remove();
//     }, 1500); // Increase duration for better visibility
// }
document.addEventListener("DOMContentLoaded", function () {
    let currentColor = getRandomColor(); // Initial smoke color

    // Change smoke color every 3 seconds
    setInterval(() => {
        currentColor = getRandomColor();
    }, 3000);

    // Mouse move event (desktop)
    document.addEventListener("mousemove", function (event) {
        createSmoke(event.clientX, event.clientY);
    });

    // Touch move event (mobile)
    document.addEventListener("touchmove", function (event) {
        let touch = event.touches[0];
        createSmoke(touch.clientX, touch.clientY);
    }, { passive: false });

    function createSmoke(x, y) {
        let smoke = document.createElement("div");
        smoke.classList.add("smoke");
        smoke.style.left = `${x}px`;
        smoke.style.top = `${y}px`;
        smoke.style.background = currentColor;

        document.body.appendChild(smoke);

        setTimeout(() => {
            smoke.remove();
        }, 1500);
    }

    function getRandomColor() {
        const colors = ["rgba(255, 69, 0, 0.7)", "rgba(0, 191, 255, 0.7)", "rgba(50, 205, 50, 0.7)", 
                        "rgba(255, 20, 147, 0.7)", "rgba(255, 255, 0, 0.7)", "rgba(75, 0, 130, 0.7)"];
        return colors[Math.floor(Math.random() * colors.length)];
    }
});
