import CarsList from "@/app/components/CarsList";
import { searchCarsByTitle } from "@/sanity/lib/cars/searchCarsByTitle";

async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{
    query: string;
  }>;
}) {
  const { query } = await searchParams;

  const cars = await searchCarsByTitle(query);

  if (!cars.length) {
    return (
      <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-center">
            No cars fount for {query}.
          </h1>
          <p className="text-gray-600 text-center">
            Try searching with different keywords.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">
        Search results for &quot;{query}&quot;
      </h1>
      <CarsList cars={cars} />
    </div>
  );
}

export default SearchPage;
