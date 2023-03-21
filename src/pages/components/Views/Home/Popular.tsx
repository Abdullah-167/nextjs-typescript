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
            <div className='flex gap-20'>
                <div>
                    <h1 className='text-2xl font-semibold'>Popular</h1>
                    <div className='py-5'>
                        {items.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className='flex py-7 items-center  justify-between border-b-[1px] border-b-black'>
                                        <Card image={item.img} title={item.title} buttonTitle={''} fontSize={'24px'} seccolor={''} square={undefined} fontweight={'600'} display={'flex'} maxWidth={'150px'} visible='none' gap={'20px'} alignItems={'center'} maxHeight={''} title2={''} secFontweight={undefined} secFontSize={undefined} />
                                        <span className='text-2xl font-semibold'>{item.counting}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl font-semibold'>Automotive</h1>
                    <div>
                        {list.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className='py-4 border-b-[1px] border-b-black'>
                                        <Card image={item.img} title={item.title} buttonTitle={'AUTOMOTIVE'} fontSize={''} seccolor={''} square={undefined} fontweight={'700'} display={''} maxWidth={'400px'} visible={''} gap={''} alignItems={''} maxHeight={''} title2={''} secFontweight={undefined} secFontSize={undefined} />
                                    </div>
                                </div>
                            )
                        })}
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