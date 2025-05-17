// Sayfa yüklendiğinde oyuncuları getir
window.onload = function () {
  const teamAPlayers = JSON.parse(localStorage.getItem("teamAPlayers")) || [];
  const teamBPlayers = JSON.parse(localStorage.getItem("teamBPlayers")) || [];

  const teamASelect = document.getElementById("teamAPlayers");
  const teamBSelect = document.getElementById("teamBPlayers");

  teamAPlayers.forEach(player => {
    const option = document.createElement("option");
    option.text = player;
    teamASelect.add(option);
  });

  teamBPlayers.forEach(player => {
    const option = document.createElement("option");
    option.text = player;
    teamBSelect.add(option);
  });

  // Zaman seçeneklerini doldur
  const timeSelect = document.getElementById("time-select");
  const hours = ["17:00", "18:00", "19:00", "20:00"];
  hours.forEach(hour => {
    const opt = document.createElement("option");
    opt.value = hour;
    opt.textContent = hour;
    timeSelect.appendChild(opt);
  });
};

// Halı saha seçimi
let selectedField = "";
document.getElementById("yolava").onclick = () => {
  selectedField = "Yolava Halı Saha";
  document.getElementById("selectedField").textContent = selectedField;
};
document.getElementById("termal").onclick = () => {
  selectedField = "Termal Halı Saha";
  document.getElementById("selectedField").textContent = selectedField;
};
document.getElementById("arumutlu").onclick = () => {
  selectedField = "Armutlu Halı Saha";
  document.getElementById("selectedField").textContent = selectedField;
};

// Zaman seçimi
document.getElementById("time-select").onchange = function () {
  document.getElementById("selectedTime").textContent = this.value;
};

// Maçı ayarla
document.getElementById("setupMatch").onclick = function () {
  const teamA = Array.from(document.getElementById("teamAPlayers").options).map(o => o.text);
  const teamB = Array.from(document.getElementById("teamBPlayers").options).map(o => o.text);
  const matchTime = document.getElementById("time-select").value;

  const matchData = {
    teamA,
    teamB,
    field: selectedField,
    time: matchTime
  };

  localStorage.setItem("matchData", JSON.stringify(matchData));
  window.location.href = "status.html";
};
