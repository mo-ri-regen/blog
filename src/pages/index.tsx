import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { client } from "../lib/client";
import Link from "next/link";
import React from "react";
import { Navigation } from "../component/navigation";
import { blog } from "../common/type";

const Home: NextPage = ({ articles }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>記事を書けば</title>
        <meta
          name="description"
          content="自分が今までアウトプットしてきた作品"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navigation />
      </header>
      <div>
        <ul>
          {articles.map((article: blog) => (
            <li key={article.id}>
              <Link href={`${article.link}`}>
                <a>{article.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: "tech-article" });

  return {
    props: {
      articles: data.contents,
    },
  };
};
