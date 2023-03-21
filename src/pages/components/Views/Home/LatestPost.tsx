import React from 'react'
import Card from '../../Card'
import Title from '../Title'
import Lambo from '../../../../../public/imgs/lambo.jpg'
import Cycle from '../../../../../public/imgs/cycle.jpg'
import Backing from '../../../../../public/imgs/baking.jpg'
import Image from 'next/image'

const LatestPost = () => {
    return (
        <div className='container pb-20'>
            <div className='flex gap-20 justify-between'>
                <div>
                    <Title fontWeight='600' maxWidth='100px' title1='Explore' title2='Latest Post' />
                    <div>
                        {items.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className='pt-5 pb-20'>
                                        <Card image={item.img} title={item.title} buttonTitle={item.buttonTitle} fontSize={'20px'} seccolor={''} square={undefined} fontweight={'600'} display={'flex'} maxWidth={'400px'} visible={''} gap={'20px'} alignItems={''} maxHeight={'200px'} title2={item.subTitle} secFontweight={undefined} secFontSize={'16px'} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='min-w-[300px] pt-5'>
                    <div className='sticky top-0'>
                        <h1 className='text-2xl font-semibold'>Authors</h1>
                        <div className='flex gap-3 items-center'>
                            <div className='max-w-[50px] py-10'>
                                <Image className='rounded-full' src='/imgs/man.jpg' width={1000} height={100} alt='img' />
                            </div>
                            <div>
                                <h4 className='text-xl font-semibold'>Adan Harris</h4>
                                <span>Managing Editor</span>
                            </div>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <div className='max-w-[50px]'>
                                <Image className='rounded-full' src='/imgs/women.jpg' width={1000} height={100} alt='img' />
                            </div>
                            <div>
                                <h4 className='text-xl font-semibold'>Cathy Hills</h4>
                                <span> Marketing Associate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default LatestPost


const items = [
    {
        img: Lambo,
        buttonTitle: 'AUTOMOTIVE',
        title: "BMX Racing Shifts Into Controversy at Tokyo Games",
        subTitle: "Do you freelance or work at a digital agency? Are you planning out your NCC agenda? Here are 5 sessions that you need to check out.",
    },
    {
        img: Cycle,
        buttonTitle: 'AUTOMOTIVE',
        title: "BMX Racing Shifts Into Controversy at Tokyo Games",
        subTitle: "Do you freelance or work at a digital agency? Are you planning out your NCC agenda? Here are 5 sessions that you need to check out.",
    }, {
        img: Backing,
        buttonTitle: 'LIFE STYLE',
        title: "BMX Racing Shifts Into Controversy at Tokyo Games",
        subTitle: "Do you freelance or work at a digital agency? Are you planning out your NCC agenda? Here are 5 sessions that you need to check out.",
    },
]