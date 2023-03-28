import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'
import { IoSearchOutline, IoFastFoodOutline } from "react-icons/io5";
import { BiRestaurant } from "react-icons/bi";
import { GrDiamond } from "react-icons/gr";
import { MdRestaurantMenu } from "react-icons/md";



const Header = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activetab, setActiveTab] = useState(1);

    const inputRef = useRef(null);

    const toggleInput = () => {
        setIsExpanded(!isExpanded);
    }

    useEffect(() => {
        const handleOutsideClick = (event: { target: any; }) => {
            if (isExpanded && inputRef.current && !inputRef.current.contains(event.target)) {
                setIsExpanded(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isExpanded]);

    return (
        <div className='container'>
            <div className='mx-auto object-cover pt-10'>
                <Image src='/imgs/building.jpg' alt='building' width={2000} height={100} />
            </div>
            <div className='flex justify-center mt-10'>
                <div className="relative" ref={inputRef}>
                    <input
                        type="text"
                        placeholder="Search"
                        className={`py-2 pl-8 pr-3 rounded-lg border border-black outline-gray-300 focus:border-transparent ${isExpanded ? "w-[300px] sm:w-[500px] transition-all duration-500" : "w-[120px]"}`}
                        onClick={toggleInput}
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer" onClick={toggleInput}>
                        <IoSearchOutline className="text-gray-400" />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4 py-10 px-5'>
                {data.map((item, index) => {
                    return (
                        <div>
                            <div key={index} className="relative cursor-pointer  transition duration-300">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={220 * 2}
                                    height={220 * 2}
                                    className="min-h-[210px] max-h-[210px] object-cover"
                                    onClick={() => setActiveTab(item.id)}
                                />
                                <div className="absolute transition-all duration-700 hover:bg-[rgba(0,0,0,0.2)] bg-[rgba(0,0,0,0.7)] inset-0 px-4 py-2 text-white" onClick={() => setActiveTab(item.id)}>
                                    <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                        {item.title}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div>
                {data.map((item, index) => {
                    if (activetab === item.id) {
                        return (
                            <div className='flex flex-wrap xl:flex-nowrap justify-center gap-7 px-5' key={index}>

                                {item.subCategories.map((category, idx) => {
                                    return (
                                        <div>
                                            <div key={idx}>
                                                <div className='flex gap-3 my-3 items-center justify-center'>
                                                    <button className='relative text-lg flex gap-3 items-center justify-between py-3 px-7 rounded-xl text-black shadow-lg'>
                                                        <span className='font-medium'>{category.icon}</span>
                                                        <span className='mr-2'>{category.title}</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                        )
                    }
                })}


            </div>
        </div>
    )
}

export default Header

const data = [
    {
        id: 1,
        title: 'Resturant',
        image: '/imgs/img1.jpg',
        subCategories: [
            {
                title: 'Food',
                icon: <MdRestaurantMenu />
            },
            {
                title: 'Cake',
                icon: <MdRestaurantMenu />
            },
            {
                title: 'Drinks',
                icon: <MdRestaurantMenu />
            },
            {
                title: 'Bread',
                icon: <MdRestaurantMenu />
            }, {
                title: 'Pastery',
                icon: <MdRestaurantMenu />
            }, {
                title: 'Vine',
                icon: <MdRestaurantMenu />
            },
        ]
    }, {
        id: 2,
        title: 'Attraction',
        image: '/imgs/img2.jpg',
        subCategories: [
            {
                title: 'Attraction',
                icon: <GrDiamond />
            },
            {
                title: 'Shine',
                icon: <GrDiamond />
            },
            {
                title: 'Shine',
                icon: <GrDiamond />
            },
            {
                title: 'Shine',
                icon: <GrDiamond />
            }, {
                title: 'Shine',
                icon: <GrDiamond />
            }, {
                title: 'Shine',
                icon: <GrDiamond />
            },
        ]
    },
    {
        id: 3,
        title: 'Entertainment',
        image: '/imgs/img3.jpg',
        subCategories: [
            {
                title: 'Entertainment',
                icon: <MdRestaurantMenu />
            },
            {
                title: 'Cake',
                icon: <MdRestaurantMenu />
            },
            {
                title: 'Drinks',
                icon: <MdRestaurantMenu />
            },
            {
                title: 'Bread',
                icon: <MdRestaurantMenu />
            }, {
                title: 'Pastery',
                icon: <MdRestaurantMenu />
            }, {
                title: 'Vine',
                icon: <MdRestaurantMenu />
            },
        ]
    },
    {
        id: 4,
        title: 'Resturant',
        image: '/imgs/img4.jpg',
        subCategories: [
            {
                title: 'Food',
                icon: <MdRestaurantMenu />
            },
            {
                title: 'Cake',
                icon: <MdRestaurantMenu />
            },
            {
                title: 'Drinks',
                icon: <MdRestaurantMenu />
            },
            {
                title: 'Bread',
                icon: <MdRestaurantMenu />
            }, {
                title: 'Pastery',
                icon: <MdRestaurantMenu />
            }, {
                title: 'Vine',
                icon: <MdRestaurantMenu />
            },
        ]
    },
]

