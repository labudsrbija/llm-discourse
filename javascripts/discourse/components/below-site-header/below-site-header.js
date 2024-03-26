
export function testonijaTest() {
    let test2 = document.querySelector('.testonijaTest');
    console.log('testonija222>>> ', test2);
}


$(document).ready(function() {
  console.log('READY?!?!?!');

  document.getElementById('ajaxButton').addEventListener('click', function() {
    // Data to be sent
    const dataToSend = {
      key1: 'value1',
      key2: 'value2'
    };

    console.log('test ajax');

    fetch('https://webhook.site/458b13f4-f481-4cbd-b8c8-a1312260aa49', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // assuming the response is JSON
    })
    .then(data => {
      console.log('Response from server:', data);
      // Handle the response data here
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      // Handle errors here
    });
  });
});

