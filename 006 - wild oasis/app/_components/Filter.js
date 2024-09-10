"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = ({ filter }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const handleFilter = (filterBy) => {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filterBy);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="border border-primary-800 flex">
      <button
        onClick={() => handleFilter("all")}
        className={`px-5 py-2 hover:bg-primary-700 ${
          filter === "all" && "bg-primary-700"
        }`}
      >
        All Cabins
      </button>
      <button
        onClick={() => handleFilter("small")}
        className={`px-5 py-2 hover:bg-primary-700 ${
          filter === "small" && "bg-primary-700"
        }`}
      >
        1&mdash;3 guests
      </button>
      <button
        onClick={() => handleFilter("medium")}
        className={`px-5 py-2 hover:bg-primary-700 ${
          filter === "medium" && "bg-primary-700"
        }`}
      >
        4&mdash;7 guests
      </button>
      <button
        onClick={() => handleFilter("large")}
        className={`px-5 py-2 hover:bg-primary-700 ${
          filter === "large" && "bg-primary-700"
        }`}
      >
        8&mdash;12 guests
      </button>
    </div>
  );
};

export default Filter;
