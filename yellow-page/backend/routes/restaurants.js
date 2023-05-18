
import express from "express";



import { verifyAdmin } from "../utils/verifyToken.js";
import { createRestaurant, deleteRestaurant, getAllRestaurant, getRestaurantBySearch, getRestaurantcount, getSingleRestaurant, updateRestaurant } from "../controllers/restaurantController.js";

const router = express.Router();

//create new location

router.post("/", verifyAdmin, createRestaurant);

//update location

router.put("/:id", verifyAdmin, updateRestaurant);

//delete location

router.delete("/:id", verifyAdmin, deleteRestaurant);

//get single location

router.get("/:id", getSingleRestaurant);

//get all locations

router.get("/", getAllRestaurant);

//get location by search

router.get("/search/getRestaurantBySearch",getRestaurantBySearch)

//router.get("/search/getRecommendedLocation",getRecommendedLocation)

router.get("/search/getRestaurantcount",getRestaurantcount)



export default router;
