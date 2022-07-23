const { Router } = require("express");
const { OrderPayment, verifyPayment } = require('../Controllers/PaymentController');

const paymentRouter = Router();


paymentRouter.post("/orders", OrderPayment);

// Payment Verifying
paymentRouter.post("/verify", verifyPayment);

module.exports = paymentRouter;