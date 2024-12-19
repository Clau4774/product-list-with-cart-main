import React from 'react'
import ButtonAddToCart from './ui/ButtonAddToCart'

type ImagesContainer = {
  thumbnail?: string;
  mobile: string;
  tablet: string;
  desktop: string;
};

function Card({
  image,
  name,
  category,
  price,
}: {
  image: ImagesContainer;
  name: string;
  category: string;
  price: number;
}) {
  const { mobile, tablet, desktop, thumbnail } = image;

  const infoSend = {
    name,
    price,
    thumbnail,
  };

  const checkScreenSize = (): string => {
    const screenWidth = window.innerWidth;

    console.log("screenWidth", screenWidth);

    if (screenWidth < 768) {
      return mobile;
    }

    if (screenWidth >= 768 && screenWidth < 1024) {
      return tablet;
    }

    return desktop;
  };

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
