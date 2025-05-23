'use client';
import React from 'react';

const heritageSites = [
    { name: 'Modhera Sun Temple', image: '/assets/modhera.jpeg' },
    { name: 'Adi Annamalai temple', image: '/assets/adi-annamalai.jpeg' },
    { name: 'Western Ghats', image: '/assets/western-ghats.jpeg' },
    { name: 'Red Fort', image: '/assets/red-fort.jpeg' },
    { name: 'Chhatrapati Shivaji Terminus', image: '/assets/shivaji-terminus.jpeg' },
    { name: 'Bandipur National Park', image: '/assets/bandipur.jpeg' },
    { name: 'Ganga Aarti', image: '/assets/ganga-aarti.jpeg' },
];

const SecondSection: React.FC = () => {
    return (
        <div className="relative scroll-smooth font-sans">

            {/* Hero Section */}
            <section className="text-center mt-12 px-4">
                <h1 className="text-4xl font-bold text-gray-800">Where science meets the sacred!</h1>
                <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
                    Witness the grand Architecture! How about taking your kids on an exploration of India's heritage this holiday season?
                </p>
            </section>

            {/* Cards Section */}
            <section className="flex justify-center flex-wrap gap-6 mt-16 px-4">
                {heritageSites.map((site, index) => (
                    <div
                        key={index}
                        className="group relative w-[100px] h-[320px] rounded-[50px] overflow-hidden cursor-pointer transition-transform duration-500 hover:w-[250px]"
                    >
                        <img
                            src={site.image}
                            alt={site.name}
                            className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-90"
                        />
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300"/>
                        <span
                            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 rotate-[-90deg] group-hover:rotate-0 group-hover:bottom-6 text-white font-semibold text-sm transition-all duration-500 ease-in-out text-center">

              {site.name}
            </span>
                    </div>
                ))}
            </section>

            {/* Scroll-to-top */}
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => window.scrollTo({top: 0, behavior: 'smooth' })}
                    className="bg-orange-500 text-white text-xl rounded-full px-4 py-2 shadow-md hover:bg-orange-600"
                >
                    ↑
                </button>
            </div>
        </div>
    );
};

export default SecondSection;
