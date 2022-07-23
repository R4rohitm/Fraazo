const { Router } = require("express");

const orderRoutes = Router();

// orderRoutes.get("/user/:userId", getUserOrders);

orderRoutes.get("/:id", (req, routes) => {});

orderRoutes.post("/", (req, routes) => {});

module.exports = orderRoutes;
