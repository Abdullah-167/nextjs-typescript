import Image from 'next/image';
import { useState } from 'react';
import Title from '../Title';
import Laptop from '../../../../../public/imgs/laptop.jpg';
import Car from '../../../../../public/imgs/mercedes.jpg';
import Mobile from '../../../../../public/imgs/mobile.jpg';
import Hand from '../../../../../public/imgs/hand.jpg';
import { BsInstagram } from 'react-icons/bs';

const Inspiration = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleHover = (index:any) => {
        setHoveredIndex(index);
    };

    return (
        <div className='container py-20'>
            <span className='text-[42px] text-center sm:text-left'>
            <Title title1="Get" title2="Inspiration" fontWeight="600" />
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  pt-10 px-5">
                {images.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="relative overflow-hidden cursor-pointer py-5 sm:py-0"
                            onMouseEnter={() => handleHover(index)}
                            onMouseLeave={() => handleHover(null)}
                        >
                            <Image
                                src={item.img}
                                alt={item.alt}
                                className="w-full h-auto"
                            />
                            {hoveredIndex === index && (
                                <div className="absolute inset-0 flex justify-center items-center hover:bg-white hover:bg-opacity-75 hover:transition-all hover:duration-200 ease-in-out">
                                    <div className="transition-all duration-500">
                                        <BsInstagram size={50} />
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            <div className='flex justify-center pt-10'>
                <Image src='/imgs/logo.png' alt='log' width={40} height={40} />
            </div>
        </div>
    );
};

export default Inspiration;

const images = [
    {
        img: Laptop,
        alt: 'laptop',
    },
    {
        img: Car,
        alt: 'mercedes',
    },
    {
        img: Mobile,
        alt: 'mobile',
    },
    {
        img: Hand,
        alt: 'hand',
    },
];
