import Image from 'next/image'
import React from 'react'
import Title from '../Title'

const Newsletter = () => {

    return (
        <div className='bg-[#020202] bg-img py-10 sm:py-20'>
            <div className='max-w-[600px] m-auto px-5'>
                <div className='max-w-[50px]'>
                    <Image src='/imgs/newlogo.png' width={1000} height={100} alt='logo' />
                </div>
                <div className='text-4xl sm:text-[60px] max-w-[390px] leading-[60px] pt-10'>
                    <Title title1='Subscribe to our' title2='newsletter!' color1='white' fontWeight='500' />
                </div>
                <p className='text-white text-[20px] sm:text-[26px] pt-8'>Do you freelance or work at a digital agency? Are you planning out your NCC agenda?</p>
                <div className='pt-10 flex sm:block w-full'>
                    <div className='block sm:flex w-full'>
                        <input className='w-full my-5  flex sm:w-[150px] outline-none h-12 px-4 rounded-md sm:rounded-l-full ' placeholder='Your Name' type='text' />
                        <input className='border-l-[1px] w-full my-5 flex sm:w-[150px] outline-none h-12 rounded-md sm:rounded-none px-4 border-l-[gray] ' placeholder='Your Name' type='text' />
                        <button className='bg-[#505253] w-full my-5 flex justify-center pt-3 sm:w-[150px] h-12 rounded-md sm:rounded-r-full text-white'>
                            <span className=''>
                                JOIN!
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter