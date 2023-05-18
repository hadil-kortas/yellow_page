
import express from "express";



import { verifyAdmin } from "../utils/verifyToken.js";
import { createHotel, deleteHotel, getAllHotel, getHotelBySearch, getHotelcount, getSingleHotel, updateHotel } from "../controllers/hotelController.js";



const router = express.Router();

//create new hotel

router.post("/", verifyAdmin, createHotel);

//update hotel

router.put("/:id", verifyAdmin, updateHotel);

//delete hotel

router.delete("/:id", verifyAdmin, deleteHotel);

//get single hotel

router.get("/:id", getSingleHotel);

//get all hotels

router.get("/", getAllHotel);

//get hotel by search

router.get("/search/getHotelBySearch",getHotelBySearch)

//router.get("/search/getRecommendedLocation",getRecommendedLocation)

router.get("/search/getHotelcount",getHotelcount)



export default router;
