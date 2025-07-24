import express from 'express'
const router = express.Router();
import {signup,login,logout,testJwt} from "../controllers/authContorllers.js";
import {protectRoute} from '../middlewares/authMiddleware.js'

router.get("/testJwt",protectRoute,testJwt)
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;