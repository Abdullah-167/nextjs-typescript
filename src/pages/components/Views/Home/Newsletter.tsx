import Image from 'next/image'
import React from 'react'
import Title from '../Title'

const Newsletter = () => {
    return (
        <div className='bg-[#020202] bg-img py-20'>
            <div className='max-w-[600px] m-auto'>
                <div className='max-w-[50px]'>
                    <Image src='/imgs/newlogo.png' width={1000} height={100} alt='logo' />
                </div>
                <div className='max-w-[607px]'>
                    <Title title1='Subscribe to our' title2='newsletter!' color1='white' fontWeight='500' />
                </div>
                <p className='text-white text-[26px] pt-8'>Do you freelance or work at a digital agency? Are you planning out your NCC agenda?</p>
                <div className='pt-10'>
                    <input className='w-[150px] outline-none h-12 px-4 rounded-l-full ' placeholder='Your Name' type='text' />
                    <input className='border-l-[1px] w-[150px] outline-none h-12 px-4 border-l-[gray] ' placeholder='Your Name' type='text' />
                    <button className='bg-[#505253] w-[150px] h-12 rounded-r-full text-white'>
                        <span className=''>
                            JOIN!
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter