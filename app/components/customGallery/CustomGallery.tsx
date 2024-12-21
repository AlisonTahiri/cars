"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import ImageViewer from "./ImageViewer";

type Props = {
  images: ImageProps[];
};

export default function CustomGallery({ images }: Props) {
  const [selectedImage, setSelectedImage] = useState<string>(
    images[0].src as string
  );
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handleOnClicked = (src: string, index: number) => {
    setSelectedImage(src);
    setCurrentImageIndex(index);
  };

  const handleNextImage = () => {
    const nextIndex =
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setSelectedImage(images[nextIndex].src as string);
    setCurrentImageIndex(nextIndex);
  };

  const handlePreviousImage = () => {
    const prevIndex =
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setSelectedImage(images[prevIndex].src as string);
    setCurrentImageIndex(prevIndex);
  };

  return (
    <div className="flex flex-col">
      {selectedImage && (
        <ImageViewer
          selectedImage={selectedImage}
          onNext={handleNextImage}
          onPrev={handlePreviousImage}
        />
      )}
      <div className="hidden sm:flex flex-row flex-wrap justify-between gap-3 px-0">
        {images.map((image, index) => (
          <Image
            key={index}
            {...image}
            priority={index === 0}
            alt={image.alt}
            className={`border-4 border-solid border-blue-900 flex-1 w-28 cursor-pointer hover:transform hover:scale-105 transition-transform ${currentImageIndex === index ? "border-blue-700" : ""}`}
            onClick={() => handleOnClicked(image.src as string, index)}
            width={160}
            height={120}
          />
        ))}
      </div>
    </div>
  );
}
