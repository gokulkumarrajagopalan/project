const express = require("express");
const router = express.Router();
const { Api, TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');
const input = require('input'); // For CLI prompts
require('dotenv').config();
router.post("/list_userdetail", async (req, res) => {
    
const apiId = process.env.TELEGRAM_API_ID; // Replace with your API ID
const apiHash = process.env.TELEGRAM_API_HASH; // Replace with your API Hash
const serverAddress = '149.154.167.40'; // MTProto server address
const publicKey = `
-----BEGIN RSA PUBLIC KEY-----
MIIBCKCAQEAYMEdY1aR SCR3ZSJrtztKTKqigv0/vBfqACJLZtS7QMgCGXJ6XIR 
yy7mx66W0/sOFa7/1mAZtEoIokDP3ShoqF4fVNb6XeqgQfaUHd8wJpDWHcR20Fwv 
plUUI1PLTktZ9uw2WE23b+ixNwJjJGWBDJPQEQFBE-vfmH0JP503wr5INS1poWg/ 
j25sIWeYPHYe0rFp/eXaqhISP6G+q2IeTawTXpwZj4LzXq5Y0pk4bYEQ6mvRq7D1 
aHWfYmlEGepfaYR8Q0YqvvhYtMte3ITnuSJs171+GDqpdKcSwHnd6FudwG04pcCO 
j4WcDuXc2CTHgH8gFTNhp/Y8/SpD0hvn9QIDAQAB
-----END RSA PUBLIC KEY-----
`;

const client = new TelegramClient(
  new StringSession(''),
  apiId,
  apiHash,
  { connectionRetries: 5 }
);

(async () => {
  console.log('Loading MTProto client...');
  await client.start({
    phoneNumber: async () => await input.text('Enter your phone number: '),
    password: async () => await input.text('Enter your password (if enabled): '),
    phoneCode: async () => await input.text('Enter the code you received: '),
    onError: (err) => console.log(err),
  });

  console.log('Connected successfully!');
  console.log('Session String:', client.session.save()); 
})();

});
module.exports = router;