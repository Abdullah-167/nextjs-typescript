import React from 'react'
import Title from '../Title'
import Slider from './Slider';

const ExploreLatest = () => {

    return (
        <div className='max-w-[1100px] mx-auto pb-0 sm:pb-10 pt-10 sm:pt-20'>
            <div className='text-2xl sm:text-[42px] pb-10 px-5'>
                <Title title1='Explore' title2='Latest Post' fontWeight='600' />
            </div>
            <Slider />
        </div>
    )
}

export default ExploreLatest
