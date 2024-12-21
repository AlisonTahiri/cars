import { getAllCars } from "@/sanity/lib/cars/getAllCars";
import CarsList from "../components/CarsList";

export default async function Home() {
  const cars = await getAllCars();
  return <CarsList cars={cars} />;
}
