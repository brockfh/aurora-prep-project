import Link from "next/link";

export const SideBar = () => {
  return (
    <aside className="bg-zinc-900 text-white min-h-screen p-2">
      <h6 className="font-bold text-xl mb-8">💰 Brock's Bank</h6>
      <nav className="text-sm">
        <ul className="space-y-2">
          <li>
            <Link href={"/dashboard"}>Dashboard</Link>
          </li>
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
