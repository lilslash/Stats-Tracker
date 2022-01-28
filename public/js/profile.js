const apexStatsHandler = async (event) => {
  event.preventDefault();

  // Collect values from stats form
  const kills = document.querySelector('#kills').value.trim();
  const wins = document.querySelector('#wins').value.trim();
  const matchPlayed = document.querySelector('#matches-played').value.trim();

  // Send post request to battle-royale endpoint
  const response = await fetch('/api/battle-royale', {
    method: 'POST',
    body: JSON.stringify({ kills, wins, matchPlayed }),
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    console.log('It worked');
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
