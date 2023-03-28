import { FC } from "react"
import Image from 'next/image'
import Button from './Buton';

interface CardProps {
  image?: any;
  tag?: string;
  title: string;
  buttonTitle: string;
  seccolor: string;
  fontweight: string;
  display: string;
  visible: string;
  gap: string;
  alignItems: string;
  title2: string;
  secFontweight: any;
  secFontSize: any;
  show: string;
  imgMaxHeight:string;
  width:any;
  outerImg:string;
  minHeight:string;
}

const Card: FC<CardProps> = ({ image, tag = "tag", title = "title", buttonTitle, seccolor, fontweight, display, visible, gap, alignItems, title2, secFontweight, show, imgMaxHeight , width , outerImg  , minHeight}: CardProps) => {

  return (
    <div
      className="card"
      style={
        {
          display: display,
          gap: gap,
          alignItems: alignItems,
        }
      }
    >
      <div className="flex justify-center overflow-hidden">
        <div
          style={
            {
              display: show,
              maxHeight:outerImg,
            }
          }
          className={`transition-all duration-500 transform-gpu hover:scale-105`}>
          <Image  
          style={
            {
              maxHeight:imgMaxHeight,
              minWidth:width,
              minHeight:minHeight
            }
          }
          className={`object-cover`}
            src={image} width={1000} height={100} alt={tag} />
        </div>
      </div>
      <div className='pt-3'>
        <span>
          <Button padding='1px 11px' show={visible} fontSize='11px' borderRadius='70px' title={buttonTitle} />
        </span>
        <p className='pt-4'
          style={
            {
              color: seccolor,
              fontWeight: fontweight
            }
          }
        >
          {title}
        </p>
        <p className='pt-4'
          style={
            {
              color: seccolor,
              fontWeight: secFontweight
            }
          }
        >
          {title2}</p>
      </div>
    </div>
  )
}

export default Card