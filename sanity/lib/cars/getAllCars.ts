import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export async function getAllCars() {
  const ALL_CARS_QUERY = defineQuery(`
   *[_type == "product"]
   | order(name asc){
     ...,
     category->{
       title,
     }
   }
    `);

  try {
    const cars = await sanityFetch({
      query: ALL_CARS_QUERY,
    });
    return cars.data || [];
  } catch (error) {
    console.log("Error fetching cars", error);
    return [];
  }
}
