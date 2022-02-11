import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";
import { client } from "../lib/client";
import Link from "next/link";
import { Header } from "../component/layout/container/header";
import { blog } from "../common/type";
import { Footer } from "../component/layout/container/footer";

const Home: NextPage = ({ articles }: any) => {
  return (
    <div>
      <Head>
        <title>アウトプットまとめ</title>
        <meta name="description" content="アウトプットまとめ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

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
      <Footer />
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
