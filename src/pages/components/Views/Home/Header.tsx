import React from 'react'
import Card from '../../Card'
import Title from '../Title'
const Header = () => {
    return (
        <div className='container pt-8 px-5'>
            <div className='border-b-[1px] text-3xl sm:text-5xl border-b-black pb-5'>
                <Title title1='Get' title2='Inspired' fontWeight='600' paddingLeft='15px' />
            </div>
            <div className='flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-5 pt-10'>
                <div>
                    <div className='max-w-[600px] lg:max-w-[280px] object-cover font-semibold border-b-[1px] border-b-black pb-5'>
                        <Card image='/imgs/8reasons.jpg' buttonTitle='FINANCES' title="8 Reasons To Become A Design Preneur This Days" seccolor={''} fontweight={''} display={''} visible={''} gap={''} alignItems={''} title2={''} secFontweight={''} secFontSize={''} show={''} imgMaxHeight={''} width={''} outerImg={''} minHeight={''} speed={''}  />
                    </div>

                    <div className='max-w-[600px] lg:max-w-[280px] object-cover font-semibold pt-7 border-b-[1px] border-b-black pb-[22px]'>
                        <Card image='/imgs/car.jpg' buttonTitle='AUTOMOTIVE' title="Review of the Best Roof Top Cars For This Year" seccolor={''} fontweight={''} display={''} visible={''} gap={''} alignItems={''} title2={''} secFontweight={''} secFontSize={''} show={''} imgMaxHeight={''} width={''} outerImg={''} minHeight={''} speed={''}  />
                    </div>
                </div>
                <div className='max-w-[600px]  xl:max-w-[600px] text-lg lg:text-[38px] leading-[20px] lg:leading-[45px] object-cover font-semibold border-b-[1px] border-b-black pb-9'>
                    <Card image='/imgs/building.jpg' buttonTitle='ARCITECTURE' title="Announcing Our First Magazine Blog Template on Webflow!" seccolor={''} fontweight={''} display={''} visible={''} gap={''} alignItems={''} title2={''} secFontweight={''} secFontSize={''} show={''} imgMaxHeight={''} width={''} outerImg={''} minHeight={''} speed={''} />
                </div>
                <div>
                    <div className='max-w-[600px] lg:max-w-[280px] object-cover  font-semibold border-b-[1px] border-b-black pb-5'>
                        <Card image='/imgs/food.jpg' buttonTitle='LIFE STYLE' title="10 Healthy Food Blogs To Follow Right Now" seccolor={''} fontweight={''} display={''} visible={''} gap={''} alignItems={''} title2={''} secFontweight={''} secFontSize={''} show={''} imgMaxHeight={''} width={''} outerImg={''} minHeight={''} speed={''}  />
                    </div>
                    <div className='max-w-[600px] lg:max-w-[280px] object-cover  font-semibold pt-7 border-b-[1px] border-b-black pb-9'>
                        <Card image='/imgs/diary.jpg' buttonTitle='FINANCES' title="Review of the Best Roof Top Cars For This Year" seccolor={''} fontweight={''} display={''} visible={''} gap={''} alignItems={''} title2={''} secFontweight={''} secFontSize={''} show={''} imgMaxHeight={''} width={''} outerImg={''} minHeight={''} speed={''} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header