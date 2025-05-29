
function calculateScore() {
  const q1 = document.querySelector('input[name="q1"]:checked');
  if (!q1) {
    alert("Будь ласка, оберіть варіант відповіді");
    return;
  }

  let score = parseInt(q1.value);
  let resultText = "";

  if (score <= 5) {
    resultText = "Вам слід покращити режим сну";
  } else if (score <= 8) {
    resultText = "Ваш режим сну в нормі, але є резерв для покращення";
  } else {
    resultText = "Чудово! Ваш сон відповідає нормам";
  }

  document.getElementById("result").innerText = resultText;
}
