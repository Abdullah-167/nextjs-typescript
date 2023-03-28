import Image from 'next/image'
import Man from '../../../../../public/imgs/man.jpg'
import Women from '../../../../../public/imgs/women.jpg'
import Button from '../../Buton'
import Title from '../Title'

const Trend = () => {
    return (
        <div className='trending-bg text-white py-16'>
            <div className='container relative gap-5 z-[.5] px-5'>
                <span className='text-3xl sm:text-[42px]'>
                    <Title color1='white' fontWeight='600' title1='Trending Posts' title2='' />
                </span>
                <div className='flex flex-wrap lg:flex-nowrap gap-5 pt-5 lg:pt-20'>
                    {items.map((item, index) => {
                        return (
                            <div className=' hover:flex-auto  hover:transition-all hover:duration-700 py-4 min-w-[300px]' key={index}>
                                <Button title={item.buttoTitle} color='black' hoverBg='transparent' fontColor='white' bordercolor='white' borderRadius='40px' padding='1px 10px' fontSize='11px' />
                                <p className='font-semibold pt-3 text-2xl'>{item.title1}</p>
                                <p className='pt-3'>{item.title2}</p>
                                <div className='flex items-center gap-2 pt-3'>
                                    <span>By</span>
                                    <div className='w-10 h-10'>
                                        <Image className='rounded-full object-cover' src={item.img} alt={item.alt} />
                                    </div>
                                    <p className='font-semibold'>{item.publisher}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Trend

const items = [
    {
        buttoTitle: "AUTOMOTIVE",
        title1: 'Honda Announces Four New Electric Motorcycles Coming',
        title2: 'Do you freelance or work at a digital agency? Are you planning out your NCC agenda? Here are 5 sessions that you need to check out.',
        img: Man,
        publisher: "Adan Harris",
        alt: 'man',
        line: ''

    },
    {
        buttoTitle: "Life Style",
        title1: 'Guide To Learn The Ancient Practice Of Koi Fish Breeding',
        title2: 'Do you freelance or work at a digital agency? Are you planning out your NCC agenda? Here are 5 sessions that you need to check out.',
        img: Women,
        publisher: "Adan Harris",
        alt: 'women',
        line: ''

    }, {
        buttoTitle: "AUTOMOTIVE",
        title1: 'James Bond’s DB5 – The Book That’s Licensed To Thrill',
        title2: 'Do you freelance or work at a digital agency? Are you planning out your NCC agenda? Here are 5 sessions that you need to check out.',
        img: Man,
        publisher: "Adan Harris",
        alt: 'man'
    },
]