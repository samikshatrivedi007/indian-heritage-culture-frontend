'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

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

const staticBlogPosts = [
    {
        slug: 'diverse-cultural-landscape',
        title: 'The Diverse Cultural Landscape of India',
        summary: 'Explore India’s unmatched cultural diversity, traditions, festivals, and cuisines.',
        image: '/assets/blogg1.jpeg',
    },
    {
        slug: 'heritage-sites-you-must-visit',
        title: 'Heritage Sites You Must Visit',
        summary: 'From Hampi to Khajuraho, explore India’s breathtaking heritage sites.',
        image: '/assets/blogg2.jpeg',

    },
];

const BlogListPage: React.FC = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/blogs'); // Change this if deployed
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error('Failed to fetch blogs:', error);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <>
            {/* ✅ Navbar */}
            <nav className="bg-green-700 text-white px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
                <Link href="/" className="text-2xl font-bold hover:text-yellow-300">
                    HeritageHub
                </Link>

                <ul className="flex space-x-6 items-center">
                    <li>
                        <Link href="/" className="hover:text-yellow-300 transition duration-200">
                            Home
                        </Link>
                    </li>
                    <li className="relative group">
                        <span className="cursor-pointer hover:text-yellow-300 transition duration-200">
                            Blog ▾
                        </span>
                        <ul className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg py-2 w-48">
                            <li>
                                <Link href="/blogPage/addBlog" className="block px-4 py-2 hover:bg-gray-100">
                                    ➕ Add New Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/blogPage" className="block px-4 py-2 hover:bg-gray-100">
                                    📚 View All Blogs
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/profilePage" className="hover:text-yellow-300 transition duration-200">profile
                        </Link>
                    </li>
                </ul>
            </nav>
        <main className="px-4 py-12 max-w-7xl mx-auto font-sans">
            <h1 className="text-4xl font-bold text-center mb-10 text-orange-700">
                Cultural & Heritage Blog
            </h1>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {/* Dynamic Blogs from Backend */}
                {blogs.map((post) => (
                    <Link href={`/blogPage/${post.slug}`} key={post._id}>
                        <div className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-all">
                            <img src={post.coverImage} alt={post.title} className="w-full h-60 object-cover" />
                            <div className="p-5 text-left">
                                <h2 className="text-2xl font-bold text-green-700 mb-2">{post.title}</h2>
                                <p className="text-gray-600 line-clamp-3">{post.content}</p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {post.tags.map((tag, idx) => (
                                        <span key={idx} className="bg-gray-200 text-sm text-gray-800 px-2 py-1 rounded-full">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-4 text-sm text-gray-500">
                                    Category: <span className="font-medium text-black">{post.category}</span>
                                </div>
                                <div className="mt-1 text-sm text-gray-500">
                                    By: {post.author?.name || 'Unknown'} • {new Date(post.publishedAt).toLocaleDateString()}
                                </div>
                                <div className="mt-1 text-sm text-gray-500">
                                    👁 {post.views} | ❤️ {post.likes}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}

                {/* Static Blogs */}
                {staticBlogPosts.map((post) => (
                    <Link href={`/pages/blogpage/${post.slug}`} key={post.slug}>
                        <div className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-all">
                            <img src={post.image} alt={post.title} className="w-full h-60 object-cover" />
                            <div className="p-5 text-left">
                                <h2 className="text-2xl font-bold text-green-700 mb-2">{post.title}</h2>
                                <p className="text-gray-600">{post.summary}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
        </>
    );
};

export default BlogListPage;
