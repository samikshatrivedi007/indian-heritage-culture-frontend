'use client';
import React from 'react';
import MapSection from './components/MapSection';
import SecondSection from "./components/SecondSection";
import Image from 'next/image';
import Link from "next/link";


const HomePage: React.FC = () => {
    return (
        <>
            {/* Hero Section */}
            <div
                className="relative h-screen bg-cover bg-center text-white font-sans"
                style={{backgroundImage: `url('/client/me.png')`}}

            >

                <div className="absolute inset-0 bg-black bg-opacity-50 ">
                    {/* Navbar */}
                    <header className=" fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-5 bg-white bg-opacity-70 backdrop-blur-md text-black">
                        <div className="text-3xl font-bold text-orange-500">!INDIA</div>
                        <nav>
                            <ul className="flex space-x-8 font-semibold">
                                <li><a href="/" className="text-green-600 font-medium hover:underline">Home</a></li>

                                <li><a href="#" className="text-green-600 font-medium hover:underline">Travel With
                                    Us</a></li>
                                <li><a href="galleryPage"
                                       className="text-green-600 font-medium hover:underline">Gallery</a></li>
                                <li><a href="shopPage" className="text-green-600 font-medium hover:underline">Shop</a></li>
                                <li><a href="blogPage" className="text-green-600 font-medium hover:underline">Blog</a></li>
                                <li><a href="profilePage" className="text-green-600 font-medium hover:underline">profile</a></li>
                            </ul>
                        </nav>
                    </header>

                    {/* Hero Content */}
                    <main className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            EXPLORE THE INDIAN CULTURE AND HERITAGE.
                        </h1>
                        <p className="max-w-xl mx-auto text-lg mb-8 leading-relaxed">
                            India is a country dotted with stunning wildlife diversity, and rich traditions.
                            While the Western coast greets you with mouth-watering delicacies, the East part invites you
                            to experience its greenery.
                        </p>

                        <Link href="#blog-section" scroll={true}>
                        <button
                            className="bg-white text-green-700 hover:bg-green-600 hover:text-white transition px-6 py-3 rounded-md font-bold">
                            Read More
                        </button>
                        </Link>
                    </main>
                </div>
            </div>

            {/* second Section */}
            <SecondSection/>

            {/* Map Section */}
            <MapSection/>

            {/* Gallery Section */}
            <section id="cultureGallery" className="py-16 px-4 bg-orange-50 text-center">
                <h2 className="text-3xl font-bold text-orange-700 mb-10">
                    👆 Explore India's Rich Culture & Heritage!
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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

            {/* Great Indian Cities Section */}
            <section id="indian-cities" className="bg-teal-50 py-16 px-4">
                <h2 className="text-center text-3xl font-semibold text-gray-800 mb-10">
                    The Great Indian Cities
                </h2>
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8">
                    {[
                        {
                            name: "Delhi",
                            tagline: "The Capital of India",
                            image: "/assets/delhi.jpg",
                            paragraph:
                                "Delhi, India's capital, is a massive metropolitan area rich in history and culture. From the bustling markets of Chandni Chowk to iconic landmarks like India Gate and the Red Fort, Delhi beautifully blends the ancient and the modern.",
                        },
                        {
                            name: "Mumbai",
                            tagline: "The Financial Capital of India",
                            image: "/assets/mumbai.jpg",
                            paragraph:
                                "Mumbai, the city that never sleeps, is known for its fast-paced life, Bollywood film industry, and the historic Gateway of India. It's a melting pot of cultures, food, fashion, and finance.",
                        },
                        {
                            name: "Bangalore",
                            tagline: "Silicon Valley of India",
                            image: "/assets/banglore.jpg",
                            paragraph:
                                "Bangalore is the tech capital of India, home to leading IT companies and startups. With its pleasant weather and green parks like Cubbon Park and Lalbagh, it offers a balance of work and leisure.",
                        },
                    ].map((city, index) => (
                        <div
                            key={index}
                            className="relative group w-72 bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg"
                        >
                            {/* City Image */}
                            <img
                                src={city.image}
                                alt={city.name}
                                className="w-full h-48 object-cover"
                            />

                            {/* Basic Info */}
                            <div className="p-4 text-left">
                                <h3 className="text-xl font-bold">{city.name}</h3>
                                <p className="text-gray-600 mt-1">{city.tagline}</p>
                            </div>


                            {/* Hover Paragraph shown beside */}
                            <div className="absolute top-0 left-[105%] w-64 bg-white border border-gray-300 shadow-lg p-3 text-sm text-gray-800 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-20">
                                {city.paragraph}
                            </div>
                        </div>


                    ))}
                </div>
            </section>


            {/* Blog Section */}
            <section id="blog-section" className="py-16 bg-gray-50">

                <h2 className="text-4xl font-bold text-center mb-12">Blogs And Articles</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {[
                        {
                            id: 'food',
                            title: 'Cultural India : Indian Food',
                            source: 'CULTURALINDIA.NET',
                            description:
                                'The traditional food of India has been widely appreciated for its fabulous use of herbs and spices. Indian cuisine is known for its large assortment of dishes.',
                            image: '/assets/blog1.jpeg',
                        },
                        {
                            id: 'diversity',
                            title: 'The Unity of India in Diversity : Religions',
                            source: "SOUMIK'S BLOG",
                            description:
                                'Diversity characterizes India. The diverse characters of India are strongly unified and perfectly assimilated to emerge as one single nation.',
                            image: '/assets/blog2.jpeg',
                        },
                        {
                            id: 'linguistic',
                            title: 'A Look at India’s Amazing Linguistic Diversity',
                            source: 'TRANSLATEMEDIA',
                            description:
                                'India is a big country and it packs in a truly amazing diversity of languages and dialects.',
                            image: '/assets/blog3.jpeg',
                        },
                        {
                            id: 'festivals',
                            title: 'The Spectrum of National festivals of India',
                            source: 'TREEBO',
                            description:
                                'Such diverse cultures, culminating such varied festivals celebrated by different religious communities is what makes India truly unique.',
                            image: '/assets/blog4.jpg',
                        },
                    ].map((blog) => (
                        <div
                            key={blog.id}
                            className="w-72 border rounded-xl shadow hover:scale-105 transition-transform bg-white cursor-pointer"
                            onClick={() => (window.location.href = `/blog/${blog.id}`)}
                        >
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-48 object-cover rounded-t-xl"
                            />
                            <div className="p-4">
                                <h4 className="text-sm text-gray-500 font-semibold mb-1">
                                    {blog.source}
                                </h4>
                                <h3 className="text-lg font-bold text-blue-700 mb-2">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-700 text-sm">{blog.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* Footer Section */}
            <section   id="footer-section"   className="bg-white mt-10 px-6 py-10 border-t border-gray-200">
                <div className="h-1 bg-gray-300 mb-10"></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-700">
                    <div>
                        <h3 className="text-lg font-semibold text-green-600 mb-4">Travel with us</h3>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Dekho Apna Desh!</h3>
                        <ul className="space-y-1">
                            <li>
                                <a href="https://www.indianculture.gov.in/" target="_blank" rel="noopener noreferrer"
                                   className="hover:text-green-700 hover:underline">
                                    Indian Culture
                                </a>
                            </li>
                            <li>
                                <a href="https://www.incredibleindia.org/" target="_blank" rel="noopener noreferrer"
                                   className="hover:text-green-700 hover:underline">
                                    Incredible!India
                                </a>
                            </li>
                            <li>
                                <a href="https://www.indiaculture.nic.in/" target="_blank" rel="noopener noreferrer"
                                   className="hover:text-green-700 hover:underline">
                                    Ministry of Culture
                                </a>
                            </li>
                            <li>
                                <a href="https://swachhbharat.mygov.in/" target="_blank" rel="noopener noreferrer"
                                   className="hover:text-green-700 hover:underline">
                                    Swachh Bharat
                                </a>
                                </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Visit For More</h3>
                        <ul className="space-y-1">
                            <li>
                                <a href="https://www.mygov.in/" target="_blank" rel="noopener noreferrer"
                                   className="hover:text-green-700 hover:underline">
                                    My Government
                                </a>
                            </li>

                                <li>
                                    <a href="https://www.digitalindia.gov.in/" target="_blank" rel="noopener noreferrer"
                                       className="hover:text-green-700 hover:underline">
                                        Digital India
                                    </a>
                                </li>


                            <li>
                                <a href="https://tourism.gov.in/" target="_blank" rel="noopener noreferrer"
                                   className="hover:text-green-700 hover:underline">
                                    Ministry of Tourism
                                    </a>
                            </li>
                        </ul>
                    </div>


                </div>

                <div className="mt-10 border-t-4 border-orange-500"></div>
            </section>

        </>
    );
};

export default HomePage;
