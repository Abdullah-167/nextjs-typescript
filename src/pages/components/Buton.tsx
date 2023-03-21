import { useState } from 'react'

const Button = ({ title = "Title Here", bordercolor = "#000", bwidth = "1px", color = "#000", padding = "0 3px", hoverBg = "#FFF", borderRadius = "5px", fontSize = "16px", show = "" }) => {

    const [isHovered, setIsHovered] = useState(false)
    const onMouseEnter = () => {
        setIsHovered(true)
    }
    const onMouseLeave = () => {
        setIsHovered(false)
    }

    const bgColor = isHovered ? hoverBg : "#FFF";
    return (
        <div>
            <span className='text-[11px] cursor-pointer'
                style={
                    {
                        borderColor: bordercolor,
                        borderWidth: bwidth,
                        color: color,
                        padding: padding,
                        backgroundColor: bgColor,
                        borderRadius: borderRadius,
                        fontSize: fontSize,
                        display: show
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