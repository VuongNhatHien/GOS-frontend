"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="flex flex-col flex-1 bg-secondary p-4">
      <p className="font-bold text-2xl self-center">Menu</p>
      <div className="flex flex-col gap-2 mt-4">
        <Link className={pathname === '/' ? `text-primary font-bold` : `hover:font-bold`} href={"/"}>Dashboard</Link>

        <Link className={pathname === '/scores' ? `text-primary font-bold` : `hover:font-bold`} href={"/scores"}>Search Scores</Link>

        <Link className={pathname === '/reports' ? `text-primary font-bold` : `hover:font-bold`} href={"/reports"}>Reports</Link>

        <Link className={pathname === '/settings' ? `text-primary font-bold` : `hover:font-bold`} href={"/settings"}>Settings</Link>
      </div>
    </div>
  );
}
