
export function testonijaTest() {
    let test2 = document.querySelector('.testonijaTest');
    console.log('testonija222>>> ', test2);
}

function getAllPosts() {
  let postElements = document.querySelectorAll('div .cooked');
  let textArray = [];
  postElements.forEach(divElement => {
      textArray.push(divElement.textContent.trim());
  });

  return textArray;
}

$(document).ready(function() {
  console.log('READY?!?!?!');

  document.getElementById('ajaxButton').addEventListener('click', function() {
    // Data to be sent

    let promptText = document.getElementById('promptInput').value;
    let trimmedPosts = getAllPosts();
    const dataToSend = {
      key1: 'value1',
      key2: 'value2',
      prompt: promptText,
      posts: trimmedPosts
    };

    console.log('test ajax');

    // fetch('https://webhook.site/458b13f4-f481-4cbd-b8c8-a1312260aa49', {
    fetch('http://localhost:5003/query_openai', {
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
      const formattedBody = data.body.replace(/\\n/g, '\n');
      console.log('formatted: ', formattedBody);
      document.getElementById('responseTextArea').value = formattedBody;
      // document.getElementById('responseTextArea').value = formattedBody;
      // Handle the response data here
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      // Handle errors here
    });
  });
});

