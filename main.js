document.addEventListener("DOMContentLoaded", function() {
  const changeColorButton = document.getElementById("changeColorButton");

  function toggleBackgroundColor() {
    const body = document.body;
    if (body.style.backgroundColor === "rgb(80, 80, 80)") {
      body.style.backgroundColor = "#f0f0f0"; // Cor de fundo original
      localStorage.setItem("backgroundColor", "original");
    } else {
      body.style.backgroundColor = "#505050"; // Nova cor de fundo
      localStorage.setItem("backgroundColor", "#505050");
    }
  }

  changeColorButton.addEventListener("click", toggleBackgroundColor);

  // Verificar o estado do plano de fundo no LocalStorage
  const backgroundState = localStorage.getItem("backgroundColor");
  if (backgroundState === "#505050") {
    document.body.style.backgroundColor = "#505050";
  }
});

