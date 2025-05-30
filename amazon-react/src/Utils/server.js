require("dotenv").config();
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.sk_test_51RUR1nQo52u7H6FFULAjufKwztUjI5BWUAWtzptUjeLW5TwODTyxpNE4aA5oiEh8QFc5BJo7eaZkrGvVJnfvP3px00HH6nRIgK);

const app = express();
app.use(cors());
app.use(express.json());

app.post("/checkout", async (req, res) => {
  const { token, cartItems, totalAmount } = req.body;

  try {
    const charge = await stripe.charges.create({
      amount: totalAmount * 100,
      currency: "usd",
      source: token.id,
      description: "Amazon Clone Purchase",
    });

    res.json({ success: true, charge });
  } catch (err) {
    console.error("Stripe Error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(5000, () => console.log("Stripe server running on http://localhost:5000"));
