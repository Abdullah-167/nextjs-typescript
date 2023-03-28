import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Card from "../../Card"

export default function App() {
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slides: {
            perView: 2,
            spacing: 10,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })

    return (
        <div className="">
            <div className="navigation-wrapper max-w-[300px] sm:max-w-[950px] mx-auto pb-10">
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide text-[12px] sm:text-[20px] font-medium border-b-[1px] border-b-black"><Card image='/imgs/gclass.jpg' title={"Call for Entries: Architect Awards Is Open for Submissions!"} buttonTitle={"AUTOMOTIVE"} seccolor={""} fontweight={""} display={""} visible={""} gap={""} alignItems={""} title2={""} secFontweight={undefined} secFontSize={undefined} show={""} imgMaxHeight={""} width={undefined} outerImg={""} minHeight={""} /></div>
                    <div className="keen-slider__slide text-[12px] sm:text-[20px] font-medium border-b-[1px] border-b-black"><Card image='/imgs/gclass.jpg' title={"Call for Entries: Architect Awards Is Open for Submissions!"} buttonTitle={"AUTOMOTIVE"} seccolor={""} fontweight={""} display={""} visible={""} gap={""} alignItems={""} title2={""} secFontweight={undefined} secFontSize={undefined} show={""} imgMaxHeight={""} width={undefined} outerImg={""} minHeight={""} /></div>
                    <div className="keen-slider__slide text-[12px] sm:text-[20px] font-medium border-b-[1px] border-b-black"><Card image='/imgs/gclass.jpg' title={"Call for Entries: Architect Awards Is Open for Submissions!"} buttonTitle={"AUTOMOTIVE"} seccolor={""} fontweight={""} display={""} visible={""} gap={""} alignItems={""} title2={""} secFontweight={undefined} secFontSize={undefined} show={""} imgMaxHeight={""} width={undefined} outerImg={""} minHeight={""} /></div>
                    <div className="keen-slider__slide text-[12px] sm:text-[20px] font-medium border-b-[1px] border-b-black"><Card image='/imgs/gclass.jpg' title={"Call for Entries: Architect Awards Is Open for Submissions!"} buttonTitle={"AUTOMOTIVE"} seccolor={""} fontweight={""} display={""} visible={""} gap={""} alignItems={""} title2={""} secFontweight={undefined} secFontSize={undefined} show={""} imgMaxHeight={""} width={undefined} outerImg={""} minHeight={""} /></div>

                </div>
            </div>
            {loaded && instanceRef.current && (
                <div className="dots">
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
    )
}

function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
}) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${props.left ? "arrow--left" : "arrow--right"
                } ${disabeld}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}
