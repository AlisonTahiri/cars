import { getAllCars } from "@/sanity/lib/cars/getAllCars";
import { client } from "@/sanity/lib/client";

type Params = Promise<{ slug: string }>;

async function CarDetails({ params }: { params: Params }) {
  const { slug } = await params;
  const cars = await getAllCars();

  const car = cars.find((car) => car.slug?.current === slug);

  return <pre>{JSON.stringify(car, null, 2)}</pre>;
}

export default CarDetails;

export async function generateStaticParams() {
  // Using the following query to avoid draftMode Error.
  const ALL_CARS_QUERY = `
   *[_type == "product"]
   | order(name asc) 
    `;
  const cars = await client.fetch(ALL_CARS_QUERY);
  return cars.map((car) => ({
    slug: car.slug?.current,
  }));
}
