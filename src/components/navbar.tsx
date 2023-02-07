import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="relative z-20 w-full p-4 text-1xl">
      <ul className="flex gap-12">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
