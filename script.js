let imgBox = document.querySelector("#img-box");
let QRImage = document.querySelector("#QR-image");
let QRText = document.querySelector("#QR-text");
let container = document.querySelector(".container");

function generateQR() {
    if (QRText.value.trim() === "") return; // Prevent empty input

    // Update the QR image source with the new text input value
    QRImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + QRText.value;

    // Trigger container expansion with smooth transition
    container.classList.add("expanded");

    // Add a slight delay so the image appears after expanding
    QRImage.classList.remove("visible");
    setTimeout(() => {
        QRImage.classList.add("visible");
    }, 300); // delay to match expansion
}
