const email = sessionStorage.getItem("email");
const password = sessionStorage.getItem("password");
const qrcode = new QRCode("output", {
  text: email,
  width: 256,
  height: 256,
  colorDark: "#990000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H,
});

document.getElementById("#qrcode").innerHTML = qrcode;
