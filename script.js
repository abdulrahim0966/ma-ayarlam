// Oyuncu Listesi
let playerList = [
  "Ahmet", "Mehmet", "Ali", "Veli", "Can", "Burak", "Emir", "Onur",
  "Murat", "Deniz", "Hakan", "Serkan", "Sefa", "Cem", "Berk", "Efe"
];

// HTML elemanları
const playerListContainer = document.getElementById("playerList");
const addPlayerBtn = document.getElementById("addPlayerBtn");
const removePlayerBtn = document.getElementById("removePlayerBtn");

// Oyuncu listesi güncelleniyor
function updatePlayerList() {
  playerListContainer.innerHTML = ""; // Listeyi temizle
  playerList.forEach(player => {
    const li = document.createElement("li");
    li.textContent = player;
    playerListContainer.appendChild(li);
  });
}

// Oyuncu ekleme
addPlayerBtn.addEventListener("click", () => {
  const newPlayerName = prompt("Oyuncu adını girin: ");
  if (newPlayerName && !playerList.includes(newPlayerName)) {
    playerList.push(newPlayerName); // Yeni oyuncu ekle
    updatePlayerList();
  } else if (playerList.includes(newPlayerName)) {
    alert("Bu oyuncu zaten mevcut!");
  }
});

// Oyuncu çıkarma
removePlayerBtn.addEventListener("click", () => {
  const playerToRemove = prompt("Çıkarılacak oyuncunun adını girin: ");
  const playerIndex = playerList.indexOf(playerToRemove);
  
  if (playerIndex !== -1) {
    playerList.splice(playerIndex, 1); // Oyuncuyu çıkar
    updatePlayerList();
  } else {
    alert("Bu oyuncu listede yok!");
  }
});

// İlk başta listeyi güncelle
updatePlayerList();
