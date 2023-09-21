import express from "express"
import { getUser ,getDashboardStats} from "../controllers/general.js"

const router = express.Router();

router.get("/user/:id", getUser);
router.get("/dashboard",getDashboardStats)

export default router

// 63701cc1f03239b7f70000e