import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    avgRating: {
      type: String,
      required: true,
    },
    lng: {
        type: Number,
        required: false
    },
    lat: {
      type: Number,
      required: false
  }


  },
  { timestamps: true }
);

export default mongoose.model("Hotel", hotelSchema);
