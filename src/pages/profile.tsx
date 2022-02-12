import type { NextPage } from "next";
import { Footer } from "../component/layout/container/footer";
import { Header } from "../component/layout/container/header";
import { GetStaticProps } from "next";
import { client } from "../lib/client";
import { ProfileType } from "../common/profile-type";
const Profile: NextPage = ({ articles }: any) => {
  return (
    <div>
      <Header />
      <h1>プロフィール</h1>

      <main className="relative top-32 left-32">
        <h1>取得資格</h1>
        <ul className="font-medium">
          {articles.map((article: ProfileType) => (
            <li key={article.id}>{article.text}</li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: "profile" });

  return {
    props: {
      articles: data.contents,
    },
  };
};
