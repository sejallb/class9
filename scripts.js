// Change Background Color
const changeColorButton = document.getElementById("changeColor");
const colorPicker = document.getElementById("colorPicker");

function changeBackgroundColor() {
    document.body.style.backgroundColor = colorPicker.value;
}

changeColorButton.addEventListener("click", changeBackgroundColor);

// Live Text Update
const textChanger = document.getElementById("textChanger");
const output = document.getElementById("output");

function updateText(event) {
    output.textContent = event.target.value || "Your text will appear here.";
}

textChanger.addEventListener("input", updateText);

// Alert Function
const showAlertButton = document.getElementById("showAlert");

function showAlert() {
    alert("Hello! Thanks for visiting the playground.");
}

showAlertButton.addEventListener("click", showAlert);
