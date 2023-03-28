import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Logo from '../../../../public/imgs/logo.png'
import BlogButton from '../Buton'
import { CiSearch } from 'react-icons/ci';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
function Navbar() {
    const [menuOpen, setMenuOpen] = useState()

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }, [menuOpen]);

    return (
        <div>
            <div className='border-b-[1px] border-b-[#A6ABAE]'>
                <div className='max-w-[1170px] m-auto px-5'>
                    <div className='hidden sm:flex pt-5 justify-between items-center text-base font-medium'>
                        <div className='flex gap-7 cursor-pointer justify-between items-center pb-5'>
                            <span>
                                <Link href='/'> <Image src={Logo} width={35} height={35} alt='logo' /> </Link>
                            </span>
                        </div>
                        <div className='flex pointer items-center gap-8'>
                            <div className='flex gap-7 pb-[18px]'>
                                {menu.map((item, index) => {
                                    return (
                                        <Link href={item.path} key={index}> <span>{item.link}</span> </Link>
                                    )
                                })}
                            </div>
                            <div className='flex i pointer gap-x-4 pb-4'>
                                <BlogButton title='Subscribe!' padding='7px 20px' fontSize='14px' borderRadius='2px' fontColor='white' hoverBg='black' />
                                <a className='cursor-pointer text-2xl'>
                                    <CiSearch />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={`flex sm:hidden curso pt-5 justify-between items-center text-base font-medium ${menuOpen ? '' : ''}`}>
                        <div className='flex gap-7 cursor-pointer justify-between items-center pb-5'>
                            <span>
                                <Link href='/'> <Image src={Logo} width={35} height={35} alt='logo' /> </Link>
                            </span>
                        </div>
                        <div>
                            {menuOpen ? (
                                <span className='text-3xl text-black  cursor-pointer' onClick={toggleMenu}>
                                    <RxCross2 />
                                </span>
                            ) : (
                                <span className='text-3xl text-black  cursor-pointer' onClick={toggleMenu}>
                                    <GiHamburgerMenu />
                                </span>
                            )
                            }

                        </div>
                    </div>

                </div>
            </div>
            <div className=''>
                {menuOpen && (
                    <div className={`menu ${menuOpen ? 'translate-x-0 bg-gray-100 duration-1000 transition-all' : 'translate-x-full'} block fixed inset-0 z-20 text-balck text-center text-lg mt-[70px]`} style={{ transform: menuOpen ? 'translateX()' : 'translateX(30%)' }}>
                        {menu.map((item, index) => (
                            <Link href={item.path} key={index}><span className='block py-2'>{item.link}</span></Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar


const menu = [

    {
        link: 'Blog',
        path: '/blog'
    }, {
        link: 'Latest',
        path: '/latest'
    }, {
        link: 'Contact Us',
        path: '/'
    },

]