import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";

export async function GET(req, { params }) {
    await connectDB();
    const param = await params.id;
    const blog = await Blog.findOne({ slug: param });
    if (!blog) return Response.json({ error: "Not found" }, { status: 404 });
    return Response.json(blog);
}

export async function PUT(req, { params }) {
    await connectDB();
    const data = await req.json();
    const updated = await Blog.findByIdAndUpdate(params.id, data, { new: true });
    return Response.json(updated);
}

export async function DELETE(req, { params }) {
    try {

        const token = req.cookies.get("adminToken")?.value;

        if (token !== process.env.NEXT_PUBLIC_ADMIN_TOKEN) {
            return Response.json({ error: "Unauthorized" }, { status: 401 });
        }
        await connectDB();
        await Blog.findByIdAndDelete(params.id);
        return Response.json({ success: true });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
}
