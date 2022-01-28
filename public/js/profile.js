const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#player-name').value.trim();
    
    if (name) {
      const response = await fetch(`/api/players`, {
        method: 'POST',
        body: JSON.stringify({ name, needed_funding, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create player');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/players/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete player');
      }
    }
  };
  
  document
    .querySelector('.new-player-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.player-list')
    .addEventListener('click', delButtonHandler);
  