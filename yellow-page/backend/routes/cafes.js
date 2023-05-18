
import express from "express";



import { verifyAdmin } from "../utils/verifyToken.js";
import { createCafe, deleteCafe, getAllCafe, getCafeBySearch, getCafecount, getSingleCafe, updateCafe } from "../controllers/cafeController.js";




const router = express.Router();

//create new cafe

router.post("/", verifyAdmin, createCafe);

//update cafe

router.put("/:id", verifyAdmin, updateCafe);

//delete cafe

router.delete("/:id", verifyAdmin, deleteCafe);

//get single cafe

router.get("/:id", getSingleCafe);

//get all cafes

router.get("/", getAllCafe);

//get cafe by search

router.get("/search/getCafeBySearch",getCafeBySearch)

//router.get("/search/getRecommendedLocation",getRecommendedLocation)

router.get("/search/getCafecount",getCafecount)



export default router;
