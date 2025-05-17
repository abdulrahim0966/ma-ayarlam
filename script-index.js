// Takım oyuncuları dizileri
let teamAPlayers = [];
let teamBPlayers = [];

// Element referansları
const inputTeamA = document.getElementById('inputTeamA');
const addTeamABtn = document.getElementById('addTeamA');
const listTeamA = document.getElementById('listTeamA');

const inputTeamB = document.getElementById('inputTeamB');
const addTeamBBtn = document.getElementById('addTeamB');
const listTeamB = document.getElementById('listTeamB');

const goToMatchBtn = document.getElementById('goToMatch');

// Fonksiyon: Yeni oyuncu ekle (dizi ve listeye)
function addPlayer(teamArray, listElement, playerName) {
  if (playerName.trim() === '') {
    alert('Oyuncu ismi boş olamaz.');
    return false;
  }
  if (teamArray.includes(playerName)) {
    alert('Bu oyuncu zaten eklendi.');
    return false;
  }
  teamArray.push(playerName);
  const li = document.createElement('li');
  li.textContent = playerName;
  listElement.appendChild(li);
  return true;
}

// Takım A'ya oyuncu ekleme
addTeamABtn.addEventListener('click', () => {
  const name = inputTeamA.value;
  if (addPlayer(teamAPlayers, listTeamA, name)) {
    inputTeamA.value = '';
  }
});

// Takım B'ye oyuncu ekleme
addTeamBBtn.addEventListener('click', () => {
  const name = inputTeamB.value;
  if (addPlayer(teamBPlayers, listTeamB, name)) {
    inputTeamB.value = '';
  }
});

// Maç Ayarla butonuna basınca kontrol ve sayfa değişimi
goToMatchBtn.addEventListener('click', () => {
  if (teamAPlayers.length === 0 || teamBPlayers.length === 0) {
    alert('Lütfen her iki takıma da en az bir oyuncu ekleyin.');
    return;
  }

  // Oyuncuları localStorage'a kaydet (JSON string olarak)
  localStorage.setItem('teamAPlayers', JSON.stringify(teamAPlayers));
  localStorage.setItem('teamBPlayers', JSON.stringify(teamBPlayers));

  // Maç sayfasına yönlendir
  window.location.href = 'match.html';
});
