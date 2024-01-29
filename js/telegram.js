function sendTelegram() {
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var website = document.getElementById('website').value;
    var text = document.getElementById('text').value;
  
    // Replace 'YOUR_BOT_TOKEN' with your actual bot token
    var botToken = '6817902255:AAEsuugMkUrTlhmr_mhnSOIdHz4vovXzos8';
  
    // Replace 'YOUR_CHAT_IDS' with an array of your actual chat IDs
    var chatIds = ['905770018'];
  
    // Construct the message
    var message = `Name: ${name}
  
Email: ${email}
  
Their website: ${website}
  
Message: ${text}`;
  
    // Telegram Bot API endpoint for sending messages
    var apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
  
    // Iterate through each chat ID and send the message
    chatIds.forEach(chatId => {
      // Construct the data to be sent
      var data = {
        chat_id: chatId,
        text: message,
      };
  
      // Make a POST request to the Telegram Bot API
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(data => {
          console.log(`Message sent`);
          // You can handle the response here if needed
        })
        .catch(error => {
          console.error(`Error sending message:`, error);
        });
    });
  
    // Show alert
    alert("Your message successfully sent!");
  
    // Clear the form
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('website').value = '';
    document.getElementById('text').value = '';
  
    // Prevent the form from submitting traditionally
    return false;
  }