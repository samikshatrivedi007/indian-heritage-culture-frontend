'use client';
import React from 'react';

const MapSection: React.FC = () => {
    const scrollToMap = () => {
        document.getElementById("mapSection")?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div className="text-center my-6">
                <button
                    onClick={scrollToMap}
                    className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300"
                >
                    View Map
                </button>
            </div>

            <section
                className="py-16 px-4 text-black text-center bg-black bg-blue-50 bg-cover bg-center"
                id="mapSection"
            >
                <h2 className="text-3xl font-bold mb-4">Locate top heritage sites in India!</h2>
                <p className="text-lg max-w-2xl mx-auto mb-8">
                    This map depicts the historical sites in India in terms of their geographical location.
                    Click on any pointer to learn more about the place and to appreciate the diversity!
                </p>
                <div className="w-[90%] max-w-[900px] mx-auto rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-[1.01]">
                    <iframe
                        title="Top Heritage Sites in India"
                        src="https://www.google.com/maps/d/u/0/embed?mid=1dGZZN07xGIF-Pj4WOAO60hvrpwAxF0A&ehbc=2E312F"
                        width="100%"
                        height="500"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </section>
        </>
    );
};

export default MapSection;
