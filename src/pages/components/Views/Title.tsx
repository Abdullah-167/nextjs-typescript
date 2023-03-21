import React from 'react'

const Title = ({ title1 = "Get", title2 = "Inspired", color1 = "#000", color2 = "#B5BBC0", fontSize = "48px", fontWeight = "100", paddingLeft = "10px", maxWidth = "full" }) => {
    return (
        <div>
            <h1
                style={
                    {
                        fontSize: fontSize,
                        fontWeight: fontWeight,
                        maxWidth: maxWidth
                    }
                }
            >
                <span
                    style={
                        {
                            color: color1
                        }
                    }
                >{title1}</span>
                <span
                    style={
                        {
                            color: color2,
                            paddingLeft: paddingLeft
                        }
                    }
                >{title2}
                </span>
            </h1>
        </div>
    )
}

export default Title