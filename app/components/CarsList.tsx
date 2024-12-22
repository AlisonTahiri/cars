import { ALL_CARS_QUERYResult, CAR_SEARCH_QUERYResult } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { Link } from "next-view-transitions";
import Image from "next/image";
import React from "react";

type Props = {
  cars: CAR_SEARCH_QUERYResult | ALL_CARS_QUERYResult;
};
function CarsList({ cars }: Props) {
  return (
    <div className="flex flex-col gap-2 sm:gap-3">
      {cars.map((car) => (
        <Link
          key={car._id}
          href={`/cars/${car.slug?.current}`}
          className="p-4 text-gray-900  group flex flex-col gap-2 sm:flex-row  bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
        >
          <div className="w-full h-full flex items-center justify-center sm:justify-start">
            {car.images?.length && (
              <Image
                src={urlFor(car.images[0]).width(300).height(200).url()}
                alt={car.title || "Product Image"}
                width={300}
                height={200}
                priority
              />
            )}
          </div>

          <h2 className="text-lg font-semibold text-center sm:text-left">
            {car.title}
          </h2>
          <div className="w-full text-center sm:text-left flex gap-2 items-center justify-center sm:block text-gray-800">
            <div className="font-semibold text-green-700 bg-gray-200 rounded-md px-2 py-1">
              {car.price} €
            </div>
            <div className="font-semibold text-inherit bg-gray-200 rounded-md px-2 py-1">
              Viti {car.year}
            </div>
            <div className="font-semibold text-inherit bg-gray-200 rounded-md px-2 py-1">
              {car.kilometers} km
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CarsList;
