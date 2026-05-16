// Gallery.jsx

import { useState } from "react";
import { motion } from "framer-motion";

import img1 from './img1.jpeg';
import img2 from './img2.jpeg';
import img3 from './img3.jpeg';
import img4 from './img4.jpeg';
import img5 from './img5.jpeg';
import img6 from './img6.jpeg';
import img7 from './img7.jpeg';
import img8 from './img8.jpeg';

const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
];

export default function Gallery() {
    const [showAll, setShowAll] = useState(false);

    return (
        <section className="py-20 bg-white" id="gallery">
            <div className="max-w-6xl mx-auto px-6">




                <div className="text-center mb-14">
                    <p className="text-sm uppercase tracking-[0.2em] text-gray-900 font-semibold mb-3">
                        Inside ACTS Physiotherapy
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold   text-emerald-600">
                        Our Gallery
                    </h2>

                    <p className="text-[12px] lg:text-[15px]  tracking-[0.2em] text-gray-900 font-semibold mt-3 mb-3">
                        Take a look inside our modern physiotherapy clinic and treatment spaces.
                    </p>
                </div>

                {/* Mobile View */}
                <div className="grid grid-cols-1 gap-5 lg:hidden">
                    {(showAll ? images : images.slice(0, 4)).map((img, index) => (
                        <div key={index} className="overflow-hidden rounded-3xl">
                            <img
                                src={img}
                                alt=""
                                className="w-full h-[220px] object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Desktop View */}
                <div className="hidden lg:grid lg:grid-cols-3 gap-5">
                    {(showAll ? images : images.slice(0, 3)).map((img, index) => (
                        <div key={index} className="overflow-hidden rounded-3xl">
                            <img
                                src={img}
                                alt=""
                                className="w-full h-[260px] object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Button */}
                <div className="flex justify-center mt-10">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-7 py-3 rounded-full bg-emerald-600 text-white"
                    >
                        {showAll ? "Show Less" : "Show More"}
                    </button>
                </div>

            </div>
        </section>
    );
}