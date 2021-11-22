import React from "react";
import Link from "next/link";
export const Navigation = () => {
  return (
    <>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/profile">
          <a>profile</a>
        </Link>
      </nav>
    </>
  );
};
