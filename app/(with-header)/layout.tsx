import Logo from "@/components/ui/logo";
import Link from "next/link";

export default function WithHeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="px-6 py-3 bg-gradient-to-t from-zinc-50 to-zinc-100">
        <nav className="flex items-center justify-between mx-auto max-w-[1000px] gap-6 *:flex *:items-center *:gap-4">
          <div>
            <Link href="/">Dashboard</Link>
            <Link href="/settings">Settings</Link>
          </div>
          <Logo size={25} />
          <div>
            <a href="/">Source</a>
            <a href="/">About</a>
          </div>
        </nav>
      </header>
      {children}
    </>
  );
}
