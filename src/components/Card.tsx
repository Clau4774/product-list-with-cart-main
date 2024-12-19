import React from "react";
import ButtonAddToCart from "./ui/ButtonAddToCart";

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
    <div className="max-w-80 relative mx-auto">
      <div>
        <img
          className="rounded-md"
          src={checkScreenSize()}
          alt={`The image of a ${name}`}
        />
        <div className="absolute bottom-24 left-2/4 -translate-x-1/2">
          <ButtonAddToCart {...infoSend} />
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-10">
        <span className="text-gray-400">{category}</span>
        <p className="font-semibold">{name}</p>
        <p className="font-semibold text-red-500">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Card;
