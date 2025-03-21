import React, {Fragment, useEffect, useState} from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import {cn} from "~/common/css.ts";

interface CarouselProps {
    images: { src: string; alt: string }[];
}

const Carousel = ({ images }: CarouselProps) => {
    const [imageIndex, setImageIndex] = useState(0);

    const nextSlide = () => {
        setImageIndex((prevIndex) => {
            if (prevIndex === images.length - 1) return 0
            return prevIndex + 1
        });
    };

    const prevSlide = () => {
        setImageIndex((prevIndex) => {
            if (prevIndex === 0) return images.length - 1
            return prevIndex - 1
        });
    };

    console.log(images)
    //immagine 1: onNext: aggiungo transalte-x-full, onPRev: aggiungo -translate-x-full
    //immagine 2: onNext: aggiungo transalte-x-full, onPRev: aggiungo -translate-x-full

    return (
        <div className="relative w-full h-full">
            <div
                className='w-full h-full flex overflow-hidden'
            >
                {images.map(({ src, alt }, index) => (
                    <Fragment>
                        <div
                            className='object-cover w-full h-full block shrink-0 grow-0 transition-transform duration-1000 ease-in-out'
                            style={{translate: `${-100 * imageIndex}%`}}
                        >
                            <img
                                key={src}
                                src={src}
                                alt={alt}
                                aria-hidden={imageIndex !== index}
                                className='object-cover w-full h-full block shrink-0 grow-0'
                            />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-blue-500 flex space-x-8">
                                <button className='bg-blue-900'>
                                    get tickets
                                </button>
                                <button className='bg-blue-900'>
                                    explore
                                </button>
                            </div>
                        </div>
                    </Fragment>

                ))}
            </div>
            <button
                className="absolute block top-1/2 left-5 transform -translate-y-1/2 bg-gray-800 transition-colors duration-300 hover:bg-green-950 text-white p-4 rounded z-10 cursor-pointer"
                onClick={prevSlide}
            >
                <div
                    className="w-6  border-green-600 h-6
                        border-l-2 border-b-2 translate-x-1.5
                        transform rotate-45 rounded-bl"
                />
            </button>
            <button
                className="absolute block top-1/2 right-5 transform -translate-y-1/2 bg-gray-800 transition-colors duration-300 hover:bg-green-950 text-white p-4 rounded z-10 cursor-pointer"
                onClick={nextSlide}
            >
                <div
                    className="w-6  border-green-600 h-6
                        border-t-2 border-r-2 -translate-x-1.5
                        transform rotate-45 rounded-tr"
                />
            </button>
            <div
                className='absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-3 bg-gray-800 p-2 rounded-xl z-50'
            >
                {images.map((_, index) => (
                    <button
                        key={index}
                        className="[unset:all] block cursor-pointer w-2.5 h-2.5  relative"
                        aria-label={`View Image ${index + 1}`}
                        onClick={() => setImageIndex(index)}
                    >
                        {index === imageIndex ? (
                            <div className="w-full h-full bg-gray-400 rounded-full"></div>
                        ) : (
                            <div className="w-full h-full border-1 transition-all hover:scale-90 duration-300 hover:bg-green-800 border-gray-600 rounded-full"></div>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
