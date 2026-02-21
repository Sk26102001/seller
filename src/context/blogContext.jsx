'use client';
import { createContext, useContext, useEffect, useState } from "react";

const BlogContext = createContext();

export function BlogProvider({ children }) {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchBlogs = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BLOG_URL}`);
            const data = await response.json();
            setBlogs(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    return <BlogContext.Provider value={{ blogs, loading, error }}>{children}</BlogContext.Provider>;
}

export function useBlog() {
    return useContext(BlogContext);
}