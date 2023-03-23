
const modal = document.querySelector(".modal");

function openModal() {
  modal.style.display = "flex";
  modal.classList.add("fade-in");
  modal.classList.remove("fade-out");
}

function closeModal() {
  modal.classList.add("fade-out");
  modal.classList.remove("fade-in");
  setTimeout(() => {
    modal.style.display = "none";
  }, 500);
}

const loader = document.querySelector(".loader");

const topContainer = document.querySelector(".top-container");
const loaderContainer = document.querySelector(".loader-container");
const loaderText = document.querySelector(".loader-text");
const myInput = document.querySelector("#myInput");
const body = document.querySelector("body");


function showPage() {
  loaderContainer.style.display = "none";
  topContainer.style.display = "unset";
  body.style.backgroundColor = "#05c46b"
}
function displayText() {
  loaderText.innerHTML = "Finished Loading";
}
function displayText2() {
  loaderText.innerHTML = "Opening website...";
}
function test(){
  const contact = confirm ('You seem to like this website, would you like to contact the creator feedback?');
  if (contact) {
    window.open('https://twitter.com/DarealKarimHa');  
    alert("Thanks for your feedback!")
  } else {
    alert("Oh no problem.")
 }
}
setTimeout(displayText, 3800);

setTimeout(displayText2, 4000);

setTimeout(showPage, 4100);

setTimeout(test, 480000);

function copy() {
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

}

function getFormData() {
  const form = document.getElementById('form-id');
  const formData = new FormData(form);
    
  console.log('Here is what i learned about you');
  for (const [key, value] of formData) {
    if (value) {
      console.log(`Your ${key} is: ${value}`);
    }
  }
}

const qrCode = document.querySelector(".qr-code");


function qrcodeOpen(){
  qrCode.style.display = 'flex';
}
function closeQrCode(){
  qrCode.style.display = 'none';
}

