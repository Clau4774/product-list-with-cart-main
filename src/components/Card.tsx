import React from 'react'
import ButtonAddToCart from './ui/ButtonAddToCart'

type ImagesContainer = {
    thumbnail?: string;
    mobile: string;
    tablet: string;
    desktop: string
    }

function Card({image, name, category, price}: {image: ImagesContainer, name: string, category: string, price: number}) {

    const screenWidth = window.innerWidth;
    

    const { mobile, tablet, desktop} = image;

  return (
    <div className="">
        <div>
            <img src={mobile} alt={`The image of a ${name}`}/>
            <ButtonAddToCart/>
        </div>
        <span>{category}</span>
        <p>{name}</p>
        <p>${price.toFixed(2)}</p>
    </div>
  )
}

export default Card
