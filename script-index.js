// Elemanları seç
const addPlayerA = document.getElementById('addPlayerA');
const addPlayerB = document.getElementById('addPlayerB');
const teamAList = document.getElementById('teamAList');
const teamBList = document.getElementById('teamBList');

// LocalStorage’dan yükle ya da boş dizi oluştur
let teamAPlayers = JSON.parse(localStorage.getItem('teamAPlayers')) || [];
let teamBPlayers = JSON.parse(localStorage.getItem('teamBPlayers')) || [];

// Listeyi güncelle
function renderTeams() {
  // Takım A listesi temizle ve yenile
  teamAList.innerHTML = '';
  teamAPlayers.forEach(player => {
    const li = document.createElement('li');
    li.textContent = player;
    teamAList.appendChild(li);
  });

  // Takım B listesi temizle ve yenile
  teamBList.innerHTML = '';
  teamBPlayers.forEach(player => {
    const li = document.createElement('li');
    li.textContent = player;
    teamBList.appendChild(li);
  });
}

// Oyuncu ekleme fonksiyonu
function addPlayer(team) {
  if (team === 'A' && teamAPlayers.length >= 8) {
    alert('Takım A için en fazla 8 oyuncu ekleyebilirsiniz.');
    return;
  }
  if (team === 'B' && teamBPlayers.length >= 8) {
    alert('Takım B için en fazla 8 oyuncu ekleyebilirsiniz.');
    return;
  }

  const playerName = prompt('Oyuncu ismini girin:').trim();

  if (!playerName) {
    alert('Geçerli bir isim giriniz.');
    return;
  }

  // Aynı oyuncu diğer takımda var mı kontrol et
  if (team === 'A' && teamBPlayers.includes(playerName)) {
    alert(`${playerName} zaten Takım B'de.`);
    return;
  }
  if (team === 'B' && teamAPlayers.includes(playerName)) {
    alert(`${playerName} zaten Takım A'da.`);
    return;
  }

  // Aynı oyuncu kendi takımda var mı kontrol et
  if ((team === 'A' && teamAPlayers.includes(playerName)) || (team === 'B' && teamBPlayers.includes(playerName))) {
    alert(`${playerName} zaten bu takımda.`);
    return;
  }

  // Oyuncuyu ekle
  if (team === 'A') {
    teamAPlayers.push(playerName);
    localStorage.setItem('teamAPlayers', JSON.stringify(teamAPlayers));
  } else {
    teamBPlayers.push(playerName);
    localStorage.setItem('teamBPlayers', JSON.stringify(teamBPlayers));
  }

  renderTeams();
}

// Event listenerlar
addPlayerA.addEventListener('click', () => addPlayer('A'));
addPlayerB.addEventListener('click', () => addPlayer('B'));

// Sayfa yüklendiğinde listeleri göster
renderTeams();
