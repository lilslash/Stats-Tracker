
document.querySelector('#game-name').addEventListener("change", gameChoosen);

let game_name = document.querySelector('#game-name').value;
gameChoosen();
function gameChoosen() {
  game_name = document.querySelector('#game-name').value;
  console.log("DDL", game_name);

  if (game_name === "Apex") {
    //show the partials 
    document.querySelector('#showApex').style.display = "block";
    document.querySelector('#showFortnite').style.display = "none";
  }
  else {
    document.querySelector('#showApex').style.display = "none";
    document.querySelector('#showFortnite').style.display = "block";
  }
}


const apexStatsHandler = async (event) => {
  event.preventDefault();

  // Collect values from stats form
  //game_name = document.querySelector('#game-name').value;
  let kills;
  let wins;
  let matches_played;

  if (game_name === "Apex") {
    kills = document.querySelector('#kills').value.trim();
    wins = document.querySelector('#wins').value.trim();
    matches_played = document.querySelector('#matches-played').value.trim();
  } else if (game_name === "Fortnite") {
    kills = document.querySelector('#fortnite-kills').value.trim();
    wins = document.querySelector('#fortnite-wins').value.trim();
    matches_played = document.querySelector('#fortnite-matches-played').value.trim();
  }

  console.log("Game data ", game_name, kills, wins, matches_played);
  // Send post request to battle-royale endpoint
  const response = await fetch('/api/battle-royale', {
    method: 'POST',
    body: JSON.stringify({ game_name, kills, wins, matches_played }),
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/profile');
  } else {
    alert('Failed to add stats');
  };
};



// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/players/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete player');
//     }
//   }
// };

document
  .querySelector('.new-stats-form')
  .addEventListener('submit', apexStatsHandler);

// document
//   .querySelector('.player-list')
//   .addEventListener('click', delButtonHandler);
