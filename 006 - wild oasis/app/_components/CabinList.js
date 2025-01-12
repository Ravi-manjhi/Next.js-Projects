// import { unstable_noStore } from "next/cache";
import { getCabins } from "../_lib/data-service";
import CabinCard from "./CabinCard";

export default async function CabinList({ filter }) {
  // unstable_noStore();
  const cabins = await getCabins();

  let displayCabins;
  displayCabins = cabins.filter((cabin) => {
    if (filter === "all") return true;
    if (filter === "small") return cabin.maxCapacity <= 3;
    if (filter === "medium")
      return (cabin.maxCapacity >= 4) & (cabin.maxCapacity <= 7);
    if (filter === "large") return cabin.maxCapacity >= 8;
  });

  if (!cabins.length) return;
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayCabins?.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
