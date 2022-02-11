import type { NextPage } from "next";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";
export const Footer = () => {
  return (
    <div className="absolute inset-x-0 bottom-0 h-8 bg-green-200">
      <footer className="flex justify-center gap-x-4">
        <Link href="https://twitter.com/mo_ri_regen">
          <a>
            <i className="ri-twitter-fill"></i>
          </a>
        </Link>
        <Link href="https://github.com/mo-ri-regen">
          <a>
            <i className="ri-github-fill"></i>
          </a>
        </Link>
      </footer>
    </div>
  );
};
