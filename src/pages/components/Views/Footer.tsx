import Link from 'next/link';
import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='bg-[#E8EFF6] py-16'>
            <div className='container'>
                <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 xl:gap-18 px-5'>
                    <div className='max-w-[375px]'>
                        <h3 className='text-lg font-semibold'>Thesis Template</h3>
                        <p className=' font-normal pt-5'>Thesis is a powerful, magazine style and modern Webflow Blog Template with powerful features, fully responsive and mobile-friendly.</p>
                        <span className='max-w-[120px] sm:max-w-[199px] mt-5 flex justify-center gap-2 items-center cursor-pointer rounded-full px-2 sm:px-8 py-3 text-white bg-[#020202]'>
                            Buy Template
                            <span className='hidden sm:flex text-2xl font-semibold pt-[2px]'><BsArrowRightShort /></span>
                        </span>
                    </div>
                    <div className='flex justify-between gap-10'>
                        <div className='pt-10 md:pt-0 min-w-[90px]'>
                            <h3 className='text-lg font-semibold pb-4'>Menu</h3>
                            <div>
                                {menu.map((item, index) => {
                                    return (
                                        <div className='links py-2 font-normal' key={index}>
                                            <Link href={item.path}> <span>{item.link}</span></Link>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='pt-10 md:pt-0'>
                            <h3 className='text-lg font-semibold pb-4'>Address</h3>
                            <span>Riverside 25,<br />San Francisco, California</span>
                            <h3 className='text-lg font-semibold pb-4 pt-5'>Inquiries</h3>
                            <span className='block'>800 234 567</span>
                            <span>hello@website.com</span>
                        </div>
                    </div>
                    <div className='min-w-[270px] pt-10 lg:pt-0'>
                        <h3 className='text-lg font-semibold pb-2'>News Letter</h3>
                        <span className='bg-white block my-4'>
                            <input className='pl-4 py-2 outline-[0.3px] w-full outline-blue-200 border-none' placeholder='Your Name' />
                        </span>
                        <span className='bg-white  block my-4'>
                            <input className='pl-4 py-2 outline-[0.3px] w-full outline-blue-200 border-none' placeholder='Youyr Email' />
                        </span>
                        <span className='flex justify-center items-center cursor-pointer my-4 rounded-sm px-8 py-3 text-white bg-[#020202]'>
                            Join!
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer


const menu = [
    {
        link: 'Home',
        path: '/'
    },
    {
        link: 'Blog',
        path: '/'
    }, {
        link: 'Latest',
        path: '/latest'
    }, {
        link: 'Contact Us',
        path: '/'
    },

]
