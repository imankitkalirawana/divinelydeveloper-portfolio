import { Social as SocialInterface } from "@/lib/interface";
import mongoose, { Model } from "mongoose";

const socialSchema = new mongoose.Schema<SocialInterface>(
  {
    name: String,
    url: String,
    icon: String,
    color: String,
    priority: Number,
    category: {
      type: String,
      enum: ["social", "featured", "resource", "byme", "other"],
      default: "social",
    },
  },
  {
    timestamps: true,
  },
);

const Social: Model<SocialInterface> =
  mongoose.models.Social ||
  mongoose.model<SocialInterface>("Social", socialSchema);

export default Social;
