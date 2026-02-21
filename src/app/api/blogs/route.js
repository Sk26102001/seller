import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";
import { writeFile } from "fs/promises";
import path from "path";


export async function GET() {
    await connectDB();
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return Response.json(blogs, { status: 200 });
}

export async function POST(req) {
    try {

        const token = req.cookies.get("adminToken")?.value;
        if (token !== process.env.NEXT_PUBLIC_ADMIN_TOKEN) {
            return Response.json({ error: "Unauthorized" }, { status: 401 });
        }

        await connectDB();

        // Parse FormData
        const formData = await req.formData();

        const subTitle = formData.get("subTitle");
        const title = formData.get("title");
        const description = formData.get("description");
        const content = formData.get("content");
        const imageFile = formData.get("image"); // File object

        // Save image if exists
        let imageUrl = "";
        if (imageFile && imageFile.size > 0) {
            const uploadDir = path.join(process.cwd(), "public/uploads");

            const arrayBuffer = await imageFile.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            const filename = `${Date.now()}-${imageFile.name}`;
            const filePath = path.join(uploadDir, filename);

            await writeFile(filePath, buffer);
            imageUrl = `/uploads/${filename}`;
        }

        // Create blog in DB
        const blog = await Blog.create({
            subTitle,
            title,
            description,
            content,
            image: imageUrl,
        });

        return Response.json(blog, { status: 201 });
    } catch (err) {
        console.error("Error creating blog:", err);
        return Response.json({ error: "Failed to add blog" }, { status: 500 });
    }
}
