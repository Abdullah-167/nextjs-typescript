import Card from '../../Card'
import Red from '../../../../../public/imgs/red.jpg'
import Orange from '../../../../../public/imgs/orange.jpg'
import Blue from '../../../../../public/imgs/blue.jpg'
import Yellow from '../../../../../public/imgs/yellow.jpg'

const Editors = () => {
    return (
        <div className='bg-[#020202] mt-20 py-14'>
            <div className='container px-5'>
                <h1 className='text-white text-4xl font-semibold pb-10'>{`Editors' Choice`}</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                    {cards.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className='border-b-[1px] border-b-[#DADADA] pb-5'>
                                    <Card image={item.img} buttonTitle={item.buttonTitle} title={item.title} seccolor="#FFF" fontweight={'600'} display={''} visible={''} gap={''} alignItems={''} title2={''} secFontweight={''} secFontSize={''} show={''} imgMaxHeight={'150px'} width={''} outerImg={''} minHeight={''}/>
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