"use client";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

type Props = {
  images: ReactImageGalleryItem[];
};

function Gallery({ images }: Props) {
  // current view width
  //   const width = window.innerWidth;
  //   const showFullscreenButton = width > 768;

  return <ImageGallery autoPlay items={images} />;
}

export default Gallery;
