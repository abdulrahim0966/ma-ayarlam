window.onload = function () {
  const matchData = JSON.parse(localStorage.getItem("matchData"));

  if (!matchData) {
    alert("Henüz maç ayarlanmadı.");
    return;
  }

  const teamAList = document.getElementById("teamAPlayers");
  const teamBList = document.getElementById("teamBPlayers");
  const fieldSpan = document.getElementById("fieldName");
  const timeSpan = document.getElementById("matchTime");

  // Takım A oyuncuları
  matchData.teamA.forEach(player => {
    const li = document.createElement("li");
    li.textContent = player;
    teamAList.appendChild(li);
  });

  // Takım B oyuncuları
  matchData.teamB.forEach(player => {
    const li = document.createElement("li");
    li.textContent = player;
    teamBList.appendChild(li);
  });

  // Halı saha ve zaman bilgileri
  fieldSpan.textContent = matchData.field || "Belirtilmemiş";
  timeSpan.textContent = matchData.time || "Belirtilmemiş";
};
