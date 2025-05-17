// Takım A oyuncularını alıp listele
const teamAPlayers = JSON.parse(localStorage.getItem("teamAPlayers")) || [];
const teamAList = document.getElementById("teamAPlayers");
teamAPlayers.forEach(player => {
  const li = document.createElement("li");
  li.textContent = player;
  teamAList.appendChild(li);
});

// Takım B oyuncularını alıp listele
const teamBPlayers = JSON.parse(localStorage.getItem("teamBPlayers")) || [];
const teamBList = document.getElementById("teamBPlayers");
teamBPlayers.forEach(player => {
  const li = document.createElement("li");
  li.textContent = player;
  teamBList.appendChild(li);
});

// Halı saha ismini ekle
const fieldName = localStorage.getItem("selectedField") || "Belirtilmedi";
document.getElementById("fieldName").textContent = fieldName;

// Maç zamanını ekle
const matchTime = localStorage.getItem("selectedTime") || "Belirtilmedi";
document.getElementById("matchTime").textContent = matchTime;
