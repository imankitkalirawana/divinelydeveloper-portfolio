import { Project as ProjectInterface } from "@/lib/interface";
import mongoose, { Model } from "mongoose";
import slugify from "slugify";

const projectSchema = new mongoose.Schema<ProjectInterface>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: String,
    thumbnail: {
      src: String,
    },
    technologies: [String],
    previewlink: String,
    startdate: String,
    enddate: String,
    status: {
      type: String,
      enum: ["upcoming", "in-progress", "hold", "completed"],
      default: "upcoming",
    },
    slug: {
      type: String,
      unique: true,
      required: [true, "Slug is required"],
    },
    priority: {
      type: Number,
      default: 1,
    },
    client: String,
  },
  {
    timestamps: true,
  },
);
projectSchema.pre("save", async function (next) {
  // @ts-ignore
  this.slug = slugify(this.title, { lower: true });
  next();
});

const Project: Model<ProjectInterface> =
  mongoose.models.Project ||
  mongoose.model<ProjectInterface>("Project", projectSchema);
export default Project;
