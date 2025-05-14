document.addEventListener('DOMContentLoaded', function() {
  const goalkeeperSelect = document.getElementById('goalkeeper');
  const forwardsSelect = document.getElementById('forwards');
  const midfieldersSelect = document.getElementById('midfielders');
  const defendersSelect = document.getElementById('defenders');
  const fieldButtons = document.querySelectorAll('.field-buttons button');
  const timeSelect = document.getElementById('time-select');
  const fieldsList = document.getElementById('fields-list');
  const setupButton = document.getElementById('setupMatch');
  const timeDisplay = document.getElementById('time-display'); // Zamanı gösterecek alan

  let selectedGoalkeeper = null;
  let selectedForwards = [];
  let selectedMidfielders = [];
  let selectedDefenders = [];
  let selectedFields = [];
  let selectedTime = null;

  // Saat seçeneklerini ekleyelim
  const timeOptions = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
    "17:00 - 18:00",
    "18:00 - 19:00"
  ];

  // Zaman seçeneği dropdown'ına saatleri ekleme
  timeOptions.forEach(function(time) {
    const option = document.createElement('option');
    option.value = time;
    option.textContent = time;
    timeSelect.appendChild(option);
  });

  // Oyuncu seçimlerini yaparken, seçilen oyuncuları listeden kaldırma
  function updatePlayerSelections() {
    // Tüm pozisyonları güncelle
    const players = {
      'goalkeeper': selectedGoalkeeper,
      'forwards': selectedForwards,
      'midfielders': selectedMidfielders,
      'defenders': selectedDefenders
    };

    // Seçilen oyuncuları her pozisyondan kaldır
    updateSelectOptions(goalkeeperSelect, 'goalkeeper');
    updateSelectOptions(forwardsSelect, 'forwards');
    updateSelectOptions(midfieldersSelect, 'midfielders');
    updateSelectOptions(defendersSelect, 'defenders');
  }

  // Seçilen oyunculara göre select options'ı güncelle
  function updateSelectOptions(selectElement, position) {
    const selectedPlayers = {
      'goalkeeper': selectedGoalkeeper,
      'forwards': selectedForwards,
      'midfielders': selectedMidfielders,
      'defenders': selectedDefenders
    };

    const options = selectElement.querySelectorAll('option');
    options.forEach(option => {
      if (selectedPlayers[position]?.includes(option.value)) {
        option.disabled = true; // Seçilen oyuncuları devre dışı bırak
      } else {
        option.disabled = false;
      }
    });
  }

  // Oyuncu seçimlerini güncelleme
  goalkeeperSelect.addEventListener('change', function() {
    selectedGoalkeeper = goalkeeperSelect.value;
    updatePlayerSelections();
  });

  forwardsSelect.addEventListener('change', function() {
    selectedForwards = Array.from(forwardsSelect.selectedOptions).map(option => option.value);
    updatePlayerSelections();
  });

  midfieldersSelect.addEventListener('change', function() {
    selectedMidfielders = Array.from(midfieldersSelect.selectedOptions).map(option => option.value);
    updatePlayerSelections();
  });

  defendersSelect.addEventListener('change', function() {
    selectedDefenders = Array.from(defendersSelect.selectedOptions).map(option => option.value);
    updatePlayerSelections();
  });

  // Halı saha seçim butonlarına tıklama
  fieldButtons.forEach(button => {
    button.addEventListener('click', function() {
      const fieldName = button.id;

      if (!selectedFields.includes(fieldName)) {
        selectedFields.push(fieldName);
        button.style.backgroundColor = button.classList.contains('green') ? '#4caf50' : button.classList.contains('orange') ? '#fb8c00' : '#fbc02d'; // Seçildiğinde buton rengini tersine çevir
      } else {
        selectedFields = selectedFields.filter(field => field !== fieldName);
        button.style.backgroundColor = button.classList.contains('green') ? '#66bb6a' : button.classList.contains('orange') ? '#ffb74d' : '#fdd835'; // Buton rengini eski haline döndür
      }

      updateFieldsList();
    });
  });

  // Seçilen halı sahaları gösterme
  function updateFieldsList() {
    fieldsList.innerHTML = selectedFields.length > 0 ? selectedFields.join(', ') : 'Hiçbir saha seçilmedi.';
  }

  // Zaman seçiminde alt kısımda gösterme
  timeSelect.addEventListener('change', function() {
    selectedTime = timeSelect.value;
    updateTimeDisplay();
  });

  function updateTimeDisplay() {
    if (selectedTime) {
      timeDisplay.textContent = `Seçilen Zaman: ${selectedTime}`;
    } else {
      timeDisplay.textContent = '';
    }
  }

  // Maç ayarla butonuna tıklama
  setupButton.addEventListener('click', function() {
    if (selectedGoalkeeper && selectedForwards.length && selectedMidfielders.length && selectedDefenders.length && selectedFields.length && selectedTime) {
      alert(`Maç Ayarlandı! Seçilenler:
      Kaleci: ${selectedGoalkeeper}
      Forvetler: ${selectedForwards.join(', ')}
      Orta Sahalar: ${selectedMidfielders.join(', ')}
      Defanslar: ${selectedDefenders.join(', ')}
      Halı Sahalar: ${selectedFields.join(', ')}
      Zaman: ${selectedTime}`);
    } else {
      alert('Lütfen tüm bilgileri tamamlayın.');
    }
  });

});
