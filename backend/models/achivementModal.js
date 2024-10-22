import mongoose from "mongoose";

const achivementSchema = new mongoose.Schema({
  achievement_type: String,
  image: String,
});

const AchivementModal = mongoose.model("achivement", achivementSchema);

export default AchivementModal;
