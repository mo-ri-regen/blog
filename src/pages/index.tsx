import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { client } from "../lib/client";
import Link from "next/link";
const Home: NextPage = ({ blog }) => {
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

      <div>
        <ul>
          {blog.map((blog) => (
            <li key={blog.id}>
              <Link href={`${blog.link}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "tech-article" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
