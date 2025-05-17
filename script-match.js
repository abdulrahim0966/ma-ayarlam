document.addEventListener("DOMContentLoaded", () => {
  renderTeamPlayers();
  populateTimeOptions();

  document.getElementById("yolava").addEventListener("click", () => setField("Yolava Halı Saha"));
  document.getElementById("termal").addEventListener("click", () => setField("Termal Halı Saha"));
  document.getElementById("arumutlu").addEventListener("click", () => setField("Armutlu Halı Saha"));
  document.getElementById("time-select").addEventListener("change", updateSelectedTime);
  document.getElementById("setupMatch").addEventListener("click", saveMatchData);
});

function renderTeamPlayers() {
  const teamA = JSON.parse(localStorage.getItem("teamAPlayers")) || [];
  const teamB = JSON.parse(localStorage.getItem("teamBPlayers")) || [];

  const teamAList = document.getElementById("teamAList");
  const teamBList = document.getElementById("teamBList");

  teamAList.innerHTML = "";
  teamBList.innerHTML = "";

  teamA.forEach(player => {
    const li = document.createElement("li");
    li.textContent = player;
    teamAList.appendChild(li);
  });

  teamB.forEach(player => {
    const li = document.createElement("li");
    li.textContent = player;
    teamBList.appendChild(li);
  });
}

function setField(fieldName) {
  document.getElementById("selectedField").textContent = fieldName;
}

function populateTimeOptions() {
  const select = document.getElementById("time-select");
  for (let hour = 8; hour <= 17; hour++) {
    const option = document.createElement("option");
    option.value = `${hour}:00`;
    option.textContent = `${hour}:00`;
    select.appendChild(option);
  }
}

function updateSelectedTime() {
  const selectedTime = document.getElementById("time-select").value;
  document.getElementById("selectedTime").textContent = selectedTime;
}

function saveMatchData() {
  const field = document.getElementById("selectedField").textContent;
  const time = document.getElementById("time-select").value;

  if (!field || !time) {
    alert("Lütfen saha ve zaman seçin!");
    return;
  }

  localStorage.setItem("selectedField", field);
  localStorage.setItem("selectedTime", time);

  window.location.href = "status.html";
}
