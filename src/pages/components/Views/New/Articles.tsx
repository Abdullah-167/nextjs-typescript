import React from 'react'
import Card from '../../Card'

const Articles = () => {
    return (
        <div className='container'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-20 px-5'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    {data.map((item, index) => {
                        return (
                            <div className='font-medium' key={index}>
                                <Card image={item.img} title={item.titel} buttonTitle={item.btnTile} seccolor={''} fontweight={''} display={''} visible={''} gap={''} alignItems={''} title2={''} secFontweight={undefined} secFontSize={undefined} show={''} imgMaxHeight={'300px'} width={undefined} outerImg={''} minHeight={'300px'} />
                            </div>
                        )
                    })}
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    {secData.map((item, index) => {
                        return (
                            <div className='font-medium' key={index}>
                                <Card image={item.img} title={item.titel} buttonTitle={item.btnTile} seccolor={''} fontweight={''} display={''} visible={''} gap={''} alignItems={''} title2={''} secFontweight={undefined} secFontSize={undefined} show={''} imgMaxHeight={'300px'} width={undefined} outerImg={''} minHeight={'300px'} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Articles


const data = [
    {
        img: '/imgs/mercedes.jpg',
        titel: 'Review of the Best Roof Top Cars For This Year',
        btnTile: 'Button'
    },
    {
        img: '/imgs/bike.jpg',
        titel: 'Review of the Best Roof Top Cars For This Year',
        btnTile: 'Button'
    }, {
        img: '/imgs/baking.jpg',
        titel: 'Review of the Best Roof Top Cars For This Year',
        btnTile: 'Button'
    }, {
        img: '/imgs/bridge.jpg',
        titel: 'Review of the Best Roof Top Cars For This Year',
        btnTile: 'Button'
    },
]

const secData = [

    {
        img: '/imgs/cycle.jpg',
        titel: 'Review of the Best Roof Top Cars For This Year',
        btnTile: 'Button'
    }, {
        img: '/imgs/drinking.jpg',
        titel: 'Review of the Best Roof Top Cars For This Year',
        btnTile: 'Button'
    }, {
        img: '/imgs/gclass.jpg',
        titel: 'Review of the Best Roof Top Cars For This Year',
        btnTile: 'Button'
    }, {
        img: '/imgs/stachu.jpg',
        titel: 'Review of the Best Roof Top Cars For This Year',
        btnTile: 'Button'
    },

]