import Image from 'next/image'
import React from 'react'
import Card from '../../Card'
import Red from '../../../../../public/imgs/red.jpg'
import Orange from '../../../../../public/imgs/orange.jpg'
import Blue from '../../../../../public/imgs/blue.jpg'
import Yellow from '../../../../../public/imgs/yellow.jpg'

const Editors = () => {
    return (
        <div className='bg-[#020202] mt-20 py-14'>
            <div className='container'>
                <h1 className='text-white text-4xl font-semibold pb-10'>Editors' Choice</h1>
                <div className='flex gap-5'>
                    {cards.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className='border-b-[1px] border-b-[#DADADA] pb-5'>
                                    <Card image={item.img} buttonTitle={item.buttonTitle} title={item.title} seccolor="#FFF" fontSize={''} square={undefined} fontweight={'600'} display={''} maxWidth={undefined} visible={''} gap={''} alignItems={''} maxHeight={''} title2={''} secFontweight={undefined} secFontSize={undefined} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Editors

const cards = [
    {
        img: Red,
        buttonTitle: "FINANCES",
        title: "Sticking To a Purpose Driven Savings Plan"
    },
    {
        img: Orange,
        buttonTitle: "FINANCES",
        title: "Getting Started With Crypto As a Designers"
    }, {
        img: Blue,
        buttonTitle: "FINANCES",
        title: "The New Frontier Of Crypto Design Today"
    }, {
        img: Yellow,
        buttonTitle: "FINANCES",
        title: "What Is Crypto And Why Your Should Care"
    },
]