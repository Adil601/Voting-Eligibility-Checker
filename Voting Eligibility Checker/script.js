const myText = document.getElementById('myText');
const mySubmit = document.getElementById('mySubmit');
const resultElement = document.getElementById('resultElement');

mySubmit.onclick = function() {
    let age = myText.value;
    age = Number(age);

    if (age >= 100) {
        resultElement.innerHTML = "You are TOO OLD to vote.";
    } else if (age === 0 || isNaN(age)) {
        resultElement.innerHTML = "Invalid input! Please enter a valid age.";
    } else if (age >= 18) {
        resultElement.innerHTML = "You are eligible to vote!";
    } else {
        resultElement.innerHTML = "You must be 18 or older to vote.";
    }
};
