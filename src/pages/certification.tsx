import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";
import { client } from "../lib/client";
import Link from "next/link";
import { Header } from "../component/layout/container/header";
import { CertificationType } from "../common/certification-type";
import { Footer } from "../component/layout/container/footer";
import { format } from "date-fns";

const Certification: NextPage = ({ articles }: any) => {
  console.log(articles);
  return (
    <div>
      <Head>
        <title>アウトプットまとめ</title>
        <meta name="description" content="アウトプットまとめ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="relative top-32 left-32">
        <h1>取得資格</h1>
        <ul className="font-medium">
          {articles.map((article: CertificationType) => (
            <li key={article.id}>
              <p className="inline-block m-2">
                {format(new Date(article.date), "yyyy-MM-dd")}
              </p>
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

export default Certification;

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: "certification" });

  return {
    props: {
      articles: data.contents,
    },
  };
};
