
const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");


const sesClient = new SESClient({
  region: "us-east-2",
  credentials: {
    accessKeyId: "",
    secretAccessKey: "",
  },
});


const sendTestEmail = async () => {
  const params = {
    Source: "gdest.in@outlook.com",
    Destination: {
      ToAddresses: ["gokulkumarrajagopalan@gmail.com"],
    },
    Message: {
      Subject: {
        Data: "Test Email from SES",
      },
      Body: {
        Text: {
          Data: "This is a test email sent from AWS SES.",
        },
      },
    },
  };

  try {
    const data = await sesClient.send(new SendEmailCommand(params));
    console.log("Email sent:", data.MessageId);
  } catch (err) {
    console.error("Error sending email:", err);
  }
};

sendTestEmail();
