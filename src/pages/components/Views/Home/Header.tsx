import React from 'react'
import Card from '../../Card'
import Title from '../Title'
const Header = () => {
    return (
        <div className='container pt-8'>
            <div className='border-b-[1px] border-b-black pb-5'>
                <Title title1='Get' title2='Inspired' fontWeight='600' paddingLeft='15px' />
            </div>
            <div className='flex justify-between gap-5 pt-10'>
                <div>
                    <div className='max-w-[280px] object-cover font-semibold border-b-[1px] border-b-black pb-5'>
                        <Card image='/imgs/8reasons.jpg' buttonTitle='FINANCES' title="8 Reasons To Become A Design Preneur This Days" fontSize={''} seccolor={''} square={undefined} fontweight={''} display={''} maxWidth={undefined} visible={''} gap={''} alignItems={''} maxHeight={''} title2={''} secFontweight={undefined} secFontSize={undefined} />
                    </div>

                    <div className='max-w-[280px] object-cover font-semibold pt-7 border-b-[1px] border-b-black pb-[22px]'>
                        <Card image='/imgs/car.jpg' buttonTitle='AUTOMOTIVE' title="Review of the Best Roof Top Cars For This Year" fontSize={''} seccolor={''} square={undefined} fontweight={''} display={''} maxWidth={undefined} visible={''} gap={''} alignItems={''} maxHeight={''} title2={''} secFontweight={undefined} secFontSize={undefined} />
                    </div>
                </div>
                <div className='max-w-[650px] object-cover font-semibold border-b-[1px] border-b-black pb-9'>
                    <Card image='/imgs/building.jpg' fontSize="41px" buttonTitle='ARCITECTURE' title="Announcing Our First Magazine Blog Template on Webflow!" seccolor={''} square={undefined} fontweight={''} display={''} maxWidth={undefined} visible={''} gap={''} alignItems={''} maxHeight={''} title2={''} secFontweight={undefined} secFontSize={undefined} />
                </div>
                <div>
                    <div className='max-w-[280px] object-cover  font-semibold border-b-[1px] border-b-black pb-5'>
                        <Card image='/imgs/food.jpg' buttonTitle='LIFE STYLE' title="10 Healthy Food Blogs To Follow Right Now" fontSize={''} seccolor={''} square={undefined} fontweight={''} display={''} maxWidth={undefined} visible={''} gap={''} alignItems={''} maxHeight={''} title2={''} secFontweight={undefined} secFontSize={undefined} />
                    </div>
                    <div className='max-w-[280px] object-cover  font-semibold pt-7 border-b-[1px] border-b-black pb-9'>
                        <Card image='/imgs/diary.jpg' buttonTitle='FINANCES' title="5 Personal Finance Tips Every Freelancer Should Know" fontSize={''} seccolor={''} square={undefined} fontweight={''} display={''} maxWidth={undefined} visible={''} gap={''} alignItems={''} maxHeight={''} title2={''} secFontweight={undefined} secFontSize={undefined} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header