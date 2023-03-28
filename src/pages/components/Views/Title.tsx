import React from 'react'

const Title = ({ title1 = "Get", title2 = "Inspired", color1 = "#000", color2 = "#B5BBC0", fontWeight = "100", paddingLeft = "10px" }) => {

    return (
        <div>
            <h1
    

                style={
                    {
                        fontWeight: fontWeight,
                    }
                }
            >
                <span className=' leading-[50px]'
                    style={
                        {
                            color: color1
                        }
                    }
                >{title1}</span>
                <span className=''
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