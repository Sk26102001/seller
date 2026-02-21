import Image from "next/image";
import { notFound } from "next/navigation";

async function getBlog(slug) {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
        const res = await fetch(`${baseUrl}/api/blogs/${slug}`, {
            next: { revalidate: 60 },
        });

        if (!res.ok) return null;
        return await res.json();
    } catch (err) {
        console.error("Error fetching blog:", err);
        return null;
    }
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const blog = await getBlog(slug);

    if (!blog) {
        return {
            title: "Blog Not Found | Stellar IT",
            description: "The page you’re looking for does not exist.",
        };
    }

    return {
        title: `${blog.title} | Stellar IT`,
        description: blog.description,
    };
}

export default async function Page({ params }) {
    const { slug } = await params;
    const blog = await getBlog(slug);

    if (!blog) return notFound();

    return (
        <section className="relative">
            <img
                src="/images/blur-shape-1.png"
                alt="shape"
                loading="eager"
                className="absolute max-h-[600px] opacity-40 -top-16 right-0 object-contain -z-10 scale-x-[-1]"
            />
            <div className="max-w-4xl mx-auto lg:py-16 md:py-12 py-10 md:px-4 sm:px-8 px-4">
                <div className="text-center">
                    <p className="text-neutral-600 font-semibold text-sm flex flex-wrap gap-4 items-center justify-center mb-2">
                        <span className="text-blueClr">{blog.subTitle}</span>
                        <span className="font-normal">
                            {new Date(blog.createdAt).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </span>
                    </p>
                    <h1 className="text-neutral-800 md:text-5xl text-4xl font-semibold">
                        {blog.title}
                    </h1>
                </div>

                <div className="md:mt-16 sm:mt-12 mt-8 md:space-y-6 space-y-4">
                    <Image src={blog.image} loading="lazy" alt={blog.title} width={1000} height={1000} className="w-full h-auto rounded-2xl" />
                    <p>{blog.description}</p>
                    <div className="prose prose-gray mt-6 max-w-none text-neutral-800 [&_li]:ml-5 [&_ol]:list-decimal [&_p]:mb-2 [&_ul]:list-disc [&_h2]:text-blueClr" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
                </div>
            </div>
        </section>
    );
}
