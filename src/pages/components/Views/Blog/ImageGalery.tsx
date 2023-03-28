import Image from 'next/image'
import React from 'react'
import Title from '../Title'

const ImageGalery = () => {
    return (
        <div className='container py-20 px-5'>
            <h2 className='text-[42px] pb-8'>
                <Title title1='Image' title2='‍Gallery.' fontWeight='600'/>
            </h2>
            <div className='justify-items-center grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5 border-b-[1px] border-b-black pb-10'>
                {images.map((item, index) => {
                    return (
                        <div className='overflow-hidden' key={index}>
                            <div className='max-w-full sm:max-w-[300px] max-h-[300px] transform-gpu hover:scale-105 transition-all duration-700' key={index}>
                                <Image src={item.img} alt={item.tag} width={1000} height={100} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ImageGalery

const images = [
    {
        img: '/imgs/building.jpg',
        tag: 'building'
    },
    {
        img: '/imgs/acbuilding.jpg',
        tag: 'building'
    }, {
        img: '/imgs/building3.jpg',
        tag: 'building'
    }, {
        img: '/imgs/building4.jpg',
        tag: 'building'
    }, {
        img: '/imgs/building.jpg',
        tag: 'building'
    },
]