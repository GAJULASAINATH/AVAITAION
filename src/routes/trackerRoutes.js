import express from "express";
import { getFlightTrack } from "../controllers/trackerController.js";

const router = express.Router();

router.get("/tracker/:icao24", getFlightTrack);

export default router;
