const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");

function generateQR(baseUrl) {
  if (qrText.value.length > 0) {
    qrImg.src = baseUrl + qrText.value;
    imgBox.classList.add("showImg");
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}
