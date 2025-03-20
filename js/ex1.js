const questions = [
    { statement: "2+2?", answer: "2+2 = 4" },
    { statement: "In which year did Christopher Columbus discover America?", answer: "1492" },
    { statement: "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?", answer: "The E letter" }
];

const contentDiv = document.getElementById("content");

questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.style.marginBottom = "10px";

    const questionText = document.createElement("p");
    questionText.innerHTML = `<strong>Question ${index + 1}:</strong> ${q.statement}`;

    const button = document.createElement("button");
    button.textContent = "Show answer";

    button.addEventListener("click", function () {
        const answerText = document.createElement("p");
        answerText.textContent = q.answer;
        answerText.style.fontStyle = "italic";

        questionDiv.removeChild(button);
        questionDiv.appendChild(answerText);
    });

    questionDiv.appendChild(questionText);
    questionDiv.appendChild(button);
    contentDiv.appendChild(questionDiv);
});
