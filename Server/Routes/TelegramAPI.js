const express = require('express');
const router = express.Router();
const fetch = require('node-fetch'); // Alternatively, you can use Axios

// Bot credentials
const botToken = 'YOUR_BOT_TOKEN_FROM_BOTFATHER'; // Replace with your bot's token
const chatId = '@YourChannelOrGroupUsername'; // Replace with your Telegram group/channel username or chat ID

// Static job details
const jobRole = 'Software Developer';
const companyName = 'Tech Corp';
const salary = '$80,000 - $100,000';
const experience = '2-3 years';
const jobLink = 'https://example.com/job-post';

// Generate message content
const generateMessage = (jobRole, companyName, salary, experience, jobLink) => {
  return `
📢 **New Job Opportunity!**

**Role:** ${jobRole}  
**Company:** ${companyName}  
**Salary:** ${salary}  
**Experience Required:** ${experience}  

🔗 [Apply Here](${jobLink})

📲 Share this opportunity with your friends!
  `;
};

// Route to send Telegram message
router.post('/sendTelegramMessage', async (req, res) => {
  const message = generateMessage(jobRole, companyName, salary, experience, jobLink);
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId, // Telegram group or channel username
        text: message, // The message content
        parse_mode: 'Markdown', // To format the message
      }),
    });

    const result = await response.json();

    if (result.ok) {
      console.log('Message sent successfully!');
      res.status(200).send('Message sent successfully!');
    } else {
      console.error('Failed to send message:', result);
      res.status(500).send('Failed to send message');
    }
  } catch (err) {
    console.error('Error occurred while sending message:', err);
    res.status(500).send('Failed to send message');
  }
});

module.exports = router;
