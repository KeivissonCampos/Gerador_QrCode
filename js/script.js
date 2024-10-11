const container = document.querySelector(".container");
const qrcodeInput = document.querySelector("#qr-code input");
const geradorButton = document.querySelector("#qr-code button");
const qrcodeImg = document.querySelector("#img-qrcode");
const downloadLink = document.querySelector("#download-link");

function geradorQrCode() {
    const qrcodeInputValue = qrcodeInput.value;

    if (!qrcodeInputValue) return;

    geradorButton.innerText = "Gerando código...";

    // Gera QR code em SVG
    const svgURL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrcodeInputValue}&format=svg`;
    
    // Atribui a URL ao src da imagem e ao href para download
    qrcodeImg.src = svgURL;
    downloadLink.href = svgURL;

    qrcodeImg.addEventListener("load", () => {
        container.classList.add("active");
        geradorButton.innerText = "Gerar QR Code";
    });
}

geradorButton.addEventListener("click", () => {
    geradorQrCode();
});

qrcodeInput.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        geradorQrCode();
    }
});

qrcodeInput.addEventListener("keyup", (e) => {
    if (!qrcodeInput.value) {
        container.classList.remove("active");
        geradorButton.innerText = "Gerar QR Code";
    }
});