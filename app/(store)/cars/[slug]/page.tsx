import CustomGallery from "@/app/components/customGallery/CustomGallery";
// import Gallery from "@/app/components/Gallery";
import { getAllCars } from "@/sanity/lib/cars/getAllCars";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import { ImageProps } from "next/image";
// import { ReactImageGalleryItem } from "react-image-gallery";

type Params = Promise<{ slug: string }>;

async function CarDetails({ params }: { params: Params }) {
  const { slug } = await params;
  const cars = await getAllCars();

  const car = cars.find((car) => car.slug?.current === slug);

  if (!car) {
    return <div>Car not found</div>;
  }

  const images: ImageProps[] =
    car.images?.map((image) => ({
      src: urlFor(image).height(800).url(),
      alt: image.alt || "",
      width: 800,
      height: 600,
    })) || [];

  return (
    <div className="container mx-auto flex flex-col gap-2 items-center max-w-lg md:max-w-2xl lg:max-w-3xl pt-2">
      {/* <div className="bg-green-200 self-end rounded-md px-2 italic">
        {car?.category?.title}
      </div> */}
      <CustomGallery images={images} />

      <div className="self-start">
        <h1 className="text-3xl font-bold mb-4">{car.title}</h1>
        <div className="text-xl font-semibold mb-4">
          ${car.price?.toFixed(2)} €
        </div>

        <div className="text-gray-600 italic">Viti i prodhimit: {car.year}</div>
        <div className="text-gray-600 italic">Karburanti: {car.fuel}</div>
        <div className="text-gray-600 italic">Kilometra: {car.kilometers}</div>

        <div className="prose max-w-none mb-6">
          {Array.isArray(car.description) && (
            <PortableText value={car.description} />
          )}
        </div>
      </div>
    </div>
  );
}

export default CarDetails;

export async function generateStaticParams() {
  // Using the following query to avoid draftMode Error.
  const ALL_CARS_QUERY = `
   *[_type == "product"]{
      slug
    }`;

  const cars = await client.fetch(ALL_CARS_QUERY);
  return cars.map((car: { slug: { current: string } }) => ({
    slug: car.slug?.current,
  }));
}
