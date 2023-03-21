import Image from 'next/image'
import React from 'react'
import Card from '../../Card'
import Title from '../Title'
import Jeep from '../../../../../public/imgs/jeep.jpg'
import Seen from '../../../../../public/imgs/seen.jpg'
import Wall from '../../../../../public/imgs/wall.jpg'
import Stachu from '../../../../../public/imgs/stachu.jpg'
import { MdKeyboardArrowRight } from 'react-icons/md';


const Explore = () => {
    return (
        <div className='container'>
            <div className='pt-14'>
                <Title title1='Explore' title2='Trending Topics' fontWeight='500' maxWidth='50px' />
            </div>
            <div className='flex justify-between gap-5s'>
                {items.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className='max-w-[300px]'>
                                <Card image={item.img} buttonTitle={item.buttonTitle} title={item.title} fontSize={''} seccolor={''} square={undefined} fontweight={''} display={''} maxWidth={undefined} visible={''} gap={''} alignItems={''} maxHeight={''} title2={''} secFontweight={undefined} secFontSize={undefined} />
                                <div className='flex gap-[2px] items-center font-semibold cursor-pointer pt-4'>
                                    <span className='hover:pr-1 transition-all duration-300'>View Topic</span>
                                    <a className='pt-[5px] hover:pl-1 transition-all duration-300'><MdKeyboardArrowRight /></a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Explore


const items = [
    {
        buttonTitle: "Automotive",
        title: "The best place to learn about the latest news about cars.",
        img: Jeep

    },
    {
        buttonTitle: "FINANCES",
        title: "Stay updated with the best and latest news about finances.",
        img: Seen

    }, {
        buttonTitle: "ARCITECTURE",
        title: "View articles about the most recent trends on Architecture.",
        img: Wall

    },
    {
        buttonTitle: "LIFE STYLE",
        title: "A curation of interests and activities based on the designers life.",
        img: Stachu

    },
]
