

document.addEventListener("DOMContentLoaded", function () {

// Function to handle form submission

function handleSubmit(event) {

event.preventDefault(); // Prevents the default form submission

// Get form data

const name = document.querySelector('input[id="name"]').value;

const email = document.querySelector('input[id="email"]').value;

const message = document.querySelector('textarea[id="message"]').value;

// Prepare data for POST request

const formData = new FormData();

formData.append('name', name);

formData.append('email', email);

formData.append('message', message);

// URL to your API Gateway endpoint (update with your actual endpoint) 
  const apiUrl = 'http://IP_de_la_ec2/submit.php';

// Fetch options

const options = {

method: 'POST',

body: formData,

};

// Fetch data

fetch(apiUrl, options)

.then(response => {

if (!response.ok) {

throw new Error('Network response was not ok');

}

return response.json();

})

.then(data => {

// Handle successful response

console.log('Data sent successfully:', data);

// You can add additional logic here if needed

})

.catch(error => {

// Handle error

console.error('Error sending data:', error.message);

// You can add additional error handling logic here if needed

});

}

// Get the form element

const form = document.querySelector('form');

// Add event listener for form submission

form.addEventListener('submit', handleSubmit);

});


