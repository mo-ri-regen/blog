import Link from "next/link";
export const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0 h-8 bg-green-200">
      <nav className="flex justify-center gap-x-4">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/profile">
          <a>profile</a>
        </Link>
      </nav>
    </header>
  );
};
