'use client'
import { useEffect, useState } from 'react';
import BlogSkeleton from './BlogSkeleton';
import Image from 'next/image';
import Link from 'next/link';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function BlogsSlider() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const options = {
        type: 'slide',
        perPage: 3,
        gap: '2rem',
        autoplay: false,
        arrows: false,
        pagination: false,
        breakpoints: {
            950: {
                perPage: 2,
            },
            600: {
                perPage: 1,
            },
        }
    };

    const fetchBlogs = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/blogs");
            const data = await res.json();
            setBlogs(data);
        } catch (err) {
            console.error("Failed to fetch blogs:", err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className="md:mt-12 mt-8">
                <Splide
                    options={options}
                    aria-label="Blogs carousel"
                    id='blogsSlider'
                >
                    {loading
                        ? Array.from({ length: 3 }).map((_, i) => (
                            <SplideSlide key={i}>
                                <BlogSkeleton />
                            </SplideSlide>
                        ))
                        : blogs.map((blog, i) => (
                            <SplideSlide key={i}>
                                <Link href={`/blogs/${blog.slug}`} className='inline-block w-full h-full group'>
                                    <div className='max-h-60 rounded-2xl overflow-hidden'>
                                        <Image width={1000} height={1000} src={blog.image} loading="lazy" alt={blog.title} className='w-full object-cover group-hover:scale-110 transition-all duration-[3s]' />
                                    </div>
                                    <div className='mt-6'>
                                        <p><span className='font-semibold text-sm text-blueClr bg-lightBlueClr px-3 py-1 rounded-md'>{blog.subTitle}</span></p>
                                        <p className='text-xl font-semibold mt-4 truncate'>{blog.title}</p>
                                        <p className='text-neutral-600 mt-2 font-light'>{blog.description.slice(0, 80).concat('...')}</p>
                                        <p className='text-neutral-600 mt-3 uppercase text-sm font-semibold'>{new Date(blog.createdAt).toLocaleString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                                    </div>
                                </Link>
                            </SplideSlide>
                        ))}
                </Splide>
            </div>
        </>
    )
}

export default BlogsSlider
