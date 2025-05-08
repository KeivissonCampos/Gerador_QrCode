document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const qrcodeInput = document.querySelector("#qr-code input");
    const geradorButton = document.querySelector("#qr-code button");
    const qrcodeImg = document.querySelector("#img-qrcode");
    const downloadLink = document.querySelector("#download-link");
    const downloadPng = document.querySelector("#download-png");
    const qrResult = document.querySelector("#qr-result");

    function gerarQrCode() {
        const valor = qrcodeInput.value.trim();
        if (!valor) return;

        geradorButton.innerText = "Gerando...";

        const svgURL = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(valor)}&format=svg`;
        const pngURL = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(valor)}&format=png`;

        qrcodeImg.src = svgURL;
        downloadLink.href = svgURL;
        downloadPng.href = pngURL;

        qrResult.style.display = "block";

        qrcodeImg.addEventListener("load", () => {
            geradorButton.innerText = "Gerar QR Code";
        });
    }

    geradorButton.addEventListener("click", gerarQrCode);

    qrcodeInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") gerarQrCode();
    });

    qrcodeInput.addEventListener("input", () => {
        if (!qrcodeInput.value.trim()) {
            qrResult.style.display = "none";
        }
    });
});
