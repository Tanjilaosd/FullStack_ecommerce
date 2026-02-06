import express from "express";
import { addToCart, updateCart, getUserCart } from "../controllers/cartController.js";

const router = express.Router();

router.post("/add", addToCart);
router.post("/update", updateCart);
router.post("/get", getUserCart);

export default router;
