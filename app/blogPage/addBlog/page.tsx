'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const AddBlog: React.FC = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        content: '',
        coverImage: '',
        tags: '',
        category: '',
        published: false,
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const target = e.target as HTMLInputElement;
        const { name, value, type } = target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? target.checked : value,
        }));

    };



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await axios.post('/api/blogs', {
                ...formData,
                tags: formData.tags.split(',').map(tag => tag.trim()),
            });

            router.push('/blog');
        } catch (err: any) {
            setError(err.response?.data?.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-lg font-sans">
            <h1 className="text-3xl font-bold text-center text-green-700 mb-6">📝 Add New Blog</h1>

            {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block font-semibold mb-1">Title</label>
                    <input
                        type="text"
                        name="title"
                        required
                        className="w-full px-4 py-2 border rounded"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Slug</label>
                    <input
                        type="text"
                        name="slug"
                        required
                        className="w-full px-4 py-2 border rounded"
                        value={formData.slug}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Cover Image URL</label>
                    <input
                        type="text"
                        name="coverImage"
                        className="w-full px-4 py-2 border rounded"
                        value={formData.coverImage}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Content</label>
                    <textarea
                        name="content"
                        required
                        rows={6}
                        className="w-full px-4 py-2 border rounded"
                        value={formData.content}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Tags (comma separated)</label>
                    <input
                        type="text"
                        name="tags"
                        className="w-full px-4 py-2 border rounded"
                        value={formData.tags}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Category</label>
                    <input
                        type="text"
                        name="category"
                        className="w-full px-4 py-2 border rounded"
                        value={formData.category}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        name="published"
                        checked={formData.published}
                        onChange={handleChange}
                        className="w-5 h-5"
                    />
                    <label className="text-sm font-medium">Publish this blog?</label>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
                >
                    {loading ? 'Submitting...' : 'Submit Blog'}
                </button>
            </form>
        </main>
    );
};

export default AddBlog;
