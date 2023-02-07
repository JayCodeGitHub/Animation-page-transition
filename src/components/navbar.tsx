import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="text-1xl p-4">
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
