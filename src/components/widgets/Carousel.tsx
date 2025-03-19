import React, { useState } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CarouselProps {
    images: { src: string; alt: string }[]; // Array of image objects with src and alt
}

const Carousel = ({ images }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleButtonClick = () => {
        console.log('Button clicked!');
    };

    return (
        <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
            <div className="relative">
                <img
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    className="w-full h-auto transition-opacity duration-500 ease-in-out"
                />
            </div>
            <button
                className={twMerge(
                    "absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full",
                    "hover:bg-gray-700 transition-all"
                )}
                onClick={goToPrevious}
            >
                &#8592;
            </button>
            <button
                className={twMerge(
                    "absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full",
                    "hover:bg-gray-700 transition-all"
                )}
                onClick={goToNext}
            >
                &#8594;
            </button>
            <button
                className={clsx(
                    "absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white text-black py-2 px-4 rounded-lg shadow-lg",
                    "hover:bg-gray-200 transition-all"
                )}
                onClick={handleButtonClick}
            >
                Click Me
            </button>
        </div>
    );
};

export default Carousel;
