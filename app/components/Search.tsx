"use client";

import Form from "next/form";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function Search() {
  const searchParams = useSearchParams();

  const query = searchParams.get("query");

  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch(query || "");
  }, [query]);

  return (
    <Form action="/search" className="sm:flex-1 max-w-md">
      <input
        type="text"
        name="query"
        placeholder="Search for products"
        className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-full max-w-4xl px-4 py-2 text-gray-800 bg-gray-100 border rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Form>
  );
}

function SearchBar() {
  return (
    <Suspense>
      <Search />
    </Suspense>
  );
}

export default SearchBar;
