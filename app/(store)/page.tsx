import { getAllCars } from "@/sanity/lib/cars/getAllCars";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const cars = await getAllCars();
  return (
    <div className="flex flex-col mx-auto max-w-3xl">
      {cars.map((car) => (
        <Link
          key={car._id}
          href={`/cars/${car.slug?.current}`}
          className="p-4 text-gray-900  group flex flex-col sm:flex-row  bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
        >
          <div className="w-full h-full flex items-center justify-center sm:justify-start">
            {car.images?.length && (
              <Image
                src={urlFor(car.images[0]).width(300).height(200).url()}
                alt={car.title || "Product Image"}
                width={300}
                height={200}
              />
            )}
          </div>

          <div className="p-4 w-full text-center sm:text-left">
            <h2 className="text-lg font-semibold">{car.title}</h2>
            <div className="font-semibold text-green-800">{car.price} €</div>
            <div>Viti {car.year}</div>
            <div>{car.kilometers} km</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
