import React from 'react'
import Box from '../../../../../public/imgs/box.jpg'
import Building from '../../../../../public/imgs/building2.jpg'
import Bridge from '../../../../../public/imgs/bridge.jpg'
import White from '../../../../../public/imgs/whitebuilding.jpg'
import Bike from '../../../../../public/imgs/bike.jpg'
import GClass from '../../../../../public/imgs/gclass.jpg'
import Card from '../../Card'

const Popular = () => {
    return (
        <div className='container py-16'>
            <div className='flex flex-wrap lg:flex-nowrap justify-between gap-20 px-5'>
                <div>
                    <h1 className='text-2xl font-semibold'>Popular</h1>
                    <div className='py-5'>
                        {items.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className='flex max-w-full py-7 items-center  justify-between gap-20 border-b-[1px] border-b-black'>
                                        <span className=' text-[20px] sm:text-2xl'>
                                            <Card image={item.img} title={item.title} buttonTitle={''} seccolor={''} fontweight={'600'} display={'flex'} visible='none' gap={'20px'} alignItems={'center'} title2={''} secFontweight={''} secFontSize={''} show={''} imgMaxHeight={''} width={''} outerImg={'200px'} minHeight={''} />
                                        </span>
                                        <span className='hidden lg:flex text-2xl font-semibold'>{item.counting}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className=' relative'>
                    <div className='sticky top-10'>
                        <h1 className='text-2xl font-semibold'>Automotive</h1>
                        <div>
                            {list.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className='py-4 border-b-[1px] border-b-black pt-5 sm:pt-10'>
                                            <Card image={item.img} title={item.title} buttonTitle={'AUTOMOTIVE'} seccolor={''} fontweight={'700'} display={''} visible={''} gap={''} alignItems={''} title2={''} secFontweight={''} secFontSize={''} show={''} width={''} imgMaxHeight={'200px'} outerImg={''} minHeight={''} />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popular

const items = [
    {
        img: Box,
        title: "Call for Entries: Architect Awards Is Open for Submissions!",
        counting: "1"
    },
    {
        img: Building,
        title: "Call for Entries: Architect Awards Is Open for Submissions!",
        counting: "2"
    }, {
        img: Bridge,
        title: "Call for Entries: Architect Awards Is Open for Submissions!",
        counting: "3"
    }, {
        img: White,
        title: "Call for Entries: Architect Awards Is Open for Submissions!",
        counting: "4"
    },
]

const list = [
    {
        img: Bike,
        title: "Honda Announces Four New Electric Motorcycles Coming",
    }, {
        img: GClass,
        title: "James Bond’s DB5 – The Book That’s Licensed To Thrill",
    },
]