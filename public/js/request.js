const requestHandler = async (event) => {

    console.log("hello world")
    let game_name = document.querySelector('#game-request').value.trim();
    const response = await fetch('/api/request', {
        method: 'POST',
        body: JSON.stringify({game_name}),
        headers: {'Content-Type': 'application/json'}
    });
    alert('Thank you for your recommendation. Our team will consider your suggestion');

    if (response.ok) {
    } else {
        alert('Failed to send request');
    };
};

document   
    .querySelector('.request-form')
    .addEventListener('submit', requestHandler);