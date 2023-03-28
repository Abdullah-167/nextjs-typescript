import Image from 'next/image'
import React from 'react'

const Images = () => {
    return (
        <div className='container py-32'>
            <div className='flex flex-wrap md:flex-nowrap justify-center gap-20 px-5'>
                <div className='grid grid-cols-1 sm:grid-cols-4 gap-2'>
                    {imgs.map((item, index) => {
                        return (
                            <div className='max-w-full sm:max-w-[300px] mx-auto relative overflow-hidden' key={index}>
                                <Image className='h-[300px] object-cover transform-gpu hover:scale-105 transition-all duration-500' src={item.img} alt={'imgs'} width={1000} height={200} />
                            </div>
                        )
                    })}
                </div>
                <div>
                    {secSect.map((item, index) => {
                        return (
                            <div className='mx-auto relative overflow-hidden' key={index}>
                                <Image className='w-full sm:w-[800px] h-[300px] object-cover transform-gpu hover:scale-105 transition-all duration-500' src={item.img} alt={'imgs'} width={400} height={200} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Images


const imgs = [
    {
        img: '/imgs/car.jpg',
    },
    {
        img: '/imgs/gclass.jpg',
    },
    {
        img: '/imgs/lambo.jpg',
    },
    {
        img: '/imgs/bike.jpg',
    },

]

const secSect = [
    {
        img: '/imgs/baking.jpg'
    }
]
