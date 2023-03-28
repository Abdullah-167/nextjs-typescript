import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"
import Mercedes from '../../../../../public/imgs/mercedes.jpg'

export default function App() {
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })

    return (
        <div className="container flex flex-wrap lg:flex-nowrap gap-5 justify-center py-10 sm:py-32 px-5">
            <div>
                <div className="max-w-[600px] mx-auto">
                    <div ref={sliderRef} className="keen-slider">
                        {vedio.map((item, index) => {
                            return (
                                <div className="keen-slider__slide flex justify-center" key={index}><iframe className="w-[300px] sm:w-[600px] h-[300px]" src={item.path}></iframe></div>
                            )
                        })}
                    </div>
                </div>
                {loaded && instanceRef.current && (
                    <div className="flex justify-center py-7 max-w-[200px] mx-auto">
                        {[
                            ...Array(instanceRef.current.track.details.slides.length).keys(),
                        ].map((idx) => {
                            return (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        instanceRef.current?.moveToIdx(idx)
                                    }}
                                    className={"dot" + (currentSlide === idx ? " active" : "")}
                                ></button>
                            )
                        })}
                    </div>
                )}
            </div>
            <div >
                <Image className="max-w-full sm:max-h-[300px] object-cover" src={Mercedes} width={1000} height={400} alt={"jeep"} />
            </div>
        </div>
    )
}


const vedio = [
    {
        path: "https://www.youtube.com/embed/BLyz7_Ou5bY",
    },
    {
        path: "https://www.youtube.com/embed/ou0phHbzz-0",
    }, {
        path: "https://www.youtube.com/embed/Dtz5h3DGMYg",
    }, {
        path: "https://www.youtube.com/embed/Dtz5h3DGMYg",
    },
    {
        path: "https://www.youtube.com/embed/v48BeKp23yQ",
    },
]
