import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const searchCarsByTitle = async (searchParam: string) => {
  const CAR_SEARCH_QUERY = defineQuery(`
     *[_type == "product" && title match $searchParam]
     | order(name asc) 
        `);

  try {
    const cars = await sanityFetch({
      query: CAR_SEARCH_QUERY,
      params: {
        searchParam: `${searchParam}*`, //Append wildcard for partial match
      },
    });
    return cars.data || [];
  } catch (error) {
    console.log("Error fetching cars", error);
    return [];
  }
};
