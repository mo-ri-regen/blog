import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../../../styles/Home.module.css";
import Link from "next/link";
import React from "react";
import "remixicon/fonts/remixicon.css";
const Footer: NextPage = () => {
  return (
    <div className="bg-green-200 absolute bottom-0 inset-x-0 h-8">
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

export default Footer;
