"use client";
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
          className="p-4 text-gray-900  group flex flex-col sm:flex-row  bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
        >
          <div className="w-full h-full flex items-center justify-center sm:justify-start">
            {car.images?.length && (
              <Image
                src={urlFor(car.images[0]).width(300).height(200).url()}
                alt={car.title || "Product Image"}
                width={300}
                height={200}
                priority
                view-transition-name={car.images[0]._key}
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

export default CarsList;
