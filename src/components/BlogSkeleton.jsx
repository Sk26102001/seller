function BlogSkeleton() {
    return (
        <div className="animate-pulse">
            <div className="bg-gray-300 rounded-2xl w-full sm:h-96 h-54 mb-6"></div>
            <div className="space-y-4">
                <div className="bg-gray-300 h-6 w-24 rounded"></div>
                <div className="bg-gray-300 h-8 w-3/4 rounded"></div>
                <div className="bg-gray-300 h-4 w-full rounded"></div>
                <div className="bg-gray-300 h-4 w-5/6 rounded"></div>
                <div className="bg-gray-300 h-4 w-1/3 rounded"></div>
            </div>
        </div>
    );
}

export default BlogSkeleton;