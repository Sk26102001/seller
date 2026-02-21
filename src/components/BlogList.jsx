'use client';
import { useState, useMemo, useEffect } from "react";
import BlogSkeleton from "./BlogSkeleton";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

async function fetchBlogs() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/blogs`);
        if (!res.ok) throw new Error("Failed to fetch");
        const blogs = await res.json();
        return blogs;
    } catch (err) {
        console.error("Failed to fetch blogs:", err);
        return [];
    }
}

function BlogList() {
    const [currentPage, setCurrentPage] = useState(1);
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const blogsPerPage = 6;

    useEffect(() => {
        const loadBlogs = async () => {
            setLoading(true);
            const data = await fetchBlogs();
            setBlogs(data);
            setLoading(false);
        };
        loadBlogs();
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 140, behavior: "smooth" });
    }, [currentPage]);

    const totalPages = Math.ceil(blogs.length / blogsPerPage);

    const paginatedBlogs = useMemo(() => {
        const startIndex = (currentPage - 1) * blogsPerPage;
        const endIndex = startIndex + blogsPerPage;
        return blogs.slice(startIndex, endIndex);
    }, [currentPage, blogs]);

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    return (
        <>
            <div className="md:mt-16 sm:mt-12 mt-8 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 md:gap-12 sm:gap-8 gap-4">
                <div className="lg:col-span-2 md:col-span-2 sm:col-span-2 md:space-y-8 sm:space-y-6 space-y-4">
                    {loading
                        ? Array.from({ length: 3 }).map((_, i) => <BlogSkeleton key={i} />)
                        : paginatedBlogs.map((blog, i) => (
                            <Link href={`/blogs/${blog.slug}`} className="inline-block" key={i}>
                                <Image src={blog.image} loading="lazy" alt={blog.title} width={1000} height={1000} className="lg:max-w-full md:max-w-[480px] h-auto rounded-2xl" />
                                <div className="mt-6 space-y-4">
                                    <span className="inline-flex items-center text-blueClr bg-lightBlueClr px-3 h-8 text-xs font-semibold rounded">{blog.subTitle}</span>
                                    <h3 className="text-neutral-800 md:text-3xl text-2xl font-semibold">{blog.title}</h3>
                                    <p className="text-neutral-600 md:text-base text-sm">{blog.description.slice(0, 150).concat('...')}</p>
                                    <p className="text-neutral-600 font-semibold text-sm">{blog.addedOn}</p>
                                </div>
                            </Link>
                        ))}
                    <div className="flex justify-center gap-2 mt-6">
                        <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            className="px-3 py-1 border rounded disabled:opacity-50"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <ChevronLeft className="w-6 h-6 inline stroke-1" />
                        </Button>

                        <span className="px-3 py-1 border rounded bg-gray-800 text-white">
                            {currentPage} / {totalPages}
                        </span>

                        <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            className="px-3 py-1 border rounded disabled:opacity-50"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            <ChevronRight className="w-6 h-6 inline stroke-1" />
                        </Button>
                    </div>
                </div>

                <div className="md:block hidden lg:col-span-1 md:col-span-1 sm:col-span-1 space-y-4 sticky top-26 h-fit">
                    <div className="border bg-white px-4 rounded-2xl flex gap-2 items-center">
                        <Search className="w-6 h-6 inline stroke-1" />
                        <input type="text" placeholder="Search" className="flex-grow w-full h-12 focus:outline-none" />
                    </div>
                    <div>
                        <p className="text-neutral-800 md:text-xl text-lg font-semibold">Categories</p>
                        <ul className="mt-2 ps-2 space-y-2 text-neutral-600 text-sm">
                            <li>Digital Agency</li>
                            <li>IT Solution</li>
                            <li>Career</li>
                            <li>Company</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-neutral-800 md:text-xl text-lg font-semibold">Recent Posts</p>
                        <div className="mt-4 space-y-4">
                            {blogs.slice(1, 4).map((blog, i) => (
                                <Link href={`/blogs/${blog.slug}`} key={i} className="inline-flex gap-4">
                                    <Image src={blog.image} loading="lazy" alt={blog.title} width={1000} height={1000} className="w-20 h-20 rounded-2xl object-cover" />
                                    <div>
                                        <h4 className="text-neutral-800 md:text-lg text-sm font-semibold">{blog.title}</h4>
                                        <p className="text-neutral-600 md:text-sm text-xs">{new Date(blog.createdAt).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogList
