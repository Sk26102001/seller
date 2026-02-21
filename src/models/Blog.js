import mongoose from "mongoose";
import slugify from "slugify";

const BlogSchema = new mongoose.Schema({
    subTitle: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: [{ type: String, required: true }],
    image: String,
    slug: { type: String, unique: true }
}, { timestamps: true });


BlogSchema.pre("save", function (next) {
    this.slug = slugify(this.title, { lower: true });
    next();
});


export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
