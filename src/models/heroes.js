const { Schema, model } = require("mongoose");
const heroesSchema = new Schema(
  {
    nickname: {
      type: String,
      required: [true, "Set nickname for hero"],
    },
    real_name: {
      type: String,
      required: [true, "Set real name for hero"],
    },
    origin_description: {
      type: String,
      required: [true, "Set origin description for hero"],
    },
    superpowers: {
      type: String,
      required: [true, "Set superpowers for hero"],
    },
    catch_phrase: {
      type: String,
      required: [true, "Set catch phrase for hero"],
    },
    images: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2019/06/17/22/21/flash-4281077_960_720.png",
    },
  },
  { versionKey: false, timestamps: true }
);

const Hero = model("heroes", heroesSchema);
module.exports = { Hero };
