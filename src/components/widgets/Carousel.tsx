// Carousel.tsx
import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CarouselProps {
    images: { src: string; alt: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ images }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const totalImages = images.length;

    const goToNext = () => {
        console.log(`currentIndex: ${currentIndex}`);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages); // Wraps around at the end
    };

    // Go to the previous image (wraps around when at the start)
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalImages - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        // if (!autoSlide) return
        const slideInterval = setInterval(goToNext, 3000)
        return () => clearInterval(slideInterval)
    }, [])

    return (
        <div className='overflow-hidden relative'>
            <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {[...images.map((s) => (
                    <img src={s.src} alt={s.alt} key={s.alt} />
                ))]}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={goToPrevious} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    MAMAAM
                </button>
                <button onClick={goToNext} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    CODJJ
                </button>
            </div>
            <div className='absolute bottom-4 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {images.map((s, i) => (
                        <div key={i} className={`transition-all w-1.5 h-1.5 bg-white rounded-full  ${currentIndex === i ? "p-0.5" : "bg-opacity-50"}`} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;

