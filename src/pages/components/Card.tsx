
import { FC } from "react"
import Image from 'next/image'
import Button from './Buton';

interface CardProps {
  image?: any;
  tag?: string;
  title: string;
  buttonTitle: string;
  fontSize: string;
  seccolor: string;
  maxheight?: string;
  square: any;
  fontweight: string;
  display: string;
  maxWidth: any;
  visible: string;
  gap: string;
  alignItems: string;
  maxHeight: string;
  title2: string;
  secFontweight: any;
  secFontSize: any;
}

const Card: FC<CardProps> = ({ image, tag = "tag", title = "title", buttonTitle, fontSize = "16px", seccolor, fontweight, display, maxWidth, visible, gap, alignItems, maxHeight, title2, secFontweight, secFontSize }: CardProps) => {

  return (
    <div
      style={
        {
          display: display,
          gap: gap,
          alignItems: alignItems,
        }
      }
    >
      <div
        style={
          {
            maxWidth: maxWidth,
            maxHeight: maxHeight
          }
        }
      >
        <Image
          src={image} width={1000} height={100} alt={tag} />
      </div>
      <div className='pt-3'>
        <span>
          <Button padding='1px 11px' show={visible} fontSize='11px' borderRadius='70px' title={buttonTitle} />
        </span>
        <p className='pt-4'
          style={
            {
              fontSize: fontSize,
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
              fontSize: secFontSize,
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