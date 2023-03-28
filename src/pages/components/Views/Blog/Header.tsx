import Image from 'next/image'
import React from 'react'
import Button from '../../Buton'
import Title from '../Title'
import Autohr from '../../../../../public/imgs/man.jpg'
import Bike from '../../../../../public/imgs/bike.jpg'
import Car from '../../../../../public/imgs/gclass.jpg'
import Card from '../../Card'

const Header = () => {
    return (
        <div className='container2 pb-20 px-5'>
            <div className='w-full  mx-auto object-cover pt-10'>
                <Image src='/imgs/building.jpg' alt='building' width={2000} height={100} />
            </div>
            <div className='flex flex-wrap md:flex-nowrap gap-20'>
                <div>
                    <div className='pt-10 border-b-[1px] border-b-black pb-7 mb-10'>
                        <Button title='ARCITECTURE' borderRadius='50px' padding='1px 16px' bordercolor='black' />
                        <div className='text-2xl sm:text-[42px] pt-7'>
                            <Title title1='Announcing Our First Magazine Blog Template on Webflow!' title2='' fontWeight='600' />
                            <p className='text-base sm:text-[25px] font-light pt-7 leading-[35px]'>Do you freelance or work at a digital agency? Are you planning out your NCC agenda? Here are 5 sessions that you need to check out.</p>
                        </div>
                    </div>
                    <h1 className='text-2xl sm:text-4xl font-semibold pb-6'>This is H1 Heading</h1>
                    <p className=' text-base font-normal'>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                </div>
                <div>
                    <div className='pt-5 sm:pt-10'>
                        <h1 className='text-2xl font-semibold'>Author</h1>
                        <div>
                            {publisher.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className='flex items-center gap-4'>
                                            <div className='max-w-[60px]'>
                                                <Image className='rounded-full' width={1000} height={100} alt={item.alt} src={item.pic} />
                                            </div>
                                            <div className='pt-2'>
                                                <h3 className=' text-lg font-semibold pt-6'>{item.publisherName}</h3>
                                                <p>{item.profession}</p>
                                                <p className='text-lg font-semibold pt-1'>{item.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className='relative'>
                        <div className='pt-10 sticky top-0'>
                            <h1 className='text-2xl font-semibold'>Trending Post</h1>
                            <div className='pt-7'>
                                {trendingPost.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <Card image={item.img} title={item.title} buttonTitle={item.btnTitle} seccolor={''} fontweight={'600'} display={''} visible={''} gap={''} alignItems={''} title2={''} secFontweight={undefined} secFontSize={undefined} show={''} imgMaxHeight={''} width={undefined} outerImg={''} minHeight={''} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

const publisher = [
    {
        pic: Autohr,
        publisherName: 'Adnan Harris',
        profession: 'Managing Editor',
        alt: 'Author',
        date: new Date().toLocaleString('en-US', { dateStyle: 'long' }),
    }
]

const trendingPost = [
    {
        img: Bike,
        btnTitle: 'LIFE STYLE',
        title: 'Guide To Learn The Ancient Practice Of Koi Fish Breeding'
    },
    {
        img: Car,
        btnTitle: 'AUTOMOTIVE',
        title: 'James Bond’s DB5 – The Book That’s Licensed To Thrill'
    },
]