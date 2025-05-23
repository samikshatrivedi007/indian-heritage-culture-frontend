'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

interface Blog {
    _id: string;
    title: string;
    slug: string;
    content: string;
    coverImage: string;
    author: { name: string };
    tags: string[];
    category: string;
    views: number;
    likes: number;
    publishedAt: string;
}

const BlogPostPage: React.FC = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await fetch(`http://localhost:5000/api/blogs/${slug}`); // Update to your backend URL
                const data = await res.json();
                setBlog(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching blog:', error);
                setLoading(false);
            }
        };

        if (slug) fetchBlog();
    }, [slug]);

    if (loading) return <div className="text-center py-20 text-lg">Loading...</div>;

    if (!blog) return <div className="text-center py-20 text-red-600">Blog not found.</div>;

    return (
        <main className="px-6 py-10 max-w-4xl mx-auto font-sans">
            <h1 className="text-4xl font-bold text-green-700 mb-4">{blog.title}</h1>

            <div className="text-sm text-gray-600 mb-6 flex flex-col sm:flex-row sm:items-center sm:gap-4">
                <span>By <span className="font-semibold">{blog.author?.name || 'Unknown'}</span></span>
                <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
                <span>👁 {blog.views} views</span>
                <span>❤️ {blog.likes} likes</span>
            </div>

            {blog.coverImage && (
                <img src={blog.coverImage} alt={blog.title} className="w-full h-[400px] object-cover rounded-lg shadow mb-8" />
            )}

            <div className="prose prose-lg max-w-none text-gray-800" dangerouslySetInnerHTML={{ __html: blog.content }} />

            <div className="mt-10">
                <h3 className="text-xl font-semibold text-orange-700 mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, idx) => (
                        <span key={idx} className="bg-gray-200 text-sm text-gray-700 px-3 py-1 rounded-full">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mt-6 text-sm text-gray-500">
                Category: <span className="font-medium text-black">{blog.category}</span>
            </div>
        </main>
    );
};

export default BlogPostPage;
