import { useState } from 'react'

const Button = ({ title = "Title Here", bordercolor = "#FFF", bwidth = "1px", color = "#000", padding = "0 3px", hoverBg = "#FFF", borderRadius = "5px", fontSize = "16px", show = "", fontColor = '#000' }) => {

    const [isHovered, setIsHovered] = useState(false)

    const onMouseEnter = () => {
        setIsHovered(true)
    }
    const onMouseLeave = () => {
        setIsHovered(false)
    }

    const bgColor = isHovered ? hoverBg : "#FFF";
    const font = isHovered ? fontColor : "#000";
    const outline = isHovered ? bordercolor : "#000"

    return (
        <div>
            <span className='text-[11px] cursor-pointer font-normal'
                style={
                    {
                        borderWidth: bwidth,
                        padding: padding,
                        backgroundColor: bgColor,
                        borderRadius: borderRadius,
                        fontSize: fontSize,
                        display: show,
                        color: font,
                        borderColor: outline,
                    }
                }
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <a>
                    {title}
                </a>
            </span>
        </div>
    )
}

export default Button