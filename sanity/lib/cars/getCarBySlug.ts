import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getCarBySlug = async (slug: string) => {
  const CAR_BY_SLUG_QUERY = defineQuery(`
     *[_type == "product" && slug.current == $slug][0]
        `);

  try {
    const car = await sanityFetch({
      query: CAR_BY_SLUG_QUERY,
      params: {
        slug,
      },
      perspective: "published",
      stega: false,
    });
    return car.data || null;
  } catch (error) {
    console.log("Error fetching car data. ", error);
    return null;
  }
};
