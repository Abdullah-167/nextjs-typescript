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
        <div className='text-size container px-5'>
            <div className='text-2xl sm:text-[42px] pt-10 text-center sm:text-left sm:pt-14 pb-7 sm:pb-10'>
                <Title title1='Explore' title2='Trending Topics' fontWeight='500'/>
            </div>
            <div className='flex flex-wrap justify-center sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-5 pt-5'>
                {items.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className='max-w-[300px]'>
                                <Card image={item.img} buttonTitle={item.buttonTitle} title={item.title} seccolor={''} fontweight={''} display={''} visible={''} gap={''} alignItems={''} title2={''} secFontweight={undefined} secFontSize={undefined} show={''} imgMaxHeight={''} width={undefined} outerImg={''} minHeight={''}  />
                                <div className='flex gap-[1px] items-center font-semibold cursor-pointer pt-4'>
                                    <span className='hover:pr-1 transition-all duration-300'>View Topic</span>
                                    <a className='hover:pl-1 transition-all duration-300'><MdKeyboardArrowRight /></a>
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
        title: "View articles about the most recent trends on Architecture",
        img: Stachu

    },
]
