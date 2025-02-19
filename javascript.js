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
