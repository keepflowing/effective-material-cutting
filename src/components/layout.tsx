import Link from "next/link";

export default function Layout({ children } : any) {
  return (
    <>
      <header className="w-full flex gap-x-2">
        <div>
          <Link href="/">Home</Link>
        </div>
        <div>
          <Link href="/solve">Solve</Link>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
}