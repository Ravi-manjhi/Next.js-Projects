import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const cabin = await getCabin(params.cabinId);
  return {
    title: `Cabin ${cabin?.name}`,
    description: cabin?.description,
  };
}

export async function generateStaticParams() {
  const cabins = await getCabins();
  const ids = cabins.map((el) => ({ cabinId: String(el.id) }));
  return ids;
}

export default async function CabinDetails({ params }) {
  const cabin = await getCabin(params.cabinId);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />

      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {cabin?.name} today. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />} key={cabin?.id}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}