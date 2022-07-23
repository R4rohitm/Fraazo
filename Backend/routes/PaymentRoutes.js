const { Router } = require("express");
const { OrderPayment, verifyPayment } = require('../Controllers/PaymentController');

const paymentRoutes = Router();

paymentRoutes.post("/orders", OrderPayment);

paymentRoutes.post("/verify", verifyPayment);

module.exports = paymentRoutes;