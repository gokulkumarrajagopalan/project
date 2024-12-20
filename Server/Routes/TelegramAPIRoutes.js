// const express = require('express');
// const { TelegramClient } = require('telegram');
// const { StringSession } = require('telegram/sessions');

// const router = express.Router();

// // Telegram API credentials
// const apiId = 22179804; // Your API ID
// const apiHash = '9baa1215bb3b71d29982072daeec912b'; // Your API Hash
// let stringSession = new StringSession(''); // Empty initially

// // Static Telegram target and message details
// const chatUsername = 'GDEST.IN'; // Telegram username or group ID
// const messageText = `Hello! This is a test message from my Telegram bot.`;

// router.post('/sendTelegramMessage', async (req, res) => {
//   const phoneCode = req.body.phoneCode; // Pass phone code dynamically

//   const client = new TelegramClient(stringSession, apiId, apiHash, { connectionRetries: 1 });

//   try {
//     console.log('Starting Telegram session...');
//     await client.start({
//       phoneNumber: async () => '+91 9080572846', // Replace with your phone number
//       phoneCode: async () => phoneCode,         // Pass the phone code from the request
//       onError: (err) => console.error('Error during login:', err),
//     });

//     console.log('Session started successfully!');

//     // Save the session string for reusability
//     stringSession = client.session.save();
//     console.log('Session saved:', stringSession);

//     // Send a message to the specified chat
//     await client.sendMessage(chatUsername, { message: messageText });
//     console.log('Message sent successfully!');

//     res.status(200).send('Message sent successfully!');
//   } catch (error) {
//     console.error('Error sending Telegram message:', error);
//     res.status(500).send('Failed to send message');
//   } finally {
//     // Disconnect the client after the operation
//     await client.disconnect();
//   }
// });

// module.exports = router;
