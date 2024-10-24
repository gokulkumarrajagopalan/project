const express = require("express");
const Razorpay = require("razorpay");
const bodyParser = require("body-parser");
const crypto = require("crypto"); // Import crypto for signature verification
const router = express.Router();

const app = express();
app.use(bodyParser.json());

// Initialize Razorpay with your key and secret
const razorpayInstance = new Razorpay({
  key_id: "rzp_test_RNv1714d2JagoD",
  key_secret: "w3dOoqTgQnNOIRF4PFWJaID6",
});

// Route to create an order
router.post("/order", async (req, res) => {
  const { amount, currency, receipt } = req.body;

  try {
    const options = {
      amount: amount * 100, // amount in smallest currency unit (e.g., paise for INR)
      currency: currency,
      receipt: receipt,
    };

    const order = await razorpayInstance.orders.create(options);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
});

// Route to verify payment
router.post("/order/validate", (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const generatedSignature = crypto
    .createHmac("sha256", "w3dOoqTgQnNOIRF4PFWJaID6")
    .update(razorpay_order_id + "|" + razorpay_payment_id)
    .digest("hex");

  if (generatedSignature === razorpay_signature) {
    res.status(200).json({ message: "Payment verified successfully" });
  } else {
    res.status(400).json({ message: "Invalid signature" });
  }
});

module.exports = router;
