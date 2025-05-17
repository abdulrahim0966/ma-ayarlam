let teamA = [];
let teamB = [];

function addPlayer(team) {
  const inputId = team === 'A' ? 'playerAInput' : 'playerBInput';
  const listId = team === 'A' ? 'teamAList' : 'teamBList';
  const input = document.getElementById(inputId);
  const playerName = input.value.trim();

  if (playerName) {
    if (team === 'A') {
      teamA.push(playerName);
    } else {
      teamB.push(playerName);
    }

    const list = document.getElementById(listId);
    const li = document.createElement('li');
    li.textContent = playerName;
    list.appendChild(li);

    input.value = '';
    saveTeamsToLocalStorage();
  }
}

function saveTeamsToLocalStorage() {
  localStorage.setItem('teamA', JSON.stringify(teamA));
  localStorage.setItem('teamB', JSON.stringify(teamB));
}
