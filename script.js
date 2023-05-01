const quizForm = document.getElementById("quiz-form");
const quizResults = document.getElementById("quiz-results");
const tryAgainButton = document.getElementById("try-again");

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Verifica se todas as questões foram respondidas
  const q1Answered = quizForm.elements["q1"].value !== "";
  const q2Answered = quizForm.elements["q2"].value !== "";
  const q3Answered = quizForm.elements["q3"].value !== "";
  

  if (!q1Answered || !q2Answered || !q3Answered) {
    alert("Por favor, responda todas as questões.");
    return;
  }

  // Obtém as respostas do usuário
  const q1Answer = quizForm.elements["q1"].value;
  const q2Answer = quizForm.elements["q2"].value;
  const q3Answer = quizForm.elements["q3"].value;

  // Verifica as respostas corretas
  const correctAnswers = {
    q1: "a",
    q2: "d",
    q3: "c"
  };

  let numCorrect = 0;

  if (q1Answer === correctAnswers.q1) {
    numCorrect++;
  }

  if (q2Answer === correctAnswers.q2) {
    numCorrect++;
  }

  if (q3Answer === correctAnswers.q3) {
    numCorrect++;
  }

  // Mostra os resultados
  const percentCorrect = (numCorrect / 3) * 100;
  quizResults.innerHTML = `Você acertou ${numCorrect} de 3 questões (${percentCorrect.toFixed(0)}%).`;

  // Mostra o botão "Tentar novamente"
  tryAgainButton.style.display = "block";
});

tryAgainButton.addEventListener("click", () => {
  // Reseta o formulário e os resultados
  quizForm.reset();
  quizResults.innerHTML = "";
  tryAgainButton.style.display = "none";
});