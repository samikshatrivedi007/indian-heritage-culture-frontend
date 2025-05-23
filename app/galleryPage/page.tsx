'use client';
import React from 'react';

import Image from 'next/image';
import Link from "next/link";


const galleryPage: React.FC = () => {
    return (
        <>

            <nav className="sticky top-0 z-50 flex items-center justify-between bg-white px-6 py-4 shadow-md">
                <Link href="/" className="text-xl font-bold text-indigo-600 hover:opacity-80">
                   !NDIA
                </Link>

                <ul className="flex items-center gap-6 text-sm font-medium text-gray-700">
                    <li><Link href="/" className="hover:text-indigo-600">Home</Link></li>
                    <li><Link href="#" className="hover:text-indigo-600">about us</Link></li>
                    <li><Link href="#cdcd" className="hover:text-indigo-600">Account</Link></li>
                </ul>
            </nav>

                    {/* Gallery Section */}
                    <section id="cultureGallery" className="py-16 px-4 bg-orange-50 text-center">
                        <h2 className="text-3xl font-bold text-orange-700 mb-10">
                            👆 Explore India's Rich Culture & Heritage!
                        </h2>

                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            {[
                                {src: "/assets/g1.jpg", alt: "Traditional Thali"},
                                {src: "/assets/g2.jpg", alt: "Kerala Backwaters"},
                                {src: "/assets/g3.jpg", alt: "Spiti Valley"},
                                {src: "/assets/g4.jpg", alt: "Hampi Temples"},
                                {src: "/assets/g5.jpg", alt: "Bodh Gaya"},
                                {src: "/assets/g6.jpg", alt: "Kathak Dance"},
                                {src: "/assets/g7.jpg", alt: "Golden Temple"},
                                {src: "/assets/g8.jpg", alt: "Jaisalmer Fort"},
                                {src: "/assets/g9.jpg", alt: "Chola Temples"},
                                {src: "/assets/g10.jpg", alt: "Sattriya Dance"},
                                {src: "/assets/g11.jpg", alt: "Manipur Culture"},
                                {src: "/assets/g12.jpg", alt: "Udaipur Palace"},
                                {src: "/assets/g13.jpeg", alt: "Sundarbans"},
                                {src: "/assets/g14.jpeg", alt: "Rath Yatra"},
                                {src: "/assets/g15.jpeg", alt: "Diwali Celebrations"},
                                {src: "/assets/g16.jpeg", alt: "lakshman jhula"},
                            ].map(({src, alt}, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="block rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
                                >
                                    <img
                                        src={src}
                                        alt={alt}
                                        className="w-full h-60 object-cover"
                                    />
                                </a>
                            ))}
                        </div>
                    </section>
                </>
                );
                };

                export default galleryPage;