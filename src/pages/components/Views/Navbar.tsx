import Image from 'next/image'
import React from 'react'
import Logo from '../../../../public/imgs/logo.png'
import BlogButton from '../Buton'
import { MdKeyboardArrowRight } from 'react-icons/md';
import { CiSearch } from 'react-icons/ci';

function Navbar() {
    return (
        <div className=' max-w-[1250px] m-auto border-b-[1px] border-b-[#A6ABAE] mx-5'>
            <div className='flex  pt-5  justify-between items-center text-base font-medium'>
                <div className='flex pointer gap-7 justify-between items-center'>
                    <span>
                        <Image src={Logo} width={35} height={35} alt='logo' />
                    </span>

                    <span>About Us</span>
                    <span>FAQ</span>
                    <span>Contact Us</span>
                </div>
                <div className='flex pointer items-center gap-8'>
                    <span className='flex items-center gap-2'>Pages <a className='circle pt-1'> <MdKeyboardArrowRight /> </a></span>
                    <span>Finances</span>
                    <span>Arcitecture</span>
                    <span>View All</span>
                    <div className='flex  pointer gap-4'>
                        <BlogButton title='Subscribe!' padding='7px 20px' fontSize='14px' borderRadius='2px' hoverBg='black' />
                        <a className='cursor-pointer text-2xl'>
                            <CiSearch />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar 