window.addEventListener('DOMContentLoaded', () => {
  const data = JSON.parse(localStorage.getItem('matchData'));

  if (!data) return;

  const { teamA, teamB, field, time } = data;

  const teamAList = document.getElementById('teamAPlayers');
  const teamBList = document.getElementById('teamBPlayers');
  const fieldName = document.getElementById('fieldName');
  const matchTime = document.getElementById('matchTime');

  teamA.forEach(player => {
    const li = document.createElement('li');
    li.textContent = player;
    teamAList.appendChild(li);
  });

  teamB.forEach(player => {
    const li = document.createElement('li');
    li.textContent = player;
    teamBList.appendChild(li);
  });

  fieldName.textContent = field;
  matchTime.textContent = time;
});

