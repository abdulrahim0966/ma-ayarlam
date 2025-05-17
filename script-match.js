// LocalStorage'dan takımların oyuncularını çekiyoruz
const teamAPlayersSelect = document.getElementById('teamAPlayers');
const teamBPlayersSelect = document.getElementById('teamBPlayers');
const timeSelect = document.getElementById('time-select');
const selectedTimeDisplay = document.getElementById('selectedTime');
const fieldButtons = document.querySelectorAll('.field-buttons button');
const selectedFieldDisplay = document.getElementById('selectedField');
let selectedField = null;

// LocalStorage'dan oyuncuları al
const teamAPlayers = JSON.parse(localStorage.getItem('teamAPlayers')) || [];
const teamBPlayers = JSON.parse(localStorage.getItem('teamBPlayers')) || [];

// Dropdownları doldur
function populatePlayers(selectElement, players) {
  selectElement.innerHTML = '';
  players.forEach(player => {
    const option = document.createElement('option');
    option.value = player;
    option.textContent = player;
    selectElement.appendChild(option);
  });
}

populatePlayers(teamAPlayersSelect, teamAPlayers);
populatePlayers(teamBPlayersSelect, teamBPlayers);

// Zaman seçeneklerini doldur (örnek: 09:00 - 21:00 arası, 15'er dakikalık dilimler)
function populateTimeOptions() {
  const startHour = 9;
  const endHour = 21;
  for (let hour = startHour; hour <= endHour; hour++) {
    for (let min = 0; min < 60; min += 15) {
      const option = document.createElement('option');
      let displayHour = hour < 10 ? '0' + hour : hour;
      let displayMin = min === 0 ? '00' : min;
      option.value = `${displayHour}:${displayMin}`;
      option.textContent = `${displayHour}:${displayMin}`;
      timeSelect.appendChild(option);
    }
  }
}

populateTimeOptions();

// Zaman seçilince altında göster
timeSelect.addEventListener('change', () => {
  selectedTimeDisplay.textContent = `Seçilen Zaman: ${timeSelect.value}`;
});

// Halı saha butonlarına tıklayınca renk değişsin ve seçilen halı saha gösterilsin
fieldButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Önce diğerlerinin rengini sıfırla
    fieldButtons.forEach(btn => {
      btn.style.backgroundColor = '';
      btn.style.color = '';
    });

    // Tıklanan butonun rengi tersine dönsün
    button.style.backgroundColor = '#000';
    button.style.color = '#fff';

    selectedField = button.textContent;
    selectedFieldDisplay.textContent = `Seçilen Halı Saha: ${selectedField}`;
  });
});

// Maçı ayarla butonuna tıklanınca seçilen verileri alert ile gösterelim (veya ileride işle)
document.getElementById('setupMatch').addEventListener('click', () => {
  if (!selectedField) {
    alert('Lütfen halı saha seçiniz!');
    return;
  }
  if (!timeSelect.value) {
    alert('Lütfen zaman seçiniz!');
    return;
  }

  // Seçilen oyuncuları almak için
  const selectedTeamAPlayers = Array.from(teamAPlayersSelect.selectedOptions).map(opt => opt.value);
  const selectedTeamBPlayers = Array.from(teamBPlayersSelect.selectedOptions).map(opt => opt.value);

  if (selectedTeamAPlayers.length === 0 || selectedTeamBPlayers.length === 0) {
    alert('Lütfen her iki takımdan en az bir oyuncu seçiniz!');
    return;
  }

  alert(`Maç Ayarlandı!\n
Takım A Oyuncuları: ${selectedTeamAPlayers.join(', ')}\n
Takım B Oyuncuları: ${selectedTeamBPlayers.join(', ')}\n
Halı Saha: ${selectedField}\n
Zaman: ${timeSelect.value}`);
});
