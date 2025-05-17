// script-match.js

// Sayfa yüklendiğinde çalışacak
window.onload = function() {
  // Takım oyuncularını index sayfasından localStorage'dan alıp dolduruyoruz
  const teamAPlayersSelect = document.getElementById('teamAPlayers');
  const teamBPlayersSelect = document.getElementById('teamBPlayers');

  let teamAPlayers = JSON.parse(localStorage.getItem('teamAPlayers')) || [];
  let teamBPlayers = JSON.parse(localStorage.getItem('teamBPlayers')) || [];

  // Takım A oyuncularını select içine ekle
  teamAPlayers.forEach(player => {
    let option = document.createElement('option');
    option.value = player;
    option.textContent = player;
    teamAPlayersSelect.appendChild(option);
  });

  // Takım B oyuncularını select içine ekle
  teamBPlayers.forEach(player => {
    let option = document.createElement('option');
    option.value = player;
    option.textContent = player;
    teamBPlayersSelect.appendChild(option);
  });

  // Halı saha seçimi butonları
  const fieldButtons = document.querySelectorAll('.field-buttons button');
  const selectedFieldDisplay = document.getElementById('selectedField');
  let selectedField = '';

  fieldButtons.forEach(button => {
    button.addEventListener('click', () => {
      selectedField = button.textContent;
      selectedFieldDisplay.textContent = `Seçilen Halı Saha: ${selectedField}`;
    });
  });

  // Zaman seçimi dropdownunu doldur
  const timeSelect = document.getElementById('time-select');
  for (let hour = 8; hour <= 17; hour++) {
    let displayHour = hour < 10 ? `0${hour}:00` : `${hour}:00`;
    let option = document.createElement('option');
    option.value = displayHour;
    option.textContent = displayHour;
    timeSelect.appendChild(option);
  }

  const selectedTimeDisplay = document.getElementById('selectedTime');
  selectedTimeDisplay.textContent = timeSelect.value;

  timeSelect.addEventListener('change', () => {
    selectedTimeDisplay.textContent = timeSelect.value;
  });

  // Maçı ayarla butonuna basıldığında seçilen bilgileri kaydet ve Son Durum sayfasına yönlendir
  document.getElementById('setupMatch').addEventListener('click', () => {
    if (!selectedField) {
      alert('Lütfen halı saha seçiniz!');
      return;
    }

    if (!timeSelect.value) {
      alert('Lütfen zaman seçiniz!');
      return;
    }

    // Seçilen oyuncuların dizilerini al
    const selectedTeamAPlayers = Array.from(teamAPlayersSelect.selectedOptions).map(opt => opt.value);
    const selectedTeamBPlayers = Array.from(teamBPlayersSelect.selectedOptions).map(opt => opt.value);

    if (selectedTeamAPlayers.length === 0 || selectedTeamBPlayers.length === 0) {
      alert('Lütfen her iki takımdan en az bir oyuncu seçiniz!');
      return;
    }

    // LocalStorage'a kaydet
    localStorage.setItem('selectedTeamAPlayers', JSON.stringify(selectedTeamAPlayers));
    localStorage.setItem('selectedTeamBPlayers', JSON.stringify(selectedTeamBPlayers));
    localStorage.setItem('selectedField', selectedField);
    localStorage.setItem('selectedTime', timeSelect.value);

    // Son Durum sayfasına git
    window.location.href = 'status.html';
  });
};
