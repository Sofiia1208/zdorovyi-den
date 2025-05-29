
function runSkinTest() {
  const types = ["Жирна", "Суха", "Комбінована", "Нормальна"];
  const result = types[Math.floor(Math.random() * types.length)];
  document.getElementById("skin-result").innerText = "Ваш тип шкіри: " + result;
}
function runSleepTest() {
  const quality = ["Чудовий", "Середній", "Низький"];
  const result = quality[Math.floor(Math.random() * quality.length)];
  document.getElementById("sleep-result").innerText = "Якість вашого сну: " + result;
}
