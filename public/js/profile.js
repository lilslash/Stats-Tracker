
document.querySelector('#game-name').addEventListener("change", gameChosen);

let game_name = document.querySelector('#game-name').value;
let game_category;
gameChosen();

function gameChosen() {
  game_name = document.querySelector('#game-name').value;

  if (game_name === "Apex" || game_name === "Fortnite" || game_name === "Hyperscape") {
    game_category = "battleR";
    //show the partials 
    document.querySelector('#showBattleR').style.display = "block";
    document.querySelector('#showShooter').style.display = "none";
    document.querySelector('#showValorant').style.display = "none";
  }
  else if (game_name === "Halo" || game_name === "CoD: Black Ops") {
    game_category = "shooter";
    document.querySelector('#showBattleR').style.display = "none";
    document.querySelector('#showShooter').style.display = "block";
    document.querySelector('#showValorant').style.display = "none";
  }
  else if (game_name === "Valorant") {
    game_category = "valorant";
    document.querySelector('#showBattleR').style.display = "none";
    document.querySelector('#showShooter').style.display = "none";
    document.querySelector('#showValorant').style.display = "block";
  }
  else {
    game_category = "none";
    document.querySelector('#showBattleR').style.display = "none";
    document.querySelector('#showShooter').style.display = "none";
    document.querySelector('#showValorant').style.display = "none";
  }
}


const statsHandler = async (event) => {
  event.preventDefault();

  // Collect values from stats form
  //game_name = document.querySelector('#game-name').value;
  if (game_category === "battleR") {
    let kills = document.querySelector('#battle-r-kills').value.trim();
    let wins = document.querySelector('#battle-r-wins').value.trim();
    let matches_played = document.querySelector('#battle-r-matches-played').value.trim();

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
  }
  else if (game_category === "shooter") {
    let kills = document.querySelector('#shooter-kills').value.trim();
    let deaths = document.querySelector('#shooter-deaths').value.trim();
    let assist = document.querySelector('#shooter-assist').value.trim();
    // calculate the kd ratio based on kills and deaths entered
    let kd = kills / deaths;
    // _.floor(_.divide(kills, deaths), 2);

    // Send post request to ape/shooter endpoint
    const response = await fetch('/api/shooter', {
      method: 'POST',
      body: JSON.stringify({ game_name, kills, deaths, assist, kd }),
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to add stats');
    }
  }
  else if (game_category === "valorant") {
    let character = document.querySelector('#valorant-agent').value.trim();
    let kills = document.querySelector('#valorant-kills').value.trim();
    let deaths = document.querySelector('#valorant-deaths').value.trim();
    let assist = document.querySelector('#valorant-assist').value.trim();
    let game_count = document.querySelector('#valorant-game-count').value.trim();

    // Send post request to ape/valorant endpoint
    const response = await fetch('/api/valorant', {
      method: 'POST',
      body: JSON.stringify({ character, game_name, kills, deaths, assist, game_count }),
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to add stats');
    };
  };
};



const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/battle-royale/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete stat block');
    }
  }
};

document
  .querySelector('.new-stats-form')
  .addEventListener('submit', statsHandler);

document
  .querySelector('.battle-r-statz')
  .addEventListener('click', delButtonHandler);
