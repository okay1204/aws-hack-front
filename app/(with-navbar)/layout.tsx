"use client"
import Logo from "@/components/ui/logo";
import Link from "next/link";
import Appear from "./Appear";
import { userInfoStore } from "@/store/store";
import { useEffect } from "react";

export default function WithHeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const restaurantName = userInfoStore((state) => state.restaurantName);

  useEffect(() => {
    console.log(restaurantName);
  }, [])
  return (
    <>
      <header className="px-6 py-3 bg-gradient-to-t from-zinc-50 to-zinc-100">
        <nav className="flex items-center justify-between mx-auto max-w-[1000px] gap-6 *:flex *:items-center *:gap-4">
          <div>
            <Link href={"/" + restaurantName}>Dashboard</Link>
            <Link href="/settings">Settings</Link>
          </div>
          <Logo size={25} />
          <div>
            <a href="/source">Source</a>
            <a href="/about">About</a>
          </div>
        </nav>
      </header>
      <Appear>{children}</Appear>
    </>
  );
}
