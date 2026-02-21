"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import TiptapEditor from "./toolbar";
import { toast } from "sonner";

function AddBlogPage() {
    const [file, setFile] = useState(null);
    const [content, setContent] = useState("");
    const [form, setForm] = useState({
        subTitle: "",
        title: "",
        description: "",
    });


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!content || !form.title) {
            alert("Title, Slug, and Content are required");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("subTitle", form.subTitle);
            formData.append("title", form.title);
            formData.append("description", form.description);
            formData.append("content", String(content));
            if (file) formData.append("image", file);

            const res = await fetch("/api/blogs", {
                method: "POST",
                body: formData,
                credentials: 'include',
            });

            if (!res.ok) throw new Error("Failed to add blog");

            const data = await res.json();
            console.log("✅ Blog added:", data)
            toast.success("Blog added successfully!");

            setForm({
                subTitle: "",
                title: "",
                description: "",
            });
            setFile(null);
            setContent("");
        } catch (err) {
            console.error("❌ Error:", err);
            alert("Something went wrong.");
        }
    };

    return (
        <div className="p-6 space-y-4">
            <h1 className="text-2xl font-bold">Add New Blog</h1>
            <form
                onSubmit={handleSubmit}
                className="space-y-3"
                encType="multipart/form-data"
            >
                <Input
                    placeholder="Sub Title"
                    value={form.subTitle}
                    onChange={(e) => setForm({ ...form, subTitle: e.target.value })}
                    required
                />
                <Input
                    placeholder="Title"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    required
                />
                <Input
                    placeholder="Description"
                    value={form.description}
                    onChange={(e) =>
                        setForm({ ...form, description: e.target.value })
                    }
                    required
                />

                <div>
                    <label className="block font-semibold mb-1">Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setFile(e.target.files[0])}
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white"
                        required
                    />
                </div>

                <label className="block font-semibold mt-2">Blog Content</label>
                <TiptapEditor onChange={setContent} />
                <Button type="submit" className="w-full">
                    Publish Blog
                </Button>
            </form>
        </div>
    );
}

export default AddBlogPage;
