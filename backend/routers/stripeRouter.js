const express = require('express');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const router = express.Router();

require('dotenv').config();

router.post("/process", async (req, res, next) => {
  try {
    const myPayment = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: "inr",
      metadata: {
        company: "Eshop",
      },
    });
    res.status(200).json({
      success: true,
      client_secret: myPayment.client_secret,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "An error occurred while processing your payment. Please try again later.",
    });
  }
});


router.get(
  "/stripeapikey",
  (async (req, res, next) => {
    res.status(200).json(process.env.STRIPE_API_KEY);

  })
);


module.exports = router