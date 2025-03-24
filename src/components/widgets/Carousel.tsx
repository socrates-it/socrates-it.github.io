import React, {Fragment, useEffect, useState} from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import {cn} from "~/common/css.ts";

const images = [
    {
        'src': "src/assets/images/canyon.jpg",
        'alt': 'canyon.jpg',
    },
    {
        'src': "src/assets/images/fiori.jpg",
        'alt': 'fiori.jpg',
    },
    {
        'src': "src/assets/images/foresta.jpg",
        'alt': 'foresta.jpg',
    }
]

const Carousel = () => {
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

    return (
        <div className="group relative top w-full h-full">
            <div
                className='w-full h-full flex overflow-hidden'
            >
                {images.map(({ src, alt }, index) => (
                    <Fragment key={alt} >
                        <div
                            className={`w-full h-full shrink-0 grow-0 transition-transform duration-1000 ease-in-out]`}
                            style={{
                                translate: `${-100 * imageIndex}%`,
                                backgroundImage: `url(${src})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover'
                            }}
                        >
                            <div className={cn(
                                     "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                                     "text-center bg-black/50 p-6 rounded-xl text-white uppercase",
                                     'space-y-4 sm:space-y-6 max-w-40 sm:max-w-full text-xs sm:text-lg',
                                     'opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-1000',
                                 )}
                            >
                                <p>Design Thinking Conference</p>
                                <p>2025 edition Coming soon</p>
                                <div className='flex justify-between items-center space-x-20'>
                                    <button onClick={() => prevSlide()} className='py-2 px-6 bg-pink-700 rounded uppercase cursor-pointer'>get ticket</button>
                                    <button onClick={() => nextSlide()} className='py-2 px-6 bg-pink-700 rounded uppercase cursor-pointer'>explore</button>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                ))}
            </div>
            <button
                className="opacity-100 sm:opacity-0 group-hover:opacity-100 absolute block top-1/2 left-5 transform -translate-y-1/2 bg-gray-800 transition-all duration-300 hover:bg-green-950 text-white p-2 sm:p-4 rounded z-10 cursor-pointer"
                onClick={prevSlide}
            >
                <div
                    className="h-3 w-3 sm:w-6 sm:h-6 border-green-600
                        border-l-2 border-b-2 transalte-x-[5] translate-x-0.5 sm:translate-x-1.5
                        transform rotate-45 rounded-bl"
                />
            </button>
            <button
                className="opacity-100 sm:opacity-0 group-hover:opacity-100 absolute top-1/2 right-5 transform -translate-y-1/2 bg-gray-800 transition-all duration-300 hover:bg-green-950 text-white p-2 sm:p-4 rounded z-10 cursor-pointer"
                onClick={nextSlide}
            >
                <div
                    className="h-3 w-3 sm:w-6 sm:h-6 border-green-600
                        border-t-2 border-r-2 -transalte-x-[5] -translate-x-0.5 sm:-translate-x-1.5
                        transform rotate-45 rounded-tr"
                />
            </button>
            <div
                className={
                    cn('absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-3 bg-gray-800 p-2 rounded-xl',
                    'opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300')
                }
            >
                {images.map((_, index) => (
                    <button
                        key={index}
                        className="[unset:all] block cursor-pointer w-2.5 h-2.5 relative"
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
