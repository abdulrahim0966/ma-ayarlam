// Oyuncu listesi (Önceden tanımlanmış)
let players = [
  "Ahmet", "Mehmet", "Ali", "Veli", "Can", "Burak", "Emir", "Onur",
  "Murat", "Deniz", "Hakan", "Serkan", "Sefa", "Cem", "Berk", "Efe"
];

// Halı saha seçimi butonları
const yolavaButton = document.getElementById("yolava");
const termalButton = document.getElementById("termal");
const arumutluButton = document.getElementById("arumutlu");
const fieldsList = document.getElementById("fields-list");

// Zaman seçimi
const timeSelect = document.getElementById("time-select");

// Seçilen halı saha ve oyuncular
let selectedField = [];
let selectedPlayers = {
  goalkeeper: null,
  forwards: [],
  midfielders: [],
  defenders: []
};

// Saat dilimlerini oluştur
function populateTimeSelect() {
  let timeOptions = [];
  for (let hour = 12; hour <= 23; hour++) {
    let nextHour = hour + 1;
    if (nextHour > 23) nextHour = 0;
    let hourStr = hour < 10 ? `0${hour}` : hour;
    let nextHourStr = nextHour < 10 ? `0${nextHour}` : nextHour;
    timeOptions.push(`${hourStr}:${nextHourStr}`);
  }
  timeOptions.forEach(option => {
    const optionElem = document.createElement("option");
    optionElem.value = option;
    optionElem.textContent = `${option}`;
    timeSelect.appendChild(optionElem);
  });
}

// Halı saha seçim işlemi
yolavaButton.addEventListener("click", () => {
  if (!selectedField.includes("Yolava Halı Saha")) {
    selectedField.push("Yolava Halı Saha");
    updateFieldList();
  }
});
termalButton.addEventListener("click", () => {
  if (!
