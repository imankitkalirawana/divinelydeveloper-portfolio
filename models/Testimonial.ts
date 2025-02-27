import { Testimonial as TestimonialInterface } from "@/lib/interface";
import mongoose, { Model } from "mongoose";

const testimonialSchema = new mongoose.Schema<TestimonialInterface>(
  {
    name: String,
    title: String,
    src: String,
    comment: String,
    projects: [String],
  },
  {
    timestamps: true,
  },
);

const Testimonial: Model<TestimonialInterface> =
  mongoose.models.Testimonial ||
  mongoose.model<TestimonialInterface>("Testimonial", testimonialSchema);

export default Testimonial;
