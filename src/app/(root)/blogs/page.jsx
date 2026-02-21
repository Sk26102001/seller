import BlogList from "@/components/BlogList";

export const metadata = {
    title: "Blogs | Stellar IT",
    description: "Discover our blog posts and stay up-to-date with the latest industry insights and trends.",
}

export default function Page() {


    return (
        <section className="relative">
            <img src={'/images/blur-shape-1.png'} alt="shape" loading="eager" className="absolute max-h-[600px] opacity-40 -top-16 right-0 object-contain -z-10 scale-x-[-1]" />
            <div className="max-w-7xl mx-auto lg:py-16 md:py-12 py-10 md:px-4 sm:px-8 px-4">
                <div className="text-center">
                    <h1 className="text-neutral-800 md:text-5xl text-4xl font-semibold">Blogs</h1>
                    <h2 className="mt-2 max-w-xl mx-auto text-neutral-600 md:text-lg text-sm">Discover our blog posts and stay up-to-date with the latest industry insights and trends.</h2>
                </div>
                <BlogList />
            </div>
        </section>
    )
}
