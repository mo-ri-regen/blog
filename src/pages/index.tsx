import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";
import { client } from "../lib/client";
import Link from "next/link";
import { Header } from "../component/layout/container/header";
import { content } from "../common/content-type";
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

      <main className="relative top-32 left-32">
        <h1>活動内容</h1>
        <ul className="font-medium">
          {articles.map((article: content) => (
            <li key={article.id}>
              <Link href={`${article.link}`}>
                <a>{article.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
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
