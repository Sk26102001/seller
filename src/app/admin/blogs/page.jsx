"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

function Page() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);



    const fetchBlogs = async () => {
        try {
            const res = await fetch("/api/blogs");
            const data = await res.json();
            setBlogs(data);
        } catch (err) {
            console.error("Failed to fetch blogs:", err);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm("Are you sure you want to delete this blog?")) return;

        setLoading(true);
        try {
            const res = await fetch(`/api/blogs/${id}`, { method: "DELETE", credentials: 'include' });
            if (!res.ok) throw new Error("Failed to delete");

            // Optimistically remove from UI
            setBlogs((prev) => prev.filter((b) => b._id !== id));
        } catch (err) {
            console.error("❌ Error deleting blog:", err);
            alert("Failed to delete blog.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <div className="p-6 space-y-6 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold">Blog List</h1>

            <div className="space-y-4">
                {blogs.length === 0 ? (
                    <p className="text-gray-500">No blogs found.</p>
                ) : (
                    blogs.map((blog) => (
                        <div
                            key={blog._id}
                            className="border p-4 rounded-lg flex gap-4 items-center"
                        >
                            <div>
                                <Image
                                    width={500}
                                    height={500}
                                    src={blog.image}
                                    alt=""
                                    className="w-20 h-20 object-cover rounded-md aspect-square"
                                />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-lg font-semibold">{blog.title}</h2>
                                <p className="text-gray-500 text-sm">
                                    {blog.description?.slice(0, 100)}...
                                </p>
                            </div>
                            <Button
                                variant="destructive"
                                size="icon"
                                disabled={loading}
                                onClick={() => handleDelete(blog._id)}
                            >
                                <Trash className="w-5 h-5" />
                            </Button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Page;
