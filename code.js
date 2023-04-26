// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

// Your Code Here.
let submitButton = document.getElementById("submitButton");

let submitForm = function(event) {
    let nameInput = document.getElementById("nameInput");
    let emailInput = document.getElementById("emailInput");
    let textInput = document.getElementById("textInput");

    let contactName = nameInput.value;
    let emailAddress = emailInput.value;
    let userMessage = textInput.value;

    event.preventDefault();
    alert(`Thank you ${contactName} for reaching out! We will reach back out to your email at ${emailAddress} as soon as possible regarding your message: \n\n"${userMessage}"`)
}

submitButton.addEventListener("click", submitForm);