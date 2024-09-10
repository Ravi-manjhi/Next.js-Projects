import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function Navigation() {
  const session = await auth();
  
  const NavigationLinks = [
    { name: "Cabins", url: "/cabins", img: false },
    { name: "About", url: "/about", img: false },
    {
      name: session?.user?.name ? session?.user?.name : "Guest area",
      url: "/account",
      img: true,
    },
  ];

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        {NavigationLinks?.map((el) => (
          <li key={el?.url}>
            <Link
              href={el?.url}
              className="hover:text-accent-400 flex items-center justify-center gap-2  transition-colors"
            >
              {el?.img && session?.user?.image && (
                <img
                  src={session?.user?.image}
                  alt="profile"
                  className="h-8 rounded-full"
                  referrerPolicy="no-referrer"
                />
              )}

              <span className="hover:border-b-2 hover:border-b-accent-400">
                {el?.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
