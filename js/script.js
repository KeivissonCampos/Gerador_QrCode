const container = document.querySelector(".container");
const qrcodeInput = document.querySelector("#qr-code input");
const geradorButton = document.querySelector("#qr-code button");
const qrcodeImg = document.querySelector("#img-qrcode img");

function geradorQrCode(){
    const qrcodeInputValue = qrcodeInput.value;  

    if(!qrcodeInputValue) return;
    
    geradorButton.innerText = "Gerando código...";

    console.log(qrcodeImg);

    qrcodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrcodeInput.value}`;

    qrcodeImg.addEventListener("load", () =>{
        container.classList.add("active");
        geradorButton.innerText = "Gerar QR Code";
    })
    
}

geradorButton.addEventListener("click", () => {
    geradorQrCode();
})

qrcodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        geradorQrCode();
    }
});

qrcodeInput.addEventListener("keyup", (e) => {
    if(!qrcodeInput.value){
        container.classList.remove("active");
        geradorButton.innerText = "Gerar QR Code";
    }
});