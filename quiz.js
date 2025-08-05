// Declare the function
function checkAnswer() {
    const correctAnswer = "4";

    // Get the selected radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Check if an option is selected
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer!";
        return;
    }

    const userAnswer = selectedOption.value;

    // Compare the user's answer
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the Submit Answer button
document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById("submit-answer");
    submitButton.addEventListener("click", checkAnswer);
});
