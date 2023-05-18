
import express from "express";



import { verifyAdmin } from "../utils/verifyToken.js";
import { createPharmacie, deletePharmacie, getAllPharmacie, getPharmacieBySearch, getPharmaciecount, getSinglePharmacie, updatePharmacie } from "../controllers/pharmacieController.js";


const router = express.Router();

//create new pharmacie

router.post("/", verifyAdmin, createPharmacie);

//update pharmacie

router.put("/:id", verifyAdmin, updatePharmacie);

//delete pharmacie

router.delete("/:id", verifyAdmin, deletePharmacie);

//get single pharmacie

router.get("/:id", getSinglePharmacie);

//get all pharmacies

router.get("/", getAllPharmacie);

//get pharmacie by search

router.get("/search/getPharmacieBySearch",getPharmacieBySearch)

//router.get("/search/getRecommendedLocation",getRecommendedLocation)

router.get("/search/getPharmaciecount",getPharmaciecount)



export default router;
